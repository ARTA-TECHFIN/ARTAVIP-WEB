import { textClass } from '../Text'
import { useState } from 'react'

import { TabBar } from '../TabBar'
import JobCards from 'src/components/PageJoinUs/JobCards'
import { FC } from 'react'
import { useTranslation } from 'next-i18next'

type propsT = {
  k: any
  jobs: any
}

const SectionJobOpenings: FC<propsT> = ({ k, jobs }) => {
  const { t } = useTranslation('common')

  const TABS = {
    all: t("join_us.all"),
    fontOffice: t("join_us.front_office"),
    middleAndBackOffice: t("join_us.back_office"),
  } as const

  const [selectedTab, setSelectedTab] = useState(TABS["all"])

  const filteredJobs = jobs.filter((job: any) => {
    if (selectedTab === TABS['all']) return job

    if (selectedTab === TABS['fontOffice']) {
      return job.attributes.category === 'Front Office' || job.attributes.category === 'All'
    }

    if (selectedTab === TABS['middleAndBackOffice']) {
      return job.attributes.category === 'Middle Office' || job.attributes.category === 'Back Office' || job.attributes.category === 'All'
    }
  })

  return (
    <div className="bg-arta-eggshell-100 py-12 md:py-[150px]" id="job-opening">
      <div className="arta-container mx-auto">
        <div className="text-center lg:w-3/5 lg:mx-auto">
          <h3 className={textClass.h2_style2}>{t('join_us.job_openings')}</h3>
          <div className={`${textClass.body_regular_verah} mt-4 whitespace-pre-line`} dangerouslySetInnerHTML={{__html: k.job_openings_description}} />
        </div>
        <div className="arta-hide-scrollbar -mx-6 overflow-auto py-16 md:mx-0 ">
          <TabBar
            tabs={[TABS['all'], TABS['fontOffice'], TABS['middleAndBackOffice']]}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <JobCards jobs={filteredJobs} />
      </div>
    </div>
  )
}

export default SectionJobOpenings

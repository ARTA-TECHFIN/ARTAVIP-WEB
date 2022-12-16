import Link from 'next/link'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import SectionBanner from './SectionBanner'
import SectionJobView from './SectionJobView'
import { IconArrowLeft } from 'src/components/Svg/Icon'
import { textClass } from 'src/components/Text'
import { links } from 'src/domains/links'
import { useTranslation } from 'next-i18next'
import { jobDetailsT } from 'src/pages/job/[id]'

const PageJobOpenings = ({ k }: { k: jobDetailsT }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${k.job_title} | ARTA TechFin`}
        description={t('page_description.join_us')}
        keywords={t('page_keywords.join_us')}
        gaType="others"
        gaObj={{
          event_name: 'Job_Openings_Content',
          content: {
            Content: k.job_id,
          },
        }}
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <SectionBanner />
        <div className="bg-arta-eggshell-100 pt-12 pb-[150px]">
          <div className="arta-container mx-auto">
            <Link
              className={`mb-4 flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
              href={`${links.joinUs}#job-opening`}
            >
              <IconArrowLeft fill="#593725" className="mr-2 h-4" />
              {t('join_us.back')}
            </Link>
            <SectionJobView k={k} />
          </div>
        </div>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageJobOpenings

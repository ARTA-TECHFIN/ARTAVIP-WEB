import { Pin } from '../Svg/Icon'
import { textClass } from '../Text'
import Applyform from './ApplyForm'
import { useTranslation } from 'next-i18next'

const SectionJobView = ({k}: any) => {
  const { t } = useTranslation('common')

  return (
    <div className="mx-auto bg-white shadow-blogPost">
      <div className="border-b-2 p-8 ">
        <h2 className="text-[2rem] text-arta-secondary">{k.job_title}</h2>
        <p className={`${textClass.body_regular_verah}`}>{k.department}</p>
        <div className={`${textClass.caption} mt-2 flex items-center`}>
          <div className="flex items-center border-r pr-6">
            <Pin />
            <div className="ml-1">{k.work_location}</div>
          </div>
          <div className="pl-6">{t("join_us.seniority")}: {k.seniority}</div>
        </div>
      </div>
      <div className="job-description border-b-2 px-8 py-8" dangerouslySetInnerHTML={{__html: k.job_description}} />

      <div className="p-12">
        <div className="max-w-[756px]">
          <Applyform />
        </div>
      </div>
    </div>
  )
}

export default SectionJobView

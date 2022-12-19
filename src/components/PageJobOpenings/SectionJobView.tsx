import { Pin } from '../Svg/Icon'
import { textClass } from '../Text'
import ApplyForm from './ApplyForm'
import { useTranslation } from 'next-i18next'
import { jobDetailsT } from 'src/pages/job/[id]'
import { useState } from 'react'
import parse from 'html-react-parser'
import { links } from 'src/domains/links'
import { ButtonAnimated } from '../ButtonAnimated'
import { useRouter } from 'next/router'

const SectionJobView = ({ k }: { k: jobDetailsT }) => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)

  const seniorityMap: any = {
    Junior_en: 'Junior Level',
    Junior_tc: '初級',
    Junior_sc: '初级',
    Middle_en: 'Middle Level',
    Middle_tc: '中級',
    Middle_sc: '中级',
    Senior_en: 'Senior Level',
    Senior_tc: '高級',
    Senior_sc: '高级',
  }

  const g = (keyWithoutLang: string) => seniorityMap[`${keyWithoutLang}_${locale}`] || '--'

  return (
    <div className="mx-auto bg-white shadow-blogPost">
      {!showSuccess && (
        <>
          <div className="border-b-2 p-8 ">
            <h2 className="text-[2rem] text-arta-secondary">{k.job_title}</h2>
            <p className={`${textClass.body_regular_verah}`}>{k.department}</p>
            <div className={`${textClass.caption} mt-2 flex items-center`}>
              <div className="flex items-center border-r pr-6">
                <Pin />
                <div className="ml-1">{k.work_location}</div>
              </div>
              <div className="pl-6">
                {t('join_us.seniority')}: {g(k.seniority)}
              </div>
            </div>
          </div>
          <div className={`${textClass.body_regular} job-description border-b-2 px-8 py-8`}>
            {parse(k.job_description)}
            <p className={`text-arta-secondary`}>{parse(t('join_us.apply_statement'))}</p>
          </div>
          <div className="p-8 lg:p-12">
            <div className="max-w-[756px]">
              <ApplyForm job={k} setShowSuccess={setShowSuccess} />
            </div>
          </div>
        </>
      )}

      {showSuccess && (
        <div className="p-12">
          <p className={`${textClass.body_regular_verah} mb-4`}>{t('join_us.thanks')}</p>
          <p className={`${textClass.body_regular_verah}`}>{parse(t('join_us.thanks_message'))}</p>
          <ButtonAnimated
            as="a"
            href={`${links.joinUs}#job-opening`}
            className="mt-4 border-arta-sand-100 text-arta-sand-100"
          >
            {t('join_us.back')}
          </ButtonAnimated>
        </div>
      )}
    </div>
  )
}

export default SectionJobView

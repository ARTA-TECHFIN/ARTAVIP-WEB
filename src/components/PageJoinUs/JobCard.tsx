import { textClass } from 'src/components/Text'
import { Pin, IconArrowRight } from 'src/components/Svg/Icon'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

type propsT = {
  id: string
  title: string
  subTitle: string
  seniority: string
  location: string
}

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

const JobCard = ({ id, title, subTitle, seniority, location }: propsT) => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  const g = (keyWithoutLang: string) => seniorityMap[`${keyWithoutLang}_${locale}`] || '--'

  return (
    <Link href={`/job/${id}`}>
      <div className="h-full bg-white p-6 shadow-postCard">
        <div className="flex h-full flex-col justify-between">
          <div className="flex justify-between">
            <div className={`${textClass.caption} flex items-center`}>
              <Pin className="mr-1" /> {location}
            </div>
            <IconArrowRight fill="#593725" className="h-[9.26px] w-4" />
          </div>
          <div className="mt-8">
            <h3 className={`${textClass.h6}`}>{title}</h3>
            <h4 className={textClass.body_regular_verah}>{subTitle}</h4>
            <p className={textClass.caption}>
              {t('join_us.seniority')}: {g(seniority)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard

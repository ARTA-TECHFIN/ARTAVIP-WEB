import Image from 'next/image'
import { textClass } from '../Text'
import { useTranslation } from 'next-i18next'

const SectionBanner = () => {
  const { t } = useTranslation('common')
  return (
    <div className="group/bg relative overflow-hidden">
      <div className="easeInOutSine absolute h-full w-full overflow-hidden duration-300">
        <Image
          src="/images/asset-management/bg-introduction.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="arta-container mx-auto h-[480px] py-12 relative z-1 flex flex-col justify-end">
            <p className={textClass.body_regular_verah}>{t("page_title.join_us")}</p>
            <h1 className={`${textClass.h1_style2} mt-1`}>{t("join_us.job_openings")}</h1>
      </div>
    </div>
  )
}

export default SectionBanner

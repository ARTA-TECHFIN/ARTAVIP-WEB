import Image from 'next/image'
import { textClass } from '../Text'
import { useTranslation } from 'next-i18next'

const SectionBanner = () => {
  const { t } = useTranslation('common')
  return (
    <div className="group/bg relative overflow-hidden">
      <div className="easeInOutSine absolute h-full w-full overflow-hidden duration-300">
        <img
          src="/images/asset-management/top-bg-introduction.png"
          alt=""
          className="hidden h-full w-full object-cover md:block"
        />
        <img
          src="/images/asset-management/mobile-top-bg-introduction.jpg"
          alt=""
          className="h-full w-full object-cover md:hidden"
        />
      </div>
      <div className="arta-container banner-text-shadow relative z-1 mx-auto flex h-[480px] flex-col justify-end py-12 text-white">
        <p className={textClass.body_regular_verah}>{t('page_title.join_us')}</p>
        <h1 className={`${textClass.h1_style2} mt-1`}>{t('join_us.job_openings')}</h1>
      </div>
    </div>
  )
}

export default SectionBanner

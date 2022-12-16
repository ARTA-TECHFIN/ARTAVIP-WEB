import Image from 'next/image'
import { textClass } from '../Text'
import { useTranslation } from 'next-i18next'

export const SectionWorkWithArta = ({ k }: any) => {
  const { t } = useTranslation('common')
  return (
    <div className="group/bg relative overflow-hidden" id="work-with-arta">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image
          src="/images/asset-management/bg-introduction.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="arta-container relative z-1 mx-auto items-center pt-12 lg:hidden">
        <h2 className={`${textClass.h2_style2}`}>{t('join_us.work_with_arta')}</h2>
      </div>
      <div className="arta-container relative z-1 mx-auto flex flex-col-reverse items-center pb-12 lg:flex-row lg:space-x-[40px] lg:py-[150px]">
        <div className="flex-1">
          <h2 className={`${textClass.h2_style2} hidden lg:block`}>
            {t('join_us.work_with_arta')}
          </h2>
          <div
            className={`${textClass.body_regular_verah} mt-4 whitespace-pre-line`}
            dangerouslySetInnerHTML={{ __html: k.work_with_arta_description }}
          />
        </div>
        <div className="mt-[25px] mb-4 flex-1 lg:mt-0">
          <Image
            src="/images/join-us/28531C75-1658-4AFB-8864-C8F6F1AB012A.png"
            alt=""
            width={714}
            height={473}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default SectionWorkWithArta

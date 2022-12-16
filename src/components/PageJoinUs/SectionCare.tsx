import Image from 'next/image'
import { textClass } from '../Text'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const SectionCare = ({ k }: any) => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const g = (data: any, keyWithoutLang: string) => `${data[`${keyWithoutLang}_${locale}`]}`

  return (
    <div className="group/bg relative overflow-hidden" id="arta-care">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image
          src="/images/asset-management/bg-introduction.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="arta-container relative z-1 mx-auto py-12 md:py-[150px] md:text-center">
        <h2 className={textClass.h2_style2}>{t('join_us.arta_cares')}</h2>
        <div
          className={`${textClass.body_regular_verah} mx-auto mt-4 whitespace-pre-line`}
          dangerouslySetInnerHTML={{ __html: k.arta_cares_description }}
        />
        <div className="mt-8 grid grid-cols-2 gap-x-8 md:grid-cols-4 lg:grid-cols-5">
          {k.our_cares_icons &&
            k.our_cares_icons.map((icon: any, index: number) => {
              return (
                <div key={index} className="col-span-1 flex flex-col items-center p-8 text-center">
                  <img src={icon.image.data.attributes.url} />
                  <p className={`mt-4 ${textClass.small_text_style2}`}>
                    {g(icon, 'icon_description')}
                  </p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default SectionCare

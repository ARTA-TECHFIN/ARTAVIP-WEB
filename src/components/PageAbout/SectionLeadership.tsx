import Image from 'next/image'
import leadership_bg from './images/leadership_bg.png'
import { textClass } from 'src/components/Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { PageAboutCmsT } from 'src/pages/about-us'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export const SectionLeadership = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  // const g = (keyWithoutLang: string) => `${k[`${keyWithoutLang}_${locale}`]}`
  const g = (leader: any, keyWithoutLang: string) => `${leader.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <div className="group/bg relative z-1 overflow-hidden" id="leadership">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={leadership_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container relative mx-auto pt-16 pb-8 pr-20 md:pr-0 md:py-36">
        <h2 className={`${textClass.h2_style2} mb-4`}>{t("about_us.leadership")}</h2>
        <Swiper
          loop={false}
          spaceBetween={32} 
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="!overflow-visible"
        >
          {k.leadership.leaderList.map((leader: any, index: number) => (
            <SwiperSlide
              key={index}
              className="flex flex-col"
            >
              <div className="relative mb-4 aspect-[3/4] h-auto w-full overflow-hidden">
                <img alt={g(leader, "name")} src={leader.attributes.profile_image.data.attributes.url} className="absolute h-full w-full object-cover" />
              </div>
              <span className={`${textClass.small_text}`}>{g(leader, "title")}</span>
              <span className={textClass.h6}>{g(leader, "name")}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

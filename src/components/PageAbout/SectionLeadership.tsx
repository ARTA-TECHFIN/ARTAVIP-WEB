import Image from 'next/image'
import leadership_bg from './images/leadership_bg.png'
import { textClass } from 'src/components/Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { PageAboutCmsT } from 'src/pages/about'
import { useTranslation } from 'next-i18next'

export const SectionLeadership = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  const { t } = useTranslation('common')

  return (
    <div className="group/bg relative z-1 overflow-hidden" id="leadership">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={leadership_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container relative mx-auto pt-16 pb-8 md:py-36">
        <h2 className={`${textClass.h2_style2} mb-4`}>{t("about_us.leadership")}</h2>
        <Swiper loop={false} slidesPerView="auto" spaceBetween={32} className="!overflow-visible">
          {k.leadership.leaderList.map((leader, index) => (
            <SwiperSlide
              key={index}
              className="flex w-[220px] flex-[0_0_220px] flex-col"
            >
              <div className="relative mb-4 aspect-[3/4] h-auto w-full overflow-hidden">
                <Image src={leader.image} alt="" fill className="object-cover" />
              </div>
              <span className={`${textClass.small_text} whitespace-pre`}>{leader.title}</span>
              <span className={textClass.h6}>{leader.name}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

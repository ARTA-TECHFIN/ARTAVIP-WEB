import Image from 'next/image'
import leadership_bg from './images/leadership_bg.png'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const SectionLeadership = () => {
  return (
    <div className="group/bg relative overflow-hidden" id="leadership">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={leadership_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container relative py-36">
        <h2 className={`${textClass.h2_style2} mb-2`}>{t.leadership.title}</h2>
        <Swiper
         loop={false}
         slidesPerView= 'auto'
         spaceBetween={32}
         className="!overflow-visible"
        >
          {t.leadership.leaderList.map((leader, index) => (
            <SwiperSlide key={index} className="flex w-[220px] flex-[0_0_220px] min-w-[220px] flex-col">
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

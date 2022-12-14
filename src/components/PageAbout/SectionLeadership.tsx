import { useEffect, useRef } from 'react'
import Image from 'next/image'
import leadership_bg from './images/leadership_bg.png'
import { textClass } from 'src/components/Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper'
import { IconArrowLeft, IconArrowRight } from 'src/components/Svg/Icon'
import { PageAboutCmsT } from 'src/pages/about-us'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const SectionLeadership = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  // const g = (keyWithoutLang: string) => `${k[`${keyWithoutLang}_${locale}`]}`
  const g = (leader: any, keyWithoutLang: string) =>
    `${leader.attributes[`${keyWithoutLang}_${locale}`]}`

  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setShowComponent(true)
  }, [])

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="group/bg relative z-1 overflow-hidden" id="leadership">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={leadership_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container relative mx-auto pt-16 pb-[126px] md:py-36 md:pb-[158px]">
        <h2 className={`${textClass.h2_style2} mb-4`}>{t('about_us.leadership')}</h2>
        <div className="arta-leadership-slide relative">
          {showComponent && (
            <Swiper
              loop={false}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current,
              }}
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
                  slidesPerView: 4,
                },
              }}
            >
              {k.leadership.leaderList.map((leader: any, index: number) => (
                <SwiperSlide key={index} className="flex flex-col">
                  <div className="relative mb-4 aspect-[3/4] h-auto w-full overflow-hidden">
                    <img
                      src={leader.attributes.profile_image.data.attributes.url}
                      alt=""
                      className="absolute h-full w-full object-cover"
                    />
                  </div>
                  <span className={`${textClass.small_text}`}>{g(leader, 'title')}</span>
                  <span className={textClass.h6}>{g(leader, 'name')}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <button
            ref={prevRef}
            className={`slider-length-${k.leadership.leaderList.length} swiper-button absolute left-1/2 bottom-[-90px] translate-x-[-350%] lg:left-[-56px] lg:top-[37.5%] lg:bottom-[unset] lg:translate-y-[-50%] lg:translate-x-0`}
          >
            <IconArrowLeft className="fill-current" />
          </button>
          <button
            ref={nextRef}
            className={`slider-length-${k.leadership.leaderList.length} swiper-button absolute left-1/2 bottom-[-90px] translate-x-[250%] lg:right-[-56px] lg:top-[37.5%] lg:bottom-[unset] lg:left-[unset] lg:translate-y-[-50%] lg:translate-x-0`}
          >
            <IconArrowRight className="fill-current" />
          </button>
        </div>
      </div>
    </div>
  )
}

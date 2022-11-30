import { useEffect, useRef } from 'react'
import Image from 'next/image'
import tech_fin_bg from './images/tech_fin_bg.png'
import { textClass } from 'src/components/Text'
import { useState } from 'react'
import { IconArrowLeft, IconArrowRight } from 'src/components/Svg/Icon'
import { Hr } from 'src/components/Hr'
import { ModuleTextColList } from '../ModuleTextColList'
import { FadeUp } from 'src/components/FadeUp'
import TechFin from '../PageHome/techFin'
import { IconTechnologyInternetCompanies } from '../Svg/Icon'
import { PageAboutCmsT } from 'src/pages/about'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from "swiper"

export const SectionTechFin = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  const { t } = useTranslation('common')
  const [showComponent, setShowComponent] = useState(false);
  
  useEffect(() => {
      setShowComponent(true);
  },[])

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative z-1 flex flex-col overflow-hidden" id="tech-fin">
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={tech_fin_bg} alt="" fill className="object-cover" />
      </div>

      <ModuleTextColList
        header={t("about_us.what_is_techfin")}
        headerPosition="left"
        title={k.techFin.subtitle}
        list={[
          { title: k.techFin.section1Title, body: k.techFin.section1Body },
          { title: k.techFin.section2Title, body: k.techFin.section2Body },
        ]}
      />

      {/* SectionEcosystem */}
      <div className="relative flex flex-col items-center pb-12 md:pb-36">
        <div className="mb-12 max-w-3xl text-center">
          <FadeUp>
            <>
              <h3 className={textClass.h3_style2}>{t("about_us.our_ecosystem")}</h3>
              <p className={textClass.body_regular}>{k.ecosystem.subtitle}</p>
            </>
          </FadeUp>
        </div>
        <div className="our-eco relative h-96 md:h-80 w-full max-w-full overflow-hidden px-12">
          {showComponent && (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current
              }}
              loop={true}
              centeredSlides={true}
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                767: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="!overflow-visible">
              {k.ecosystem.itemList.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                  >
                    <div
                      key={index}
                      className={
                        'ss-container w-3/5 md:w-4/5 mx-auto lg:w-full flex aspect-square flex-col items-center justify-center rounded-full shadow-2xl transition-all duration-300'
                      }
                    >
                      <div
                        className={
                          'ss-circle relative mb-4 h-16 w-16 transition'
                        }
                      >
                        <IconTechnologyInternetCompanies className="h-full w-full object-cover" />
                      </div>
                      <span className={`${textClass.body_regular} max-w-[60%] text-center`}>
                        {item.title}
                      </span>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
          <button
            ref={prevRef}
            className="absolute bottom-0 left-1/2 translate-x-[-350%]"
          >
            <IconArrowLeft fill="#593725" />
          </button>
          <button
            ref={nextRef}
            className="absolute bottom-0 left-1/2 translate-x-[250%]"
          >
            <IconArrowRight fill="#593725" />
          </button>
        </div>
      </div>
    </div>
  )
}

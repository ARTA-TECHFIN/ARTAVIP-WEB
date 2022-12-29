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
import {
  IconTechnologyInternetCompanies,
  IconOrganizationsLedByArta,
  IconBanksBasedInHK,
  HKTycoons,
  EducationProfessionalIcon,
  RegionalBanksIcon,
  FinTechCompaniesIcon,
  FinancialInvestmentPlatformIcon
} from '../Svg/Icon'
import { PageAboutCmsT } from 'src/pages/about-us'
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
      <div className="relative flex flex-col items-center pb-12 md:pb-28">
        <div className="mb-12 max-w-3xl text-center">
          <FadeUp>
            <>
              <h3 className={textClass.h3_style2}>{t("about_us.our_ecosystem")}</h3>
              <p className={textClass.body_regular}>{k.ecosystem.subtitle}</p>
            </>
          </FadeUp>
        </div>
        <div className="our-eco relative pb-28 w-full arta-container overflow-hidden px-16 sm:px-8 lg:px-4">
          {showComponent && (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current
              }}
              loop={true}
              centeredSlides={true}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                767: {
                  slidesPerView: 3,
                },
                1200: {
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
                        'ss-container w-[90%] max-w-[380px] sm:w-4/5 mx-auto lg:w-4/5 rounded-full transition-all duration-300'
                      }
                    >
                      <div className="h-0 pb-[100%]">
                        <div className="absolute w-full h-full flex flex-col items-center justify-center">
                          <div
                            className={
                              'ss-circle relative mb-4 h-12 w-12 md:h-16 md:w-16 transition'
                            }
                          >
                            {(index === 0) && <IconTechnologyInternetCompanies className="h-full w-full object-cover" />}
                            {(index === 1) && <IconOrganizationsLedByArta className="h-full w-full object-cover" />}
                            {(index === 2) && <IconBanksBasedInHK className="h-full w-full object-cover" />}
                            {(index === 3) && <HKTycoons className="h-full w-full object-cover" />}
                            {(index === 4) && <EducationProfessionalIcon className="h-full w-full object-cover" />}
                            {(index === 5) && <RegionalBanksIcon className="h-full w-full object-cover" />}
                            {(index === 6) && <FinTechCompaniesIcon className="h-full w-full object-cover" />}
                            {(index === 7) && <FinancialInvestmentPlatformIcon className="h-full w-full object-cover" />}
                          </div>
                          <span className={`${textClass.small_text} max-w-[70%] text-center`}>
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
          <button
            ref={prevRef}
            className="absolute bottom-8 left-1/2 translate-x-[-350%]"
          >
            <IconArrowLeft fill="#593725" className="fill-current" />
          </button>
          <button
            ref={nextRef}
            className="absolute bottom-8 left-1/2 translate-x-[250%]"
          >
            <IconArrowRight fill="#593725" className="fill-current" />
          </button>
        </div>
      </div>
    </div>
  )
}

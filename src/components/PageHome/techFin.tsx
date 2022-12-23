import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cn from 'classnames'
import { ButtonAnimated } from '../ButtonAnimated'
import { links } from 'src/domains/links'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { useTranslation } from 'next-i18next'

const TechFin = ({ k, currentSectionId, setCurrentSectionById, setTriggerSection }: any) => {
  gsap.registerPlugin(ScrollTrigger)

  const [windowWidth, setWindowWith] = useState<number>(1000)
  const sec1ContentRef = useRef(null)
  const businessRef = useRef(null)
  const circleRef = useRef(null)
  const sec1MaskCircleRef = useRef(null)
  const sec1VideoRed = useRef(null)
  const [selectedBusiness, setSelectedBusiness] = useState(0)
  const [currentSection, setCurrentSection] = useState<'10' | '15'>('10')
  const [touchStart, setTouchStart] = useState(0)

  const [lastFireTime, setLastFireTime] = useState<number>(Date.now())
  const throttle = (fn: any, delay: number) => {
    if (lastFireTime + delay - Date.now() < 0) {
      fn()
      setLastFireTime(Date.now())
    }
  }

  const { t } = useTranslation('common')

  const businesses = [
    {
      title: t('page_title.asset_management'),
      description: k.our_business_product_description_1,
      link: links.businessesAssetManagement,
    },
    {
      title: t('page_title.investment_banking'),
      description: k.our_business_product_description_2,
      link: links.businessesInvestmentBanking,
    },
    {
      title: t('page_title.insurance_brokerage'),
      description: k.our_business_product_description_3,
      link: links.businessesInsuranceBrokerage,
    },
    {
      title: t('page_title.global_markets'),
      description: k.our_business_product_description_4,
      link: links.businessesSecuritiesBrokerage,
    },
    // {
    //   title: t('page_title.esg_advisory'),
    //   description: k.our_business_product_description_5,
    //   link: links.businessesEsg,
    // },
    {
      title: t('page_title.artazine'),
      description: k.our_business_product_description_6,
      link: links.businessesArtazine,
    },
  ]

  let throttleDelay = 2000

  if (typeof window !== 'undefined') {
    // @ts-ignore:next-line
    const FF = !(window.mozInnerScreenX == null)

    if (FF) {
      if (navigator.platform.indexOf('Mac') >= 0) {
        throttleDelay = 3100
      }
    }
  }

  const wheel = (event: any) => {
    throttle(() => {
      if (event.nativeEvent.wheelDelta > 0) {
        // Up
        if (currentSectionId === 1) {
          // From 1 to 0
          setTriggerSection(0)
        } else {
          // From 1.5 to 1
          setCurrentSectionById(1)
        }
      } else {
        // Down
        if (currentSectionId === 1) {
          // From 1 to 1.5
          setCurrentSectionById(1.5)
        } else {
          // From 1.5 to 2
          setTriggerSection(3)
        }
      }
    }, throttleDelay)
  }

  const fromSec1ToSec0 = () => {
    const isMobile = windowWidth < 768

    gsap.to(circleRef.current, {
      duration: 1.5,
      autoAlpha: 0.0,
      width: isMobile ? '90em' : '38em',
      height: isMobile ? '90em' : '38em',
      left: '-30%',
      xPercent: -2,
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1MaskCircleRef.current, {
      xPercent: 5,
      duration: 1,
      attr: {
        r: '40em',
      },
      ease: 'power1.out',
    })

    gsap.to(sec1ContentRef.current, {
      autoAlpha: 0,
      zIndex: 2,
      duration: 1,
      ease: 'ease',
    })
  }

  const fromSec0ToSec1 = () => {
    const isMobile = windowWidth < 768
    setCurrentSection('10')

    gsap.to(circleRef.current, {
      duration: 1.4,
      autoAlpha: 0.25,
      width: isMobile ? '140em' : '38em',
      height: isMobile ? '140em' : '38em',
      left: isMobile ? '-30%' : '-9%',
      top: isMobile ? '-50%' : '-60%',
      xPercent: -2,
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1MaskCircleRef.current, {
      xPercent: 5,
      duration: 1.7,
      attr: {
        r: isMobile ? '120em' : '45em',
      },
      ease: 'power1.out',
    })

    gsap.to(sec1ContentRef.current, {
      delay: 0.5,
      autoAlpha: 1,
      zIndex: 3,
      duration: 1.3,
      ease: 'ease',
    })

    gsap.to(businessRef.current, {
      delay: 0,
      zIndex: 2,
      autoAlpha: 0,
      duration: 1,
      ease: 'ease',
    })

    gsap.to(sec1VideoRed.current, {
      filter: 'hue-rotate(0deg)',
      ease: 'slow(0.7, 0.7, false)',
    })
  }

  const fromSec1ToSec1_5 = () => {
    setCurrentSection('15')
    const isMobile = windowWidth < 768
    gsap.to(circleRef.current, {
      duration: 0.9,
      autoAlpha: 0,
      width: '65em',
      height: '65em',
      xPercent: 60,
      top: '-90%',
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1MaskCircleRef.current, {
      duration: 0.9,
      attr: {
        r: isMobile ? '120em' : '90em',
      },
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1VideoRed.current, {
      filter: 'hue-rotate(170deg)',
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1ContentRef.current, {
      autoAlpha: 0,
      zIndex: 2,
      duration: 1,
      ease: 'ease',
    })

    gsap.to(businessRef.current, {
      delay: 0,
      zIndex: 3,
      autoAlpha: 1,
      duration: 1,
      ease: 'ease',
    })
  }

  const fromSec1_5ToSec2 = () => {
    setCurrentSection('15')
    gsap.to(businessRef.current, {
      delay: 0,
      zIndex: 3,
      autoAlpha: 0,
      duration: 1,
      ease: 'ease',
    })

    gsap.to(circleRef.current, {
      duration: 1,
      autoAlpha: 0,
      width: '70em',
      height: '70em',
      xPercent: -115,
      ease: 'slow(0.7, 0.7, false)',
    })
  }

  useEffect(() => {
    setWindowWith(window?.innerWidth || 0)

    if (currentSectionId === 0) {
      fromSec1ToSec0()
      setLastFireTime(Date.now())
    } else if (currentSectionId === 1) {
      fromSec0ToSec1()
      setLastFireTime(Date.now())
    } else if (currentSectionId === 1.5) {
      fromSec1ToSec1_5()
    } else if (currentSectionId === 2) {
      fromSec1_5ToSec2()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId])

  const handleTouchStart = (event: any) => {
    setTouchStart(event.touches[0].clientY)
  }

  const handleTouchEnd = (event: any) => {
    throttle(() => {
      if (Math.abs(event.changedTouches[0].clientY - touchStart) > 40) {
        if (event.changedTouches[0].clientY > touchStart) {
          // Up
          if (currentSectionId === 1) {
            // From 1 to 0
            setTriggerSection(0)
          } else {
            // From 1.5 to 1
            setCurrentSectionById(1)
          }
        } else {
          // Down
          if (currentSectionId === 1) {
            // From 1 to 1.5
            setCurrentSectionById(1.5)
          } else {
            // From 1.5 to 2
            setTriggerSection(3)
          }
        }
      }
    }, 2000)
  }

  return (
    <div
      className="h-app-height w-[100vw] overflow-hidden lg:h-screen"
      onWheel={(event) => wheel(event)}
      onTouchStart={(event) => handleTouchStart(event)}
      onTouchEnd={(event) => handleTouchEnd(event)}
    >
      <div className="video-container absolute top-0 left-0 h-full w-full">
        <video
          ref={sec1VideoRed}
          data-keepplaying
          id="video"
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute h-full w-full object-cover opacity-50 will-change-transform"
        >
          <source src="/videos/landing_whatis.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <svg className="absolute z-1 h-full w-full will-change-transform">
          <defs>
            <mask id="sec1Mask">
              <rect x="0" y="0" r="200" width="100%" height="100%" fill="#fff" />
              <circle
                ref={sec1MaskCircleRef}
                id="sec1MaskCircleRef"
                r="40em"
                fill="black"
                cx="0"
                cy="50%"
              />
            </mask>
            <linearGradient id="sec1MaskGradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="#241307" />
              <stop offset="95%" stopColor="#432712" />
            </linearGradient>
          </defs>

          <g mask="url(#sec1Mask)">
            <rect
              id="goAway"
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url('#sec1MaskGradient')"
            />
          </g>
        </svg>
      </div>

      <div className="relative flex h-full flex-col">
        <div className="absolute bottom-[8em] z-3 transform lg:right-[4em] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
          <div
            id="sec1ContentRef"
            ref={sec1ContentRef}
            className={cn(
              'flex h-full w-full flex-col justify-center gap-[6px] px-[6em] opacity-0 lg:items-end lg:px-0 lg:text-right',
              currentSection == '15' && '!opacity-0'
            )}
          >
            <h1 className="font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform sm:text-[5em] lg:text-[3.4em]">
              {t('about_us.what_is_techfin')}
            </h1>
            <p className="mb-[0.6em] max-w-[30em] text-left font-Neue text-[3em] text-white will-change-transform sm:text-[1.8em] sm:text-[2.4em] lg:text-right lg:text-[1em]">
              {k.what_is_techfin_description}
            </p>
            <ButtonAnimated as="a" href="/about-us#tech-fin" className="text-white">
              {t('home.explore_more')}
            </ButtonAnimated>
          </div>
          <div
            id="circle"
            ref={circleRef}
            className="innerShadow pointer-events-none absolute -top-[26em] left-[38%] z-0 h-[38em] w-[38em] rounded-full border-2 border-white opacity-0 will-change-transform lg:-left-[2%] lg:-top-[10em]"
          />
        </div>
        <div
          id="home-our-business"
          ref={businessRef}
          className={cn(
            'absolute bottom-[22em] left-[3.8em] z-2 w-[95vw] transform pr-4 text-white opacity-0 transition duration-1000 md:bottom-[20em] lg:bottom-[25vh] lg:left-[6em] lg:left-[4em]',
            currentSection == '10' && '!opacity-0'
          )}
        >
          <h1 className="font-verah mt-0 text-left text-[6em] tracking-[0.06em] sm:text-[5em] lg:text-[3.4em]">
            {t('page_title.our_businesses')}
          </h1>
          <p className="hidden max-w-[30em] text-left font-Neue text-[3em] sm:text-[1.8em] md:block md:text-[1.8em] lg:text-[1em]">
            {k.our_business_description}
          </p>
          <div className="mx-auto w-[75vw] sm:w-[50vw] md:w-full lg:mx-0 lg:max-w-[82vw]">
            <Swiper
              loop={false}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  loop: false,
                  centeredSlides: false,
                  slidesPerView: 6,
                },
              }}
              className="!overflow-visible"
            >
              {businesses.map((business: any, i: number) => (
                <SwiperSlide
                  className="flex min-h-[12em] min-w-[12em] flex-col justify-center text-center"
                  key={`option-${i}`}
                >
                  <BusinessCircle
                    key={i}
                    index={i}
                    business={business}
                    selectedBusiness={selectedBusiness}
                    setSelectedBusiness={setSelectedBusiness}
                    label={t('home.learn_more')}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

const BusinessCircle = ({ index, business, selectedBusiness, setSelectedBusiness, label }: any) => {
  if (!business) return null

  return (
    <div
      className="relative mx-auto mt-[4em] flex will-change-transform lg:mt-0"
      onMouseEnter={() => setSelectedBusiness(index)}
    >
      <div
        className={cn(
          index === selectedBusiness && 'innerShadow !opacity-100 lg:h-[12em] lg:w-[12em]',
          index !== selectedBusiness && 'lg:h-[10.8em] lg:w-[10.8em]',
          `innerShadowMobile mx-auto flex h-[17.5em] w-[17.5em] items-center justify-center self-center rounded-full border border-white text-[3em] opacity-70 transition-all will-change-transform sm:text-[2.2em] md:h-[12.5em] md:w-[12.5em] md:text-[1.8em] lg:text-[0.95em]`
        )}
      >
        <a href={business.link}>{business.title}</a>
      </div>

      <div
        className={cn(
          `absolute bottom-0 left-1/2 flex w-[120%] translate-y-full -translate-x-1/2 transform flex-col  justify-center  transition-all duration-300 md:items-center`,
          index === selectedBusiness ? 'lg:opacity-100' : 'lg:opacity-0'
        )}
      >
        <p className="mt-[1em] hidden w-full text-center font-Neue text-[3em] text-white lg:block lg:text-[0.8em]">
          {business.description}
        </p>
        <ButtonAnimated
          as="a"
          href={business.link}
          className="cta-btn mt-4 hidden border-white text-white md:block "
        >
          {label}
        </ButtonAnimated>
      </div>
    </div>
  )
}

export default TechFin

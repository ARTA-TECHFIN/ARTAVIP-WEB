import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cn from 'classnames'
import { ButtonAnimated } from '../ButtonAnimated'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const TechFin = ({ currentSectionId, setCurrentSectionById, setTriggerSection }: any) => {
  gsap.registerPlugin(ScrollTrigger)

  const [windowWidth, setWindowWith] = useState<number>(0)
  const sec1ContentRef = useRef(null)
  const businessRef = useRef(null)
  const circleRef = useRef(null)
  const sec1MaskCircleRef = useRef(null)
  const sec1VideoRed = useRef(null)
  const [selectedBusiness, setSelectedBusiness] = useState(0)

  const [lastFireTime, setLastFireTime] = useState<number>(Date.now())
  const throttle = (fn: any, delay: number) => {
    if (lastFireTime + delay - Date.now() < 0) {
      fn()
      setLastFireTime(Date.now())
    }
  }

  const businesses = [
    {
      title: 'Asset Management',
      description: `We develop innovative and transformative blockchain-enabled solutions for financial services processes and products.`,
    },
    {
      title: 'Investment Banking',
      description: `We develop innovative and transformative blockchain-enabled solutions for financial services processes and products.`,
    },
    {
      title: 'Insurance Brokerage',
      description: `We develop innovative and transformative blockchain-enabled solutions for financial services processes and products.`,
    },
    {
      title: 'Securities Brokerage',
      description: `We develop innovative and transformative blockchain-enabled solutions for financial services processes and products.`,
    },
    {
      title: 'Artazine',
      description: `We develop innovative and transformative blockchain-enabled solutions for financial services processes and products.`,
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
      left: '42%',
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

    gsap.to(circleRef.current, {
      duration: 1.4,
      autoAlpha: 0.25,
      width: isMobile ? '140em' : '38em',
      height: isMobile ? '140em' : '38em',
      left: isMobile ? '-9%' : '48%',
      xPercent: -2,
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1MaskCircleRef.current, {
      xPercent: 5,
      duration: 1.7,
      attr: {
        r: isMobile ? '90em' : '45em',
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
    const isMobile = windowWidth < 768
    gsap.to(circleRef.current, {
      duration: 0.9,
      autoAlpha: 0.25,
      width: '65em',
      height: '65em',
      xPercent: -110,
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
      filter: 'hue-rotate(180deg)',
      ease: 'slow(0.7, 0.7, false)',
    })

    gsap.to(sec1ContentRef.current, {
      autoAlpha: 0,
      zIndex: 2,
      duration: 1,
      ease: 'ease',
    })

    gsap.to(businessRef.current, {
      delay: 0.8,
      zIndex: 3,
      autoAlpha: 1,
      duration: 1,
      ease: 'ease',
    })
  }

  const fromSec1_5ToSec2 = () => {
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
    console.log(window?.innerWidth)

    if (currentSectionId === 0) {
      fromSec1ToSec0()
    } else if (currentSectionId === 1) {
      fromSec0ToSec1()
    } else if (currentSectionId === 1.5) {
      fromSec1ToSec1_5()
    } else if (currentSectionId === 2) {
      fromSec1_5ToSec2()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId])

  return (
    <div className="h-screen w-[100vw] overflow-hidden" onWheel={(event) => wheel(event)}>
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
            className="flex h-full w-full flex-col justify-center gap-[24px] px-[6em] opacity-0 lg:items-end lg:px-0 lg:text-right"
          >
            <h1 className="font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform lg:text-[3.4em]">
              What is TechFin
            </h1>
            <p className="mb-[0.6em] max-w-[30em] text-left font-Neue text-[3.6em] text-white will-change-transform lg:text-right lg:text-[1em]">
              ARTA TechFin believes that technology is the key to building a happier and more
              fulfilling future for all. As technology has continually transformed how we live and
              do business, it is expected that technology-driven change in the financial services
              sector will be the next wave. And we aim to be at the forefront of this change.{' '}
            </p>
            <ButtonAnimated
              as="a"
              href="#_"
              className="py-[0.5em] px-[2em] font-Neue text-[3.6em] text-white lg:px-[3em] lg:text-[1em]"
            >
              Explore more
            </ButtonAnimated>
          </div>
          <div
            id="circle"
            ref={circleRef}
            className="pointer-events-none absolute -top-[26em] left-[38%] z-0 h-[38em] w-[38em] -translate-x-[44%] transform rounded-full border-2 border-white opacity-0 will-change-transform lg:top-1/2 lg:-translate-y-[50%]"
          />
        </div>
        <div
          ref={businessRef}
          className="absolute bottom-[22em] top-[25em] z-2 transform text-white opacity-0 lg:left-[6em] lg:left-[4em] lg:bottom-auto lg:top-[21em] lg:top-1/2 lg:-translate-y-1/2"
        >
          <h1 className="font-verah ml-[0.9em] text-left text-[6em] tracking-[0.06em] lg:ml-0 lg:text-[3.4em]">
            Our Businesses
          </h1>
          <p className="ml-[1.6em] max-w-[30em] pb-5 text-left font-Neue text-[3.6em] lg:ml-0 lg:text-[1em]">
            ARTA TechFin is determined to create the fairest, most transparent, and open markets in
            the world. We carry this out every day by providing clients with a variety of financial
            services.
          </p>
          <div className="w-[100vw] lg:max-w-[80vw]">
            <Swiper
              loop={false}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                767: {
                  slidesPerView: 5,
                },
              }}
              className="!overflow-visible"
            >
              {businesses.map((business: any, i: number) => (
                <SwiperSlide
                  className="flex min-h-[13em] min-w-[13em] flex-col justify-center text-center"
                  key={`option-${i}`}
                >
                  <BusinessCircle
                    key={i}
                    index={i}
                    business={business}
                    selectedBusiness={selectedBusiness}
                    setSelectedBusiness={setSelectedBusiness}
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

const BusinessCircle = ({ index, business, selectedBusiness, setSelectedBusiness }: any) => {
  if (!business) return null

  return (
    <div
      className="relative mx-auto mt-[4em] flex will-change-transform lg:mt-0"
      onMouseEnter={() => setSelectedBusiness(index)}
    >
      <div
        className={cn(
          index === selectedBusiness &&
            'innerShadow !opacity-100 lg:h-[12em] lg:w-[12em] lg:text-[1.04em]',
          `innerShadowMobile mx-auto flex h-[16em] w-[16em] items-center justify-center self-center rounded-full border border-white text-[3.4em] opacity-70 transition-all will-change-transform lg:h-[10em] lg:w-[10em] lg:text-[1em]`
        )}
      >
        <a href="#">{business.title}</a>
      </div>

      <div
        className={cn(
          `absolute bottom-0 left-1/2 flex w-[110%] translate-y-full -translate-x-1/2 transform flex-col justify-center transition-all duration-300`,
          index === selectedBusiness ? 'lg:opacity-100' : 'lg:opacity-0'
        )}
      >
        <p className="mt-[1em] hidden w-full text-center font-Neue text-[3em] text-white lg:block lg:text-[0.8em]">
          We develop innovative and transformative blockchain-enabled solutions for financial
          services processes and products.
        </p>
        <ButtonAnimated
          as="a"
          href="#_"
          className="mt-[1em] border-white py-[0.4em] px-[1em] font-Neue text-[3em] text-white md:px-[2em] lg:px-[3em] lg:text-[1em]"
        >
          Learn more
        </ButtonAnimated>
      </div>
    </div>
  )
}

export default TechFin

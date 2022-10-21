import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { updateSection, scrolling } from '../helpers/updateSection'

const TechFin = ({ newSection, setNewSection }: any) => {
  console.log('new section', newSection)

  const TechRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const businessRef = useRef(null)

  let r = 0
  let active = false

  const figureRadius = (w: number, h: number) => {
    return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)) / 2
  }

  const ourBusiness = () => {
    setNewSection(true)
    gsap.fromTo(
      '.circle',
      {
        autoAlpha: 0,
        width: window.outerWidth / 2.3,
        height: window.outerWidth / 2.3,
        xPercent: -18,
        yPercent: 0,
      },
      {
        duration: 1,
        autoAlpha: 0.25,
        width: window.outerWidth / 1.5,
        height: window.outerWidth / 1.5,
        xPercent: -80,
        yPercent: -20,
        ease: 'slow(0.7, 0.7, false)',
      }
    )
    gsap.fromTo(
      '#cover',
      {
        attr: {
          r: () => {
            return r
          },
        },
      },
      {
        attr: {
          r: () => {
            return r * 2
          },
        },
        ease: 'slow(0.7, 0.7, false)',
      }
    )
    gsap.fromTo(
      '#video',
      {
        filter: 'hue-rotate(0deg)',
      },
      {
        filter: 'hue-rotate(180deg)',
        ease: 'slow(0.7, 0.7, false)',
      }
    )
    gsap.fromTo(
      '#techAnime',
      {
        autoAlpha: 100,
        zIndex: 3,
      },
      {
        autoAlpha: 0,
        zIndex: 2,

        duration: 0.5,
        ease: 'ease',
      }
    )
    window.setTimeout(() => {
      document.querySelectorAll('#techAnime')[0].classList.add('hidden')
    }, 1000)
    gsap.fromTo(
      '#BusinessAnime',
      {
        autoAlpha: 0,
        zIndex: 2,
      },
      {
        delay: 0.8,
        zIndex: 3,
        autoAlpha: 1,
        duration: 1,
        ease: 'ease',
        onComplete: scrolling.enable,
      }
    )
  }

  const backToBarriers = () => {
    scrolling.enable()
    const section = document.querySelectorAll('.home')[0]
    updateSection(section, 0)
  }
  const continueScroll = () => {
    scrolling.enable()
    const section = document.querySelectorAll('.lastone')[0]
    updateSection(section, 3)
  }

  const returnToFinTech = () => {
    gsap.fromTo(
      '#BusinessAnime',
      {
        autoAlpha: 1,
        zIndex: 3,
      },
      {
        delay: 0,
        zIndex: 2,
        autoAlpha: 0,
        duration: 1,
        ease: 'ease',
        onComplete: scrolling.enable,
      }
    )
    window.setTimeout(() => {
      document.querySelectorAll('#BusinessAnime')[0].classList.add('hidden')
      document.querySelectorAll('#techAnime')[0].classList.remove('hidden')
    }, 1000)
  }

  const wheel = (event: any) => {
    {
      if (event.nativeEvent.wheelDelta > 0) {
        newSection ? returnToFinTech : backToBarriers()
      } else {
        !newSection ? ourBusiness() : continueScroll()
      }
    }
  }

  useEffect(() => {
    if (!newSection) {
      const techFinAnim = () => {
        const mask = () => {
          const elementGoAway = document.querySelector('#goAway')
          if (!elementGoAway) return

          const widthHeight = (elementGoAway as any).getBBox()
          r = figureRadius(widthHeight.width, widthHeight.height)
          if (!active) {
            gsap.set('#cover', { attr: { cx: 50, r: r } })
          }
        }
        mask()
        gsap.fromTo(
          '#cover',
          {
            attr: {
              r: 50,
            },
          },
          {
            attr: {
              r: r,
            },
            ease: 'ease',
          }
        )
      }

      ScrollTrigger.create({
        trigger: '#techAnime',
        start: 'top bottom-=1',
        end: 'bottom top+=1',
        onEnter: () => techFinAnim(),
        onEnterBack: () => techFinAnim(),
      })
    }
  })

  return (
    <div className="h-screen w-full  overflow-hidden box-border relative">
      <div className="flex h-full max-w-main-contain flex-col items-center justify-center px-6 py-8 md:flex-row md:px-24 2xl:mx-auto">
        <div className="relative h-full w-full z-3">
          <div
            id="techAnime"
            ref={TechRef}
            className="mr-auto flex h-full w-full flex-col items-start justify-center gap-[24px] text-left md:items-end md:text-right"
            onWheel={(event) => wheel(event)}
          >
            <h1 className="font-Verah text-[48px] text-white md:text-[68px] text-left">
              What is TechFin
            </h1>
            <p className="max-w-full pb-5 text-left font-Neue text-base text-white md:max-w-[700px] md:text-right">
              ARTA TechFin believes that technology is the key to building a
              happier and more fulfilling future for all. As technology has
              continually transformed how we live and do business, it is
              expected that technology-driven change in the financial services
              sector will be the next wave. And we aim to be at the forefront of
              this change.{' '}
            </p>
            <a
              href="#_"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border  border-white py-[8px] px-[32px] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out sm:w-fit"
            >
              <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] text-white duration-300 group-hover:translate-x-0">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
                <span> Explore more</span>
              </span>
              <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
                Explore more
              </span>
              <span className="invisible relative">Explore more</span>
            </a>
          </div>
          <div className="fixed circle border-2 border-white rounded-full z-2  top-0 right-14 translate-y-14 "></div>
        </div>
        <div
          id="BusinessAnime"
          ref={businessRef}
          className="absolute flex h-full flex-col items-start justify-center justify-items-center gap-[24px] text-white opacity-0 z-2"
        >
          <h1 className="font-verah text-[48px] text-white md:text-[68px]">
            Our Businesses
          </h1>
          <p className="max-w-full pb-5 text-left font-Neue text-base text-white md:max-w-[600px]">
            ARTA TechFin is determined to create the fairest, most transparent,
            and open markets in the world. We carry this out every day by
            providing clients with a variety of financial services.
          </p>
          <ul className="flex w-full list-none flex-col items-center justify-center gap-[24px] lg:flex-row lg:items-start">
            <li className="activeList innerShadow">
              <a href="#">Asset Management</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Investment Banking</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Insurance Brokerage</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Securities Brokerage</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Artazine</a>
            </li>
          </ul>
          <p className="max-w-full pb-5 text-left font-Neue text-base text-white md:max-w-[220px]">
            We develop innovative and transformative blockchain-enabled
            solutions for financial services processes and products.
          </p>
          <a
            href="#_"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white  py-[8px] px-[32px] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out sm:w-fit"
          >
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] font-Neue text-white duration-300 group-hover:translate-x-0">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              <span> Learn more</span>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
              Learn more
            </span>
            <span className="invisible relative font-Neue">Learn more</span>
          </a>
        </div>
        <div className="video-container fixed h-screen w-full top-0 right-0 translate-y-0 z-0">
          <svg id="demo" className="absolute h-full w-full z-1">
            <defs>
              <mask id="theMask">
                <rect
                  x="0"
                  y="0"
                  r="200"
                  width="100%"
                  height="100%"
                  fill="#fff"
                />
                <circle id="cover" r="200" fill="black" cx="50%" cy="50%" />
              </mask>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="5%" stopColor="#241307" />
                <stop offset="95%" stopColor="#432712" />
              </linearGradient>
            </defs>

            <g mask="url(#theMask)">
              <rect
                id="goAway"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url('#myGradient')"
              />
            </g>
          </svg>
          <video
            id="video"
            autoPlay
            muted
            loop
            playsInline
            crossOrigin="anonymous"
            className=" absolute top-0 left-0 h-100vh z-0 opacity-50 mix-blend-plus-lighter"
          >
            <source src="/videos/landing_whatis.mp4" typeof="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default TechFin

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const TechFin = () => {
  const TechRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const businessRef = useRef(null)

  let r = 0
  let active = false

  const figureRadius = (w: number, h: number) => {
    return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)) / 2
  }

  const mask = () => {
    const widthHeight = document.querySelector('#goAway').getBBox()
    console.log(widthHeight)
    r = figureRadius(widthHeight.width, widthHeight.height)
    if (!active) {
      gsap.set('#cover', { attr: { cx: 50, r: r } })
    }
  }

  useEffect(() => {
    mask()

    gsap.fromTo(
      '#cover',
      {
        attr: {
          r: () => {
            return 50
          },
        },
      },
      {
        attr: {
          r: () => {
            return r
          },
        },
        ease: 'slow(0.7, 0.7, false)',
        scrollTrigger: {
          id: `techAnime`,
          trigger: '#techAnime',
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.fromTo(
      '#techAnime',
      {
        autoAlpha: 0,
        xPercent: 15,
        zIndex: 1,
      },
      {
        duration: 1,
        autoAlpha: 1,
        xPercent: 0,
        ease: 'slow(0.7, 0.7, false)',

        scrollTrigger: {
          id: `techAnime`,
          trigger: '#techAnime',
          start: 'top center+=500',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.fromTo(
      '.circle',
      {
        autoAlpha: 0,
        width: window.outerWidth / 2.3,
        height: window.outerWidth / 2.3,
        xPercent: -18,
      },
      {
        delay: 0.5,
        duration: 2,
        autoAlpha: 0.25,
        width: window.outerWidth / 2.3,
        height: window.outerWidth / 2.3,
        xPercent: -18,
        ease: 'slow(0.7, 0.7, false)',

        scrollTrigger: {
          id: `circleAnim`,
          trigger: '#techAnime',
          start: 'center center+=200',
          toggleActions: 'play none none reverse',
        },
      }
    )
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

        scrollTrigger: {
          id: `circleAnim`,
          trigger: '.screen-start',
          start: 'center center+=200',
          toggleActions: 'play none none reverse',
        },
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
        scrollTrigger: {
          id: `techAnime`,
          trigger: '.screen-start',
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
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
        scrollTrigger: {
          id: `techAnime`,
          trigger: '.screen-start',
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <div className="h-screen w-full  overflow-hidden box-border relative">
      <div className="flex h-full max-w-main-contain flex-col items-center justify-center px-6 py-8 md:flex-row md:px-24 2xl:mx-auto">
        <div className="relative h-full w-full z-2">
          <div
            id="techAnime"
            ref={TechRef}
            className="mr-auto flex h-full w-full flex-col items-start justify-center gap-[24px] text-left md:items-end md:text-right"
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

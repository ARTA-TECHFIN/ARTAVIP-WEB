import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { updateSectionScroll, scrolling } from '../helpers/updateSection'

const TechFin = ({isEntered, currentSectionId, setCurrentSectionById, setTriggerSection}: any) => {
  gsap.registerPlugin(ScrollTrigger)
  
  const TechRef = useRef(null)
  const businessRef = useRef(null)

  const [lastFireTime, setLastFireTime] = useState<number>(Date.now())
  const circleRef = useRef(null)
  const throttle = (fn:any, delay:number) => {    
    if((lastFireTime + delay - Date.now() ) < 0) {
      fn(); 
      setLastFireTime(Date.now())
    } 
  }

  const wheel = (event: any) => {
    throttle(
      () => {
        if (event.nativeEvent.wheelDelta > 0) { // Up
          if (currentSectionId === 1) {
            // From 1 to 0
            setTriggerSection(0)
          } else {
            // From 1.5 to 1
            setCurrentSectionById(1)
          }
        } else { // Down
          if (currentSectionId === 1) {
            // From 1 to 1.5
            setCurrentSectionById(1.5)
          } else {
            // From 1.5 to 2
            setTriggerSection(3)
          }
        }
      },
      1600
    )
  }

  const fromSec0ToSec1 = () => {
    gsap.to(
      circleRef.current,
      {
        duration: 1.5,
        autoAlpha: 0.25,
        width: "38em",
        height: "38em",
        left: "48%",
        xPercent: -2,
        yPercent: -50,
        ease: 'slow(0.7, 0.7, false)',
      }
    )
  
    gsap.to(
      '#sec1MaskCircle',
      {
        xPercent: 5,
        duration: 1.7,
        attr: {
          r: "45em",
        },
        ease: 'power1.out',
      }
    )

    gsap.to(
      '#sec1Content',
      {
        delay: 0.5,
        autoAlpha: 1,
        zIndex: 3,
        duration: 1.3,
        ease: 'ease',
      }
    )

    gsap.to(
      businessRef.current,
      {
        delay: 0,
        zIndex: 2,
        autoAlpha: 0,
        duration: 1,
        ease: 'ease',
      }
    )

    gsap.to(
      '#video',
      {
        filter: 'hue-rotate(0deg)',
        ease: 'slow(0.7, 0.7, false)',
      }
    )
  }

  const fromSec1ToSec1_5 = () => {
    gsap.to(
      circleRef.current,
      {
        duration: 1,
        autoAlpha: 0.25,
        width: "65em",
        height: "65em",
        xPercent: -110,
        yPercent: -50,
        ease: 'slow(0.7, 0.7, false)',
      }
    )

    gsap.to(
      '#sec1MaskCircle',
      {
        attr: {
          r: "90em",
        },
        ease: 'slow(0.7, 0.7, false)',
      }
    )

    gsap.to(
      '#video',
      {
        filter: 'hue-rotate(180deg)',
        ease: 'slow(0.7, 0.7, false)',
      }
    )

    gsap.to(
      '#sec1Content',
      {
        autoAlpha: 0,
        zIndex: 2,
        duration: 1,
        ease: 'ease',
      }
    )

    gsap.to(
      businessRef.current,
      {
        delay: 0.8,
        zIndex: 3,
        autoAlpha: 1,
        duration: 1,
        ease: 'ease',
      }
    )
  }

  const fromSec1_5ToSec2 = () => {
    gsap.to(
      businessRef.current,
      {
        delay: 0,
        zIndex: 3,
        autoAlpha: 0,
        duration: 1,
        ease: 'ease',
      }
    )

    gsap.to(
      circleRef.current,
      {
        duration: 1,
        autoAlpha: 0,
        width: "70em",
        height: "70em",
        xPercent: -115,
        yPercent: -50,
        ease: 'slow(0.7, 0.7, false)',
      }
    )
  }


  useEffect(() => {
    if(currentSectionId === 1) {
      fromSec0ToSec1()
    } else if (currentSectionId === 1.5) {
      fromSec1ToSec1_5()
    } else if (currentSectionId === 2) {
      fromSec1_5ToSec2()
    }
  }, [currentSectionId])



  return (
    <div className="h-screen w-[100vw] overflow-hidden" onWheel={(event) => wheel(event)}>
      <div className="video-container absolute h-full w-full top-0 left-0">
        
        <video
          data-keepplaying
          id="video"
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute object-cover w-full h-full opacity-50"
        >
          <source src="/videos/landing_whatis.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <svg className="absolute h-full w-full z-1">
          <defs>
            <mask id="sec1Mask">
              <rect
                x="0"
                y="0"
                r="200"
                width="100%"
                height="100%"
                fill="#fff"
              />
              <circle id="sec1MaskCircle" r="40em" fill="black" cx="0" cy="50%" />
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

      <div className="flex h-full flex-col relative">
        
        <div className="absolute right-[4em] top-1/2 transform -translate-y-1/2 z-3">
          <div
            id="sec1Content"
            ref={TechRef}
            className="mr-auto flex h-full w-full flex-col justify-center gap-[24px] text-left items-end text-right opacity-0"
          >
            <h1 className="font-Verah text-[3.4em] text-white text-left tracking-[0.06em]">
              What is TechFin
            </h1>
            <p className="pb-5 text-left font-Neue text-[1em] text-white max-w-[30em] text-right">
              ARTA TechFin believes that technology is the key to building a
              happier and more fulfilling future for all. As technology has
              continually transformed how we live and do business, it is
              expected that technology-driven change in the financial services
              sector will be the next wave. And we aim to be at the forefront of
              this change.{' '}
            </p>
            <a
              href="#_"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border  border-white py-[1em] px-[3em] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out w-fit"
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
              <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[1em] text-white transition-all duration-300 group-hover:translate-x-full">
                Explore more
              </span>
              <span className="invisible relative">Explore more</span>
            </a>
          </div>
          <div id="circle" ref={circleRef} className="absolute w-[38em] h-[38em] top-1/2 left-[41%] z-0 border-2 border-white rounded-full opacity-0 pointer-events-none transform -translate-y-[50%] -translate-x-[44%]"></div>
        </div>
        <div
          ref={businessRef}
          className="absolute left-[4em] top-1/2 transform -translate-y-1/2 text-white opacity-0 z-2"
        >
          <h1 className="text-left font-verah text-[3.4em] tracking-[0.06em]">
            Our Businesses
          </h1>
          <p className="max-w-full pb-5 text-left font-Neue text-[1em] max-w-[30em]">
            ARTA TechFin is determined to create the fairest, most transparent,
            and open markets in the world. We carry this out every day by
            providing clients with a variety of financial services.
          </p>
          <ul className="flex w-full list-none flex-row gap-[1.2em]">
            <li className="flex flex-col gap-4 relative">
              <div className="innerShadow flex w-[12em] h-[12em] text-[1em] items-center justify-center rounded-full border border-white transition">
                <a href="#">Asset Management</a>
              </div>

              <div className="absolute w-full bottom-0 left-1/2 transform translate-y-full -translate-x-1/2">
                <p className="text-center font-Neue text-[0.7em] text-white w-full my-[1em] mx-auto">
                  We develop innovative and transformative blockchain-enabled
                  solutions for financial services processes and products.
                </p>
                <a
                  href="#_"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white  py-[0.5em] px-[2em] font-Neue text-[0.7em] font-normal text-white shadow-md transition duration-300 ease-out sm:w-fit"
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
                    <span>Learn more</span>
                  </span>
                  <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-white transition-all duration-300 group-hover:translate-x-full">
                    Learn more
                  </span>
                  <span className="invisible relative font-Neue">Learn more</span>
                </a>
              </div>
            </li>
            <li className="flex w-[11em] h-[11em] text-[0.8em] items-center self-center justify-center rounded-full border border-white transition">
              {' '}
              <a href="#">Investment Banking</a>
            </li>
            <li className="flex w-[11em] h-[11em] text-[0.8em] items-center self-center justify-center rounded-full border border-white transition">
              {' '}
              <a href="#">Insurance Brokerage</a>
            </li>
            <li className="flex w-[11em] h-[11em] text-[0.8em] items-center self-center justify-center rounded-full border border-white transition">
              {' '}
              <a href="#">Securities Brokerage</a>
            </li>
            <li className="flex w-[11em] h-[11em] text-[0.8em] items-center self-center justify-center rounded-full border border-white transition">
              {' '}
              <a href="#">Artazine</a>
            </li>
          </ul>
          
        </div>
        
      </div>
    </div>
  )
}

export default TechFin

import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'

export const BreakBarriers = ({ currentSectionId }: any) => {
  const { locale } = useRouter()
  const sec1TtlRef = useRef(null)
  const sec1VideoRef = useRef(null)
  const sec1Container = useRef(null)
  const [windowDimension, setWindowDimension] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  var request: any = null
  var mouse = { x: 0, y: 0 }
  var cx: number, cy: number

  useEffect(() => {
    cx = window?.innerWidth / 50
    cy = window?.innerHeight / 50
    setWindowDimension({ x: cx, y: cy })

    gsap.fromTo(
      sec1TtlRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        x: '0.5em',
        duration: 2,
        ease: 'power0',
        delay: 1,
      }
    )
  }, [])

  // useEffect(() => {
  //   if (currentSectionId === 1) {
  //     gsap.to(
  //       sec1Container.current,
  //       {
  //         delay: 0.1,
  //         duration: 0.5,
  //         yPercent: 40,
  //         autoAlpha: 0,
  //         ease: "easeInOutCubic"
  //       }
  //     )
  //   } else {
  //     gsap.to(
  //       sec1Container.current,
  //       {
  //         duration: 0.8,
  //         yPercent: 0,
  //         autoAlpha: 1,
  //         ease: "ease"
  //       }
  //     )
  //   }
  // }, [currentSectionId])

  const section1HandleMouseMove = (event: any) => {
    mouse.x = event.pageX
    mouse.y = event.pageY
    cancelAnimationFrame(request)
    request = requestAnimationFrame(updateSec1TextPos)
  }

  function updateSec1TextPos() {
    if (cx * 2 > 768) {
      var dx = mouse.x - windowDimension.x
      var dy = mouse.y - windowDimension.y

      var tiltx = (dy / windowDimension.y) * 0.7
      var tilty = -(dx / windowDimension.x) * 0.7

      gsap.to(sec1TtlRef.current, {
        duration: 1,
        transform: 'translate(' + tilty + 'px, ' + tiltx + 'px)',
        ease: 'Power2.easeOut',
      })
    }
  }

  function updateSec1Video() {
    var dx = mouse.x - windowDimension.x
    var dy = mouse.y - windowDimension.y

    var tiltx = -(dy / windowDimension.y) * 0.5
    var tilty = (dx / windowDimension.x) * 0.5
    gsap.to(sec1VideoRef.current, {
      duration: 1,
      transform: 'translate(' + tilty + 'px, ' + tiltx + 'px)',
      ease: 'Power2.easeOut',
    })
  }

  return (
    <section
      ref={sec1Container}
      id="break-barriers"
      className="tigger-01 relative relative z-3 flex h-app-height w-screen flex-col overflow-hidden bg-[#351e0e] will-change-transform lg:h-screen"
      onMouseMove={(ev) => section1HandleMouseMove(ev)}
    >
      <div className="absolute w-full h-full object-cover">
        <img className="w-full h-full object-cover" src="/images/home-sec1-bg.jpg" />
      </div>
      <video
        data-keepplaying
        ref={sec1VideoRef}
        autoPlay
        muted
        playsInline
        preload="true"
        crossOrigin="anonymous"
        id="break-barriers-video"
        // className="absolute bottom-[15%] left-[-50%] scale-[2.5] transform will-change-transform sm:bottom-0 sm:scale-[1.5] md:relative md:left-[-25%] md:h-full md:w-full md:object-cover lg:left-0 lg:scale-100"
        className=" relative h-full w-full transform object-cover will-change-transform"
      >
        <source src="/videos/landing_top_latest.mp4" typeof="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* top-[20%] left-0   sm:top-[40%] lg:left-[10%] xl:left-[20%] xl:mx-auto */}
      {/* <div className="absolute home-background-gradient top-0 left-0 z-1 h-[50vh] w-full lg:hidden" /> */}
      {/* <div className="z-1">
        <div className="animatedSpotLight1 absolute h-[100vw] w-[100vw] mix-blend-lighten blur-[35px]" />
        <div className="animatedSpotLight2 absolute h-[100vw] w-[100vw] mix-blend-lighten blur-[35px]" />
      </div> */}
      <div className=" movable-elements-wrapper z-1 flex max-w-main-contain items-start justify-center px-6 xl:mx-auto">
        <div className="absolute bottom-[6em] left-[0em] md:left-[5em]">
          {locale === 'en' && (
            <h1
              id="animation"
              ref={sec1TtlRef}
              className="movable z-[200] text-left font-Verah text-[10em] leading-[1.02em] text-white will-change-transform sm:text-[7em] md:text-[5em]"
            >
              BREAK
              <br />
              BARRIERS
              <span className="flex space-x-2">
                <hr className=" mt-[20px] h-[4px] w-[40px] sm:mt-[0.45em] sm:w-[80px]"></hr>
                <span className="pr-3 text-[30px] sm:text-[0.6em]">for </span> GREATNESS
              </span>
            </h1>
          )}
          {locale === 'tc' && (
            <h1
              id="animation"
              ref={sec1TtlRef}
              className="movable z-[200] text-left font-Noto text-[10em] leading-[1.4em] text-white will-change-transform md:mb-10 md:text-[3em]"
            >
              打破壁壘
              <span className="flex space-x-2">
                <hr className=" mt-[0.7em] h-[4px] w-[40px] sm:mt-[0.8em] sm:w-[115px]"></hr>
                <span className="pr-3 text-[30px] sm:text-[1.3em]">成就輝煌</span>
              </span>
            </h1>
          )}
          {locale === 'sc' && (
            <h1
              id="animation"
              ref={sec1TtlRef}
              className="movable z-[200] text-left font-Noto text-[10em] leading-[1.4em] text-white will-change-transform md:mb-10 md:text-[3em]"
            >
              打破壁垒
              <span className="flex space-x-2">
                <hr className=" mt-[0.7em] h-[4px] w-[40px] sm:mt-[0.8em] sm:w-[115px]"></hr>
                <span className="pr-3 text-[30px] sm:text-[1.3em]">成就辉煌</span>
              </span>
            </h1>
          )}
        </div>
      </div>
    </section>
  )
}

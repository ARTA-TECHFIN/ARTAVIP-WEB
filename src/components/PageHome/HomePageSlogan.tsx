import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'

export const HomePageSlogan = ({ k, currentSectionId, setCurrentSectionById, setTriggerSection }: any) => {
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
  const [lastFireTime, setLastFireTime] = useState<number>(Date.now())
  const throttle = (fn: any, delay: number) => {
    if (lastFireTime + delay - Date.now() < 0) {
      fn()
      setLastFireTime(Date.now())
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
          setCurrentSectionById(1)
        } else {
          // From 1.5 to 2
          setTriggerSection(0)
        }
      }
    }, throttleDelay)
  }

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

  return (
    <section
      ref={sec1Container}
      id="break-barriers"
      className="tigger-01 relative relative z-3 flex h-app-height w-screen flex-col overflow-hidden bg-[#351e0e] will-change-transform lg:h-screen"
      onWheel={(event) => wheel(event)}
      onMouseMove={(ev) => section1HandleMouseMove(ev)}
    >
      <div className="absolute w-full h-full object-cover">
        <img className="w-full w-full object-cover" src="/images/artagm_homepage_banner_02.jpg" />
      </div>
      <div className=" movable-elements-wrapper z-1 flex max-w-main-contain items-start justify-center px-6 xl:mx-auto">
        <div className="absolute bottom-[6em] left-[0em] md:left-[5em]">
          {locale === 'en' && (
            <h1
              id="animation"
              ref={sec1TtlRef}
              className="movable z-[200] text-left font-Verah text-[10em] leading-[1.02em] text-white will-change-transform sm:text-[7em] md:text-[5em]"
            >
              EASY FAST QUICK
              <br />
              ANYWHERE ANYTIME
              <span className="flex space-x-2">
                <hr className=" mt-[20px] h-[4px] w-[40px] sm:mt-[0.45em] sm:w-[80px]"></hr>
                <span className="pr-3 text-[30px] sm:text-[0.6em]">Open </span> Accounts
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

import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export const BreakBarriers = ({currentSectionId}: any) => {
  const sec1TtlRef = useRef(null)
  const sec1VideoRef = useRef(null)
  const sec1Container = useRef(null)
  const [windowDimension, setWindowDemension] = useState<{x: number, y: number}>({x:0,y:0})

  var request: any = null
  var mouse = { x: 0, y: 0 }
  var cx: number, cy: number

  useEffect(() => {
    cx = window?.innerWidth / 50
    cy = window?.innerHeight / 50
    setWindowDemension({x:cx, y:cy})

    gsap.fromTo(
      sec1TtlRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        x: 50,
        duration: 2,
        ease: 'power0',
        delay: 1,
      }
    )
  }, [])

  useEffect(() => {
    if (currentSectionId === 1) {
      gsap.to(
        sec1Container.current,
        {
          delay: 0.1,
          duration: 0.5,
          yPercent: 40,
          autoAlpha: 0,
          ease: "easeInOutCubic"
        }
      )
    } else {
      gsap.to(
        sec1Container.current,
        {
          duration: 0.8,
          yPercent: 0,
          autoAlpha: 1,
          ease: "ease"
        }
      )
    }
  }, [currentSectionId])

  const section1HandleMouseMove = (event: any) => {
    mouse.x = event.pageX
    mouse.y = event.pageY
    cancelAnimationFrame(request)
    request = requestAnimationFrame(updateSec1TextPos)
  }

  function updateSec1TextPos() {
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
      className=" relative flex w-screen h-screen overflow-hidden flex-col bg-arta-russet-100 z-3 tigger-01"
      onMouseMove={(ev) => section1HandleMouseMove(ev)}
    >
      <video
        data-keepplaying
        ref={sec1VideoRef}
        autoPlay
        muted
        playsInline
        crossOrigin="anonymous"
        className="h-full w-full object-cover"
      >
        <source src="/videos/Comp 1_2.mp4" typeof="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* top-[20%] left-0   sm:top-[40%] lg:left-[10%] xl:left-[20%] xl:mx-auto */}
      <div className=" flex max-w-main-contain items-start justify-center px-6  xl:mx-auto movable-elements-wrapper">
        <div className="absolute  top-[20%] left-0 sm:top-[35%] xl:left-[10%] xl:mx-auto 2xl:left-[15%] ">
          <h1
            id="animation"
            ref={sec1TtlRef}
            className="z-[200] font-Verah text-[5em] leading-[1.02em] text-white movable text-left"
          >
            BREAK
            <br />
            BARRIERS
            <span className="flex space-x-2">
              <hr className=" mt-[20px] h-[4px] w-[40px] sm:mt-[0.45em] sm:w-[80px]"></hr>
              <span className="pr-3 text-[30px] sm:text-[0.6em]">for </span>{' '}
              GREATNESS
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

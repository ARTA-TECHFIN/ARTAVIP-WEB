import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const TechFin = () => {
  const TechRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
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
        ease: 'ease',
        scrollTrigger: {
          id: `techAnime`,
          trigger: '#techAnime',
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <div className=" h-screen w-full bg-[#211106] overflow-hidden box-border relative">
      <div className="flex h-full max-w-main-contain flex-col items-center justify-center px-6 py-8 md:flex-row md:px-24 2xl:mx-auto">
        <div className="h-full w-full z-1">
          <div
            id="techAnime"
            ref={TechRef}
            className="mr-auto flex h-full w-full flex-col items-start justify-center gap-[24px] text-left md:items-end md:text-right"
          >
            <h1 className="font-Verah text-[48px] text-white md:text-[68px]">
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
        </div>
        <video
          id="video"
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute max-w-[100vw] z-0 opacity-30"
        >
          <source src="/videos/landing_whatis.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default TechFin

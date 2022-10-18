import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const OurBusiness = () => {
  const businessRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  // useEffect(() => {
  //   gsap.to('#BusinessAnime', { opacity: 0, duration: 0 }),
  //     gsap.to('#BusinessAnime', {
  //       opacity: 1,
  //       x: 70,
  //       duration: 2,
  //       ease: 'power0',
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: '#BusinessAnime',
  //         toggleActions: 'restart pause resume reverse',
  //         markers: false,
  //         start: 'top top',
  //       },
  //     })
  // }, [])

  return (
    <div className=" h-screen  bg-[#663718]">
      <div className="flex h-full w-full max-w-main-contain flex-col items-center px-6 py-8 md:flex-row md:px-24 xl:mx-auto">
        <div
          id="#BusinessAnime"
          ref={businessRef}
          className="flex h-full flex-col items-start justify-center justify-items-center gap-[24px] text-white"
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

        <div className=""></div>
      </div>
    </div>
  )
}

export default OurBusiness

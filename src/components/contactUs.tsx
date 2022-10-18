import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ContactUs: React.FC = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     '#Scaleanimation',
  //     { scale: 0.9 },
  //     {
  //       scale: 1,
  //       duration: 3,
  //       ease: 'power0',
  //       delay: 1,
  //     }
  //   )
  // }, [])

  return (
    <div
      id="Scaleanimation"
      className="flex h-screen min-h-[443px] bg-contact bg-cover bg-center bg-no-repeat text-center  text-white md:h-fit md:items-start md:justify-start "
    >
      <div className="mb-5 flex h-full min-h-full w-full max-w-main-contain flex-col items-start justify-end space-y-4 px-6 pt-0 pb-[150px] md:mx-auto md:items-start md:justify-start md:px-20 md:pb-[0] md:pt-[95px]">
        <h1 className="font-Verah text-[48px] font-normal md:text-[68px]">
          Contact Us
        </h1>
        <a
          href="#_"
          className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white py-[8px] px-[32px]  font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out sm:w-fit"
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
            <span>Go To Contact Us</span>
          </span>
          <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
            Go To Contact Us
          </span>
          <span className="invisible relative">Go To Contact Us</span>
        </a>
      </div>
    </div>
  )
}

export default ContactUs

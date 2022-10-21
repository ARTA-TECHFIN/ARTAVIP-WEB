import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <div className="relative z-3 flex h-screen w-full flex-col bg-about-gradient md:flex-row">
      <div className="absolute  w-full overflow-hidden md:h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute min-w-full min-h-full	w-auto h-auto overflow-hidden top-50 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
        >
          {/* md:translate-x-[-20%] */}
          <source src="/videos/landing_about.mov" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full flex z-1 justify-center max-w-main-contain m-auto items-center">
        <div className="md:max-w-[500px] p-6 flex-col w-1/2">
          <div className="relative h-full cursor-pointer opacity-100 transition hover:opacity-100 m-auto">
            <Image
              src="/images/Group.png"
              alt="Logo"
              className="object-contain"
              width={236}
              height={96}
            />
          </div>
        </div>
        <div className="ml-auto text-right h-full w-1/2 flex-col items-end justify-center gap-[24px] p-6  ">
          <h1 className="font-Verah text-[48px] font-normal text-white md:text-[68px]">
            About ARTA
          </h1>
          <p className="font-Neue text-white">
            ARTA TechFin aims to build the next generation of financial
            services, using technology to transform the traditional financial
            industry and expand into new services, products and experiences.
          </p>

          <a
            href="#_"
            className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border  border-white py-[8px] px-[32px] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out"
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
              <span> Show more</span>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
              Show more
            </span>
            <span className="invisible relative">Show more</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

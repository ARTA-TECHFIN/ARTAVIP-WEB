import React from 'react'

const about: React.FC = () => {
  return (
    <div className="relative z-3 h-screen w-screen flex will-change-transform">
      <div className="video-container absolute h-full w-full top-0 left-0">
        <video
          data-keepplaying
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute object-cover w-full h-full will-change-transform"
        >
          {/* md:translate-x-[-20%] */}
          <source src="/videos/landing_about.mov" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute right-[3em] top-1/2 transform -translate-y-1/2 flex z-1 justify-end self-center w-[70em] lg:w-[50em]">
        <div className="ml-auto text-right h-full lg:w-1/2 flex-col items-end justify-center gap-[24px] p-6  ">
          <h1 className="font-Verah text-[6em] lg:text-[3.4em] text-white text-right tracking-[0.06em] will-change-transform">
            About ARTA
          </h1>
          <p className="font-Neue text-[3em] lg:text-[1em] text-white max-w-[30em] mb-[1.5em]">
            ARTA TechFin aims to build the next generation of financial
            services, using technology to transform the traditional financial
            industry and expand into new services, products and experiences.
          </p>

          <a
            href="#_"
            className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border  border-white py-[8px] px-[32px] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out transitionfix"
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
              <span className="text-[3em] lg:text-[1em]"> Show more</span>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[3em] lg:text-[1em] text-white transition-all duration-300 group-hover:translate-x-full">
              Show more
            </span>
            <span className="text-[3em] lg:text-[1em] invisible relative">Show more</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default about

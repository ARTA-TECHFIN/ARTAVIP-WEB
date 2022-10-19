import React from 'react'

const About: React.FC = () => {
  return (
    <div className="relative z-2 flex h-screen w-full flex-col bg-about-gradient md:flex-row">
      <div className="relative h-[50%] w-full overflow-hidden md:h-full md:max-w-[calc(500%+220px)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute h-full w-full translate-y-[-45%] translate-x-[100px] scale-[200%]  object-cover md:translate-y-0  md:scale-[140%]"
        >
          {/* md:translate-x-[-20%] */}
          <source src="/videos/landing_about.mov" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-[50%] w-full sm:min-w-[400px] md:h-full md:max-w-[calc(50%-220px)]">
        <div className="mr-auto flex h-full w-full max-w-full flex-col items-start justify-center gap-[24px] p-6 text-left md:max-w-[500px] md:items-end md:text-right">
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

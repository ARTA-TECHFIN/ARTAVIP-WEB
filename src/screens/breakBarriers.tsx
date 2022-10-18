import React from 'react'

export const BreakBarriers = () => {
  return (
    <section
      className=" relative flex w-full flex-col bg-arta-russet-100"
      id="initial"
    >
      <video
        id="video"
        autoPlay
        muted
        playsInline
        crossOrigin="anonymous"
        className="h-[100vh] w-full object-cover"
      >
        <source src="/videos/Comp 1_2.mp4" typeof="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* top-[20%] left-0   sm:top-[40%] lg:left-[10%] xl:left-[20%] xl:mx-auto */}
      <div className=" flex max-w-main-contain items-start justify-center px-6  xl:mx-auto movable-elements-wrapper">
        <div className="absolute  top-[20%] left-0 sm:top-[35%] xl:left-[10%] xl:mx-auto 2xl:left-[15%] ">
          <h1
            className="z-[200] font-Verah text-[36px] leading-[40px] text-white sm:text-[5em] sm:leading-[1.02em] movable"
            id="animation"
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

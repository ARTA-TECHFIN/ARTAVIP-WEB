import React from 'react'
import { ButtonAnimated } from '../ButtonAnimated'
import { useTranslation } from 'next-i18next'

const About = ({ k }: any) => {
  const { t } = useTranslation('common')

  return (
    <div className="relative z-3 flex h-screen w-screen will-change-transform">
      <div className="video-container absolute top-0 left-0 h-full w-full">
        <video
          data-keepplaying
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute h-full w-full object-cover will-change-transform"
        >
          {/* md:translate-x-[-20%] */}
          <source src="/videos/landing_about.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute right-[3em] bottom-[0] z-1 flex w-[70em] -translate-y-1/2 transform justify-end self-center lg:bottom-auto lg:top-1/2 lg:w-[50em]">
        <div className="ml-auto h-full flex-col items-end justify-center gap-[24px] p-2 text-right lg:w-1/2  ">
          <h1 className="text-right font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform lg:text-[3.4em]">
            About ARTA
          </h1>
          <p className="mb-[1.5em] max-w-[30em] font-Neue text-[3.6em] text-white md:text-[1.8em] lg:text-[1em]">
            {k.about_us_description}
          </p>

          <ButtonAnimated
            as="a"
            href="/"
            className="border-white text-white"
          >
            {t("home.show_more")}
          </ButtonAnimated>
        </div>
      </div>
    </div>
  )
}

export default About

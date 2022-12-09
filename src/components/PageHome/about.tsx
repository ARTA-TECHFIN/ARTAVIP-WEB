import React from 'react'
import { ButtonAnimated } from '../ButtonAnimated'
import { useTranslation } from 'next-i18next'

const About = ({ k }: any) => {
  const { t } = useTranslation('common')

  return (
    <div className="relative z-3 flex h-app-height lg:h-screen w-screen will-change-transform bg-[#3c2516]">
      <div className="video-container absolute top-0 left-0 h-full w-full overflow-hidden">
        <video
          data-keepplaying
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute h-full w-full transform scale-[250%] lg:scale-100 left-[55%] -top-[20%] lg:left-0 lg:top-0 lg:object-cover will-change-transform"
        >
          <source src="/videos/landing_about.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute h-[40vh] w-full bottom-0 left-0 about-background-gradient z-1 lg:hidden" />
      <div className="absolute left-[3em] sm:left-[1em] lg:left-auto lg:right-[4em] bottom-[0] z-1 flex w-[77em] -translate-y-1/2 transform lg:justify-end self-center z-[2] lg:bottom-auto lg:top-1/2 lg:w-[50em]">
        <div className="text-left pl-6 lg:text-right">
          <h1 className="lg:text-right font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform sm:text-[5em] lg:text-[3.4em]">
            {t("home.about_arta")}
          </h1>
          <p className="mb-[1.5em] max-w-[30em] font-Neue text-[3.6em] text-white sm:text-[1.8em] lg:text-[1em]">
            {k.about_us_description}
          </p>

          <ButtonAnimated
            as="a"
            href="/about-us"
            className="border-white text-white w-full md:w-auto"
          >
            {t("home.show_more")}
          </ButtonAnimated>
        </div>
      </div>
    </div>
  )
}

export default About

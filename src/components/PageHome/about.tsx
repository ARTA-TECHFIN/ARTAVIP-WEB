import React from 'react'
import { ButtonAnimated } from '../ButtonAnimated'
import { useTranslation } from 'next-i18next'

const About = ({ k }: any) => {
  const { t } = useTranslation('common')

  return (
    <div className="relative z-3 flex h-app-height w-screen bg-[#3c2516] will-change-transform lg:h-screen">
      <div className="video-container absolute top-0 left-0 h-full w-full overflow-hidden">
        <video
          data-keepplaying
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="will-change-transform absolute top-[-12em] left-1/2 transform translate-x-[-28%] max-w-[250%] w-[250%] sm:top-[-14em] sm:w-[180%] md:top-[-12em] md:w-[160%] md:left-0 md:translate-x-0 md:top-0 lg:top-0 lg:w-full lg:h-full lg:object-cover"
        >
          <source src="/videos/landing_about-updated.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-background-gradient absolute bottom-0 left-0 z-1 h-[40vh] w-full lg:hidden" />
      <div className="absolute left-[3em] bottom-[0] z-1 z-[2] flex w-[77em] -translate-y-1/2 transform self-center sm:left-[1em] lg:left-auto lg:right-[4em] lg:bottom-auto lg:top-1/2 lg:w-[50em] lg:justify-end">
        <div className="pl-6 text-left lg:text-right">
          <h1 className="font-Verah text-[6em] tracking-[0.06em] text-white will-change-transform sm:text-[5em] lg:text-right lg:text-[3.4em]">
            {t('home.about_arta')}
          </h1>
          <p className="mb-[1.5em] max-w-[30em] font-Neue text-[3em] text-white sm:text-[1.8em] lg:text-[1em]">
            {k.about_us_description}
          </p>

          <ButtonAnimated
            as="a"
            href="/about-us"
            className="w-full border-white text-white md:w-auto"
          >
            {t('home.show_more')}
          </ButtonAnimated>
        </div>
      </div>
    </div>
  )
}

export default About

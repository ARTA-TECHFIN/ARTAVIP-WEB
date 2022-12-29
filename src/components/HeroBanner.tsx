import Image from 'next/image'
import { textClass } from 'src/components/Text'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { FadeUp } from 'src/components/FadeUp'
import cn from 'classnames'

type propsT = {
  title: string
  title2?: string
  label?: string
  description: string
  image: string
  mobileImage: string
  simpleHeader?: boolean
  fullWidth?: boolean
}

gsap.registerPlugin(ScrollTrigger)

const HeroBanner = ({
  simpleHeader = false,
  title,
  title2,
  label,
  description,
  image,
  mobileImage,
  fullWidth = false,
}: propsT) => {
  const bannerImage = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bannerImage.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    tl.to(bannerImage.current, {
      y: 200,
    })
  }, [])

  return (
    <div
      className={cn(
        'relative z-2 w-full overflow-hidden',
        simpleHeader ? 'h-[60vh]' : 'h-app-height md:h-[0] md:pb-[56.25%]'
      )}
    >
      <div ref={bannerImage} className="absolute h-full w-full overflow-hidden">
        <img
          src={simpleHeader ? '/images/investor-relations/top-inner-banner.jpg' : image}
          alt={title}
          className="hidden h-full w-full object-cover md:block"
        />
        <img
          src={
            simpleHeader ? '/images/investor-relations/mobile-top-inner-banner.jpg' : mobileImage
          }
          alt={title}
          className="h-full w-full object-cover md:hidden"
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" /> */}
      <div
        className={cn(
          'absolute inset-0 mb-12 flex flex-col items-center justify-end pt-20 lg:mb-0',
          simpleHeader ? 'lg:bottom-16' : 'lg:justify-center'
        )}
      >
        <div className="arta-container banner-text-shadow text-white">
          <FadeUp>
            <div className={cn(simpleHeader || fullWidth ? '' : 'md:w-1/2')}>
              <p className={textClass.title_style2}>{label}</p>
              <h1 className={`mt-1 ${textClass.h1_style2}`}>
                {title}{' '}
                {title2 ? (
                  <>
                    <br /> {title2}
                  </>
                ) : (
                  ''
                )}
              </h1>
              {description !== 'null' && !simpleHeader && (
                <p className={`mt-4 ${textClass.body_regular_verah}`}>{description}</p>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}

export { HeroBanner }

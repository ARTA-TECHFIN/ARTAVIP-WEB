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

    //  <img src={image} alt="" className="object-cover w-full h-[60vh]" />
    <div style={{ background: 'url(' + image + ') no-repeat', width: '100%', height: '600px', backgroundSize: 'cover' }} className='z-2'>
      <div className={cn(
          'absolute inset-0 mb-12 flex flex-col items-center justify-end pt-20 lg:mb-0',
          simpleHeader ? 'lg:bottom-16' : 'lg:justify-center'
        )}>
           <div className="arta-container text-white">
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

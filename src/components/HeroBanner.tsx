import Image from 'next/image'
import { textClass } from 'src/components/Text'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

type propsT = {
  title: string
  label?: string
  description: string
  image: string
  mobileImage: string
}

// TODO: add animation
// TODO: use object image, not use it as background
// TODO: bgColor
// TODO: add label
// TODO: responsive

gsap.registerPlugin(ScrollTrigger)


const HeroBanner = ({ title, label, description, image, mobileImage }: propsT) => {
  const bannerImage = useRef(null)

  useEffect(()=> {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: bannerImage.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    })

    tl.to(bannerImage.current, {
      y: 200
    })
  }, [])

  return (
    <div className="relative aspect-video h-auto w-full">
      <div ref={bannerImage} className="absolute h-full w-full overflow-hidden">
        <Image priority src={image} alt="" fill className="object-cover md:block hidden" />
        <Image priority src={mobileImage} alt="" fill className="object-cover md:hidden" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
        <div className="arta-container">
          <div className="w-1/2">
          <p className={textClass.title_style2}>{label}</p>
            <h1 className={textClass.h1_style2}>{title}</h1>
            <p className={textClass.body_regular_verah}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroBanner }

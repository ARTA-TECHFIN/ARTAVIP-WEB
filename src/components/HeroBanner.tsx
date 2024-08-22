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
    <div style={{ background: 'url(' + image + ') no-repeat', width: '100%', height: '500px', backgroundSize: 'cover' }} className='z-1'>
      <p className={textClass.title_style2}>{label}</p>
      <h1 className="mt-1 h1-text text-white head-title">
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
  )
}

export { HeroBanner }


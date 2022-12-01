import React, { useEffect, useRef } from 'react'
import { Seo } from 'src/components/Seo'
import Header from 'src/components/Header/Header'
import { textClass } from 'src/components/Text'
import Footer from 'src/components/Footer'
import { FadeUp } from 'src/components/FadeUp'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { gsap } from 'gsap'


const Layout = (props: { cms: any; children: React.ReactNode; }) => {
  const { t } = useTranslation('common')
  const { cms, children } = props

  const bannerImage = useRef(null)

  // useEffect(()=> {
  //   const tl = gsap.timeline({
  //       scrollTrigger: {
  //           trigger: bannerImage.current,
  //           start: 'top top',
  //           end: 'bottom top',
  //           scrub: true,
  //       }
  //   })

  //   tl.to(bannerImage.current, {
  //     y: 200
  //   })
  // }, [])

  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-eggshell-100 pb-12 text-arta-sand-100 md:pb-[150px]">
        <div className="relative md:aspect-video md:h-[50vh] h-[50vh] w-full overflow-hidden z-2">
          <div ref={bannerImage} className="absolute h-[50vh] w-full overflow-hidden">
            <Image priority src={cms.heroBanner.image} alt="" fill className="object-cover md:block hidden" />
            <Image priority src={cms.heroBanner.mobileImage} alt="" fill className="object-cover md:hidden" />
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" /> */}
          <div className="absolute inset-0 flex flex-col items-center lg:justify-center justify-end pt-48  lg:mb-0 mb-12">
            <div className="arta-container">
              <div className="md:w-1/2">
                <h1 className={`mt-1 ${textClass.h1_style2}`}>{cms.heroBanner.title}</h1>
              </div>
            </div>
          </div>
        </div>
        {children}
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export { Layout as StaticLayout }

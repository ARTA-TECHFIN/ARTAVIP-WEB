import React, { useEffect, useRef } from 'react'
import { Seo } from 'src/components/Seo'
import Header from 'src/components/Header/Header'
import { textClass } from 'src/components/Text'
import Footer from 'src/components/Footer'
import Image from 'next/image'
import ArtaLogo from 'src/components/Svg/arta-logo'
import Link from 'next/link'

const Layout = (props: {
  seo: any
  cms: any
  title: any
  children: React.ReactNode
  hideMenu?: boolean
  hideFooter?: boolean
}) => {
  const { seo, cms, title, children, hideFooter = false, hideMenu = false } = props
  const bannerImage = useRef(null)

  return (
    <>
      <Seo title={seo.title} description={seo.description} keywords={seo.keywords} />
      {hideMenu && (
        <div className="arta-container absolute z-[20] text-right">
          <Link href="/">
            <div className="z-2 h-[32px] w-[78.67px] cursor-pointer text-right opacity-100 transition hover:opacity-100 md:h-auto md:w-auto">
              <ArtaLogo
                className={`ml-auto mt-8 h-full w-full text-arta-russet-100 md:h-auto md:w-auto`}
              />
            </div>
          </Link>
        </div>
      )}

      {!hideMenu && <Header textColor="white" />}
      <main className="flex flex-col bg-arta-eggshell-100 pb-12 text-arta-sand-100 md:pb-[150px]">
        <div className="relative z-2 h-[50vh] w-full overflow-hidden md:h-[50vh]">
          <div ref={bannerImage} className="absolute h-[50vh] w-full overflow-hidden">
            <img
              src={cms.heroBanner.image}
              alt=""
              className="hidden h-full w-full object-cover md:block"
            />
            <img
              src={cms.heroBanner.mobileImage}
              alt=""
              className="h-full w-full object-cover object-top md:hidden"
            />
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" /> */}
          <div className="absolute inset-0 bottom-8 flex flex-col items-center justify-end">
            <div className="arta-container banner-text-shadow text-white">
              <div className="w-full">
                <h1 className={`mt-1 ${textClass.h1_style2}`}>{title}</h1>
              </div>
            </div>
          </div>
        </div>
        {children}
      </main>
      {!hideFooter && <Footer textColor="brown" />}
    </>
  )
}

export { Layout as StaticLayout }

import React, { useEffect, useRef } from 'react'
import { Seo } from 'src/components/Seo'
import Header from 'src/components/Header/Header'
import { textClass } from 'src/components/Text'
import Footer from 'src/components/Footer'
import Image from 'next/image'
import ArtaLogo from 'src/components/Svg/arta-logo'
import Link from 'next/link'


const Layout = (props: { seo: any; cms: any; children: React.ReactNode; hideMenu?: boolean, hideFooter?: boolean }) => {
  const { seo, cms, children, hideFooter = false, hideMenu = false } = props
  const bannerImage = useRef(null)

  console.log(seo)

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
      />
      {
        hideMenu && (
          <div className="absolute arta-container text-right z-[20]">
            <Link href="/">
              <div className="z-2 h-[32px] w-[78.67px] cursor-pointer opacity-100 transition text-right hover:opacity-100 md:h-auto md:w-auto">
                <ArtaLogo className={`ml-auto mt-8 text-arta-russet-100 h-full w-full md:h-auto md:w-auto`} />
              </div>
            </Link>
          </div>
        )
      }

      {
        !hideMenu && (
          <Header textColor="brown" />
        )
      }
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
                <h1 className={`mt-1 ${textClass.h1_style2}`}>{seo.title}</h1>
              </div>
            </div>
          </div>
        </div>
        {children}
      </main>
      {
        !hideFooter && <Footer textColor="brown" />
      }
    </>
  )
}

export { Layout as StaticLayout }

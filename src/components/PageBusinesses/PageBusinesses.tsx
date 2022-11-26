import React, { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import BusinessPageModules from '../BusinessPageModules'

const PageBusinesses: FC<{ t: any, locale: string }> = ({ t, locale }) => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t.heroBanner.title}
          description={t.heroBanner.description}
          image={t.heroBanner.image}
          mobileImage={t.heroBanner.mobileImage}
          label={t.heroBanner.label}
        />
        <BusinessPageModules locale={locale} components={t.components} />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageBusinesses

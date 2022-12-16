import React, { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import BusinessPageModules from '../BusinessPageModules'
import { useTranslation } from 'next-i18next'

const PageInsuranceBrokerage: FC<{ k: any; locale: string }> = ({ k, locale }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.insurance_brokerage')} | Arta TechFin`}
        description={t('page_description.insurance_brokerage')}
        keywords={t('page_keywords.insurance_brokerage')}
        ga="OB - Insurance Brokerage"
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t('page_title.insurance_brokerage')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
          label={t('page_title.our_businesses')}
        />
        <BusinessPageModules locale={locale} components={k.components} />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageInsuranceBrokerage

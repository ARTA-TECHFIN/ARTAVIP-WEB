import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import BusinessPageModules from '../BusinessPageModules'
import { useTranslation } from 'next-i18next'

const PageAssetManagementPage: FC<{ k: any; locale: string }> = ({ k, locale }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.asset_management')} | Arta TechFin`}
        description={t('page_description.asset_management')}
        keywords={t('page_keywords.asset_management')}
        ga="OB - Asset Management"
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t('page_title.asset_management')}
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

export default PageAssetManagementPage

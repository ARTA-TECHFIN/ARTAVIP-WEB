import React, { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import BusinessPageModules from '../BusinessPageModules'
import { useTranslation } from 'next-i18next'

const PageArtazine: FC<{ k: any; locale: string }> = ({ k, locale }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.artazine')} | Arta TechFin`}
        description={t('page_description.artazine')}
        keywords={t('page_keywords.artazine')}
        ga="OB - ARTAZINE"
      />
      <Header textColor="black" />
      <main className="flex flex-col bg-arta-bright-gray text-arta-black">
        <div className="mt-[32px] pt-[6em] md:mt-[48px] lg:pt-[4.6em]"></div>
      </main>
      <Footer textColor="black" />
    </>
  )
}

export default PageArtazine

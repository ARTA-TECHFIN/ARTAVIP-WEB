import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { SectionMission } from './SectionMission'
import { SectionCulture } from './SectionCulture'
import { SectionLeadership } from './SectionLeadership'
import { SectionTechFin } from './SectionTechFin'
import { SectionTechFinVsFinTech } from './SectionTechFinVsFinTech'
import { HeroBanner } from '../HeroBanner'
import { PageAboutCmsT } from 'src/pages/about'
import { useTranslation } from 'next-i18next'

const PageAbout: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <Seo title={t('page_title.about_us')} />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t('page_title.about_us')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
        <SectionMission k={k} />
        <SectionCulture k={k} />
        <SectionLeadership k={k} />
        <SectionTechFin k={k} />
        <SectionTechFinVsFinTech k={k} />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageAbout

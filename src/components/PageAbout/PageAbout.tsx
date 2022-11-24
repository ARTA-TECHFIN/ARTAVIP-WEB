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

const PageAbout: FC<{ t: PageAboutCmsT }> = ({ t }) => {
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
        />
        <SectionMission t={t} />
        <SectionCulture t={t} />
        <SectionLeadership t={t} />
        <SectionTechFin t={t} />
        <SectionTechFinVsFinTech t={t} />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageAbout

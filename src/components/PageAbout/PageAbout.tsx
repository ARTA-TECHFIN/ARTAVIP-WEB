import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { SectionFullMission } from './SectionFullMission'
import { SectionCulture } from './SectionCulture'
import { SectionLeadership } from './SectionLeadership'
import { SectionTechFin } from './SectionTechFin'
import { SectionTechFinVsFinTech } from './SectionTechFinVsFinTech'
import { PageAboutCmsT } from 'src/pages/about-us'
import { useTranslation } from 'next-i18next'

const PageAbout: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <Seo
        title={`${t('page_title.about_us')} | Arta TechFin`}
        description={t('page_description.about_us')}
        keywords={t('page_keywords.about_us')}
        ga="About Us"
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <SectionFullMission
          label={t('about_us.vision_mission')}
          title={k.mission.subtitle1}
          title2={k.mission.subtitle2}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
          description="null"
          fullWidth={true}
          k={k}
        />

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

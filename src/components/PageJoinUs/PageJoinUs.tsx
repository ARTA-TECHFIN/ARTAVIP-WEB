import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { HeroBanner } from '../HeroBanner'
import { SectionWorkWithArta } from './SectionWorkWithArta'
import SectionOurValues from './SectionOurValues'
import SectionCare from './SectionCare'
import SectionJobOpenings from './SectionJobOpenings'

export const t = {
  heroBanner: {
    title: 'Join Us',
    description: `Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
    image: '/images/join-us/banner.png',
    mobileImage: '/images/join-us/mobile-banner.png',
  },
}

const pageJoinUs: NextPage = () => {
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
        <SectionWorkWithArta />
        <SectionOurValues/>
        <SectionCare/>
        <SectionJobOpenings/>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default pageJoinUs

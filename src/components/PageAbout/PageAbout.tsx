import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import leader_1 from './images/leader_1.jpg'

import eco_icon1 from './images/eco_icon1.png'

import { SectionMission } from './SectionMission'
import { SectionCulture } from './SectionCulture'
import { SectionLeadership } from './SectionLeadership'
import { SectionTechFin } from './SectionTechFin'
import { SectionTechFinVsFinTech } from './SectionTechFinVsFinTech'
import { HeroBanner } from '../HeroBanner'

export const t = {
  heroBanner: {
    title: 'About Us',
    description: `Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
    image: '/images/about/banner.jpg',
    mobileImage: '/images/about/mobile-banner.png',
  },
  mission: {
    title: 'Vision & Mission',
    subtitle1: `Think Tech, Think People`,
    subtitle2: `Break Barries for Greatness`,
  },
  culture: {
    title: 'Culture & Values',
    subtitle1: `We believe that the best results will be produced by the best people working in the best culture. We wish to see these qualities in our people.`,
    sectionTitle: `Our Core Values`,
    // prettier-ignore
    valueList: [
      { title: `Entrepreneurial mindset`, description: `We encourage our staff to be decisive and proactive in overcoming challenges, learning new things and striving for success.` },
      // TODO: fix description
      { title: `Compassion`, description: `We encourage our staff to be decisive and proactive in overcoming challenges, learning new things and striving for success.` },
      { title: `Creating Shared Value`, description: `We encourage our staff to be decisive and proactive in overcoming challenges, learning new things and striving for success.` },
      { title: `Embracing Diversity`, description: `We encourage our staff to be decisive and proactive in overcoming challenges, learning new things and striving for success.` },
      { title: `Integrity & Trust`, description: `We encourage our staff to be decisive and proactive in overcoming challenges, learning new things and striving for success.` },
    ],
  },
  leadership: {
    title: 'Leadership',
    // prettier-ignore
    leaderList: [
      { name: 'Mr. Adrian Cheng', title: 'Chairman', image: leader_1 },
      { name: 'Mr. Eddie Lau', title: 'Chief Executive Officer', image: leader_1 },
      { name: 'Mr. Eddie Lau', title: 'Chief Finance Officer /\n Head of Global Markets', image: leader_1 },
      { name: 'Mr. Eddie Lau', title: 'Chief Executive Officer', image: leader_1 },
      { name: 'Mr. Eddie Lau', title: 'Chief Executive Officer', image: leader_1 },
    ],
  },
  techFin: {
    title: 'What is TechFin',
    subtitle: `Technology-enabled Finance Solutions`,
    section1Title: 'Subtitle',
    section1Body: `We believe that technology is the key to building a happier and more fulfilling future for all. As technology has continually transformed how we live and do business, it is expected that technology-driven change in the financial services sector will be the next wave. And we aim to be at the forefront of this change. `,
    section2Title: 'Subtitle',
    section2Body: `We use technology to transform the traditional financial industry and expand into new services, products and experiences. By placing technology at the heart of everything, we will consistently change, disrupt, challenge and innovate the financial services industry. In the process, we will deliver richer, more creative, more immersive and more valuable client experiences.`,
  },
  ecosystem: {
    title: 'Our Ecosystem',
    subtitle: `Supported by ARTA TechFin’s major shareholder, we work closely with our affiliates within the ecosystem, which comprises our clients, shareholders, business partners and investee companies, to build an inter-connected network that creates value for all.`,
    // Must be 5
    itemList: [
      { title: '1 Technology/Internet Companies', image: eco_icon1 },
      { title: '2 Technology/Internet Companies', image: eco_icon1 },
      { title: '3 Technology/Internet Companies', image: eco_icon1 },
      { title: '4 Technology/Internet Companies', image: eco_icon1 },
      { title: '5 Technology/Internet Companies', image: eco_icon1 },
    ],
  },
  techFinVsFinTech: {
    title: 'TechFin vs FinTech',
    subtitle: `Both TechFin and FinTech companies contribute to the financial industry by providing innovative solutions. The difference is mainly in the concept they do business. `,
    techFinTitle: 'TechFin',
    techFinBody: `TechFin is where the technology companies enter the finance sector to change how users interact with the industry. TechFin firms launch new ways to deliver financial services and solutions by thinking like a technology company.`,
    finTechTitle: 'FinTech',
    finTechBody: `FinTech is where the finance industry starts using technology to offer a better customer experience`,
  },
}

const PageAbout: NextPage = () => {
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
        <SectionMission />
        <SectionCulture />
        <SectionLeadership />
        <SectionTechFin />
        <SectionTechFinVsFinTech />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageAbout

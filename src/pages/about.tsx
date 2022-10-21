import type { NextPage } from 'next'
import Image from 'next/image'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import banner from 'src/components/About/img/banner.png'
import mission_bg from 'src/components/About/img/mission_bg.png'
import culture_bg from 'src/components/About/img/culture_bg.png'
import leadership_bg from 'src/components/About/img/leadership_bg.png'
import tech_fin_bg from 'src/components/About/img/tech_fin_bg.png'
import compare_bg from 'src/components/About/img/compare_bg.png'

const t = {
  heroBanner: {
    title: 'About Us',
    subtitle: `Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
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
      { name: 'Mr. Adrian Cheng', title: 'Chairman' },
      { name: 'Mr. Eddie Lau', title: 'Chief Executive Officer' },
      { name: 'Mr. Eddie Lau', title: 'Chief Finance Officer / Head of Global Markets' },
      { name: 'Mr. Eddie Lau', title: 'Chief Executive Officer' },
      { name: 'Mr. Eddie Lau', title: 'Chief Executive Officer' },
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
    itemList: [
      // TODO: fix image
      { title: 'Technology/Internet Companies', image: '/technology.png' },
      { title: 'Technology/Internet Companies', image: '/technology.png' },
      { title: 'Technology/Internet Companies', image: '/technology.png' },
      { title: 'Technology/Internet Companies', image: '/technology.png' },
      { title: 'Technology/Internet Companies', image: '/technology.png' },
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

const SectionHeroBanner = () => {
  return (
    <div className="w-full h-auto aspect-video relative">
      <Image
        src={banner}
        alt=""
        className="w-full h-full"
        layout="responsive"
      />
      <div className="absolute inset-0 flex flex-col justify-center pt-20 items-center">
        <div className="w-main-contain-2 max-w-full">
          <div className="w-1/2">
            <h1>{t.heroBanner.title}</h1>
            <span>{t.heroBanner.subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionMission = () => {
  return (
    <div className="flex flex-col h-96 w-full">
      <h2>{t.mission.title}</h2>
      <span>{t.mission.subtitle1}</span>
      <span>{t.mission.subtitle2}</span>
    </div>
  )
}

const SectionCulture = () => {
  return (
    <div className="grid grid-cols-2 h-96 w-full">
      <div className="flex flex-col justify-center">
        <h2>{t.culture.title}</h2>
        <span>{t.culture.subtitle1}</span>
      </div>
      <div>
        <h3>{t.culture.sectionTitle}</h3>
        <ul>
          {t.culture.valueList.map((value, index) => (
            <li key={index}>
              <span>{value.title}</span>
              <span>{value.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const SectionLeadership = () => {
  return (
    <div>
      <h2>{t.leadership.title}</h2>
      <ul>
        {t.leadership.leaderList.map((leader, index) => (
          <li key={index}>
            <span>{leader.name}</span>
            <span>{leader.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SectionTechFin = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <h2>{t.techFin.title}</h2>
      </div>
      <div className="col-span-8">
        <span>{t.techFin.subtitle}</span>
        {/* hr */}
        <h3>{t.techFin.section1Title}</h3>
        <span>{t.techFin.section1Body}</span>
        {/* hr */}
        <h3>{t.techFin.section2Title}</h3>
        <span>{t.techFin.section2Body}</span>
      </div>
    </div>
  )
}

const SectionEcosystem = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h2>{t.ecosystem.title}</h2>
        <span>{t.ecosystem.subtitle}</span>
      </div>
      <div>
        {t.ecosystem.itemList.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SectionTechFinVsFinTech = () => {
  return (
    <div className="relative w-full h-96">
      <div>
        <h2>{t.techFinVsFinTech.title}</h2>
        <span>{t.techFinVsFinTech.subtitle}</span>
      </div>
      <div className="absolute w-12 h-12 rounded-full flex justify-center items-center">
        <h3>{t.techFinVsFinTech.techFinTitle}</h3>
        <span>{t.techFinVsFinTech.techFinBody}</span>
      </div>
      <div>VS</div>
      <div className="absolute w-12 h-12 rounded-full flex justify-center items-center">
        <h3>{t.techFinVsFinTech.finTechTitle}</h3>
        <span>{t.techFinVsFinTech.finTechBody}</span>
      </div>
    </div>
  )
}

const AboutPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <main className="bg-arta-sunray-100 text-arta-russet-100 flex flex-col">
        <SectionHeroBanner />
        <SectionMission />
        <SectionCulture />
        <SectionLeadership />
        <SectionTechFin />
        <SectionEcosystem />
        <SectionTechFinVsFinTech />
      </main>
      <footer className="relative z-2 h-full w-full bg-[#402414]">
        <Footer />
      </footer>
    </>
  )
}

export default AboutPage

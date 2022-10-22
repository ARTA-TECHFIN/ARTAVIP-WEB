/* eslint-disable @next/next/no-img-element */
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
import { textClass } from 'src/components/Text'
import { useState } from 'react'
import { IconArrowRight } from 'src/components/Icon'

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
    <div className="relative aspect-video h-auto w-full">
      <Image src={banner} alt="" className="h-full w-full" layout="responsive" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
        <div className="arta-container">
          <div className="w-1/2">
            <h1 className={textClass.h1_style2}>{t.heroBanner.title}</h1>
            <p className={textClass.body_regular}>{t.heroBanner.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionMission = () => {
  return (
    <div className="relative">
      <Image src={mission_bg} alt="" className="h-full w-full" layout="responsive" />
      <div className="arta-container absolute top-0 flex h-full flex-col items-center justify-center">
        <h2 className={`${textClass.title_style2} mb-4 text-center text-arta-eggshell-100`}>
          {t.mission.title}
        </h2>
        <span className={`${textClass.h2_style2} -translate-x-24 text-arta-snow-100`}>
          {t.mission.subtitle1}
        </span>
        <span className={`${textClass.h2_style2} translate-x-24 text-arta-snow-100`}>
          {t.mission.subtitle2}
        </span>
      </div>
    </div>
  )
}

const SectionCulture = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className="relative">
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={culture_bg} alt="" layout="responsive" />
      </div>

      <div className="arta-container grid grid-cols-2 py-36">
        <div className="z-1 flex flex-col justify-center">
          <h2 className={`${textClass.h2_style2} mb-2`}>{t.culture.title}</h2>
          <p className={textClass.body_regular}>{t.culture.subtitle1}</p>
        </div>
        <div className="z-1 pl-8">
          <h3 className={textClass.h3_style2}>{t.culture.sectionTitle}</h3>
          <hr className="my-4 w-full border-arta-sand-100" />
          <ul>
            {t.culture.valueList.map((value, index) => {
              const isSelected = index === selectedIndex
              return (
                <li key={index} className="mb-8 flex flex-col">
                  <button
                    className="group flex -translate-x-8 items-start gap-3 overflow-hidden opacity-70 duration-300 ease-out group-hover:opacity-100"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <IconArrowRight className="h-4 w-4 pt-[10px]" fill="#593725" />
                    <span className={textClass.title}>{value.title}</span>
                  </button>
                  <span className={textClass.body_regular + (isSelected ? '' : ' hidden')}>
                    {value.description}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const SectionLeadership = () => {
  return (
    <div>
      <h2 className={textClass.h2_style2}>{t.leadership.title}</h2>
      <ul>
        {t.leadership.leaderList.map((leader, index) => (
          <li key={index}>
            <span className={textClass.small_text}>{leader.name}</span>
            <span className={textClass.h6}>{leader.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SectionTechFin = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h2 className={textClass.h2_style2}>{t.techFin.title}</h2>
        </div>
        <div className="col-span-8">
          <h3 className={textClass.h3_style2}>{t.techFin.subtitle}</h3>
          {/* hr */}
          <h4 className={textClass.title}>{t.techFin.section1Title}</h4>
          <p className={textClass.body_regular}>{t.techFin.section1Body}</p>
          {/* hr */}
          <h4 className={textClass.title}>{t.techFin.section2Title}</h4>
          <p className={textClass.body_regular}>{t.techFin.section2Body}</p>
        </div>
      </div>

      {/* SectionEcosystem */}
      <div className="flex flex-col">
        <div className="text-center">
          <h3 className={textClass.h3_style2}>{t.ecosystem.title}</h3>
          <p className={textClass.body_regular}>{t.ecosystem.subtitle}</p>
        </div>
        <div>
          {t.ecosystem.itemList.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} />
              <span className={textClass.body_regular}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SectionTechFinVsFinTech = () => {
  return (
    <div className="relative h-96 w-full">
      <div>
        <h2 className={textClass.h2_style2}>{t.techFinVsFinTech.title}</h2>
        <span className={textClass.body_regular}>{t.techFinVsFinTech.subtitle}</span>
      </div>
      <div className="absolute flex h-12 w-12 items-center justify-center rounded-full">
        <h3 className={textClass.h2_style2}>{t.techFinVsFinTech.techFinTitle}</h3>
        <span className={textClass.body_regular}>{t.techFinVsFinTech.techFinBody}</span>
      </div>
      <span className={textClass.h1_style2}>VS</span>
      <div className="absolute flex h-12 w-12 items-center justify-center rounded-full">
        <h3 className={textClass.h2_style2}>{t.techFinVsFinTech.finTechTitle}</h3>
        <span className={textClass.body_regular}>{t.techFinVsFinTech.finTechBody}</span>
      </div>
    </div>
  )
}

const AboutPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <main className="flex flex-col bg-arta-sunray-100 text-arta-sand-100">
        <SectionHeroBanner />
        <SectionMission />
        <SectionCulture />
        <SectionLeadership />
        <SectionTechFin />
        <SectionTechFinVsFinTech />
      </main>
      <footer className="relative z-2 h-full w-full bg-[#402414]">
        <Footer />
      </footer>
    </>
  )
}

export default AboutPage

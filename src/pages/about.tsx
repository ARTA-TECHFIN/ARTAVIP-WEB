/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Image from "next/legacy/image";

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import banner from 'src/components/About/img/banner.jpg'
import mission_bg from 'src/components/About/img/mission_bg.png'
import culture_bg from 'src/components/About/img/culture_bg.png'
import leadership_bg from 'src/components/About/img/leadership_bg.png'
import tech_fin_bg from 'src/components/About/img/tech_fin_bg.png'
import compare_bg from 'src/components/About/img/compare_bg.jpg'

import leader_1 from 'src/components/About/img/leader_1.jpg'

import eco_icon1 from 'src/components/About/img/eco_icon1.png'

import { textClass } from 'src/components/Text'
import { useState } from 'react'
import { IconArrowLeft, IconArrowRight, IconListItemArrow } from 'src/components/Icon'
import { Hr } from 'src/components/Hr'

import { gsap } from 'gsap'

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

const SectionHeroBanner = () => {
  return (
    <div className="relative aspect-video h-auto w-full">
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={banner} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" />
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
    <div className="group/bg relative overflow-hidden">
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={mission_bg} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="arta-container relative flex flex-col items-center justify-center py-36">
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
  const [selectedIndex, _setSelectedIndex] = useState(0)
  const setSelectedIndex = (index: number) => {
    _setSelectedIndex(index)
    gsap.fromTo('.fade-in', { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.2 })
  }

  return (
    <div className="group/bg relative overflow-hidden">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={culture_bg} alt="" layout="fill" objectFit="cover" />
      </div>

      <div className="arta-container relative grid grid-cols-2 py-36">
        <div className="flex flex-col justify-center">
          <h2 className={`${textClass.h2_style2} mb-2`}>{t.culture.title}</h2>
          <p className={textClass.body_regular}>{t.culture.subtitle1}</p>
        </div>
        <div className="pl-8">
          <h3 className={textClass.h3_style2}>{t.culture.sectionTitle}</h3>
          <Hr />
          <ul>
            {t.culture.valueList.map((value, index) => {
              const isSelected = index === selectedIndex
              return (
                <li key={index} className="group/list mb-8 flex flex-col overflow-hidden">
                  <button
                    className={
                      'flex items-start gap-3 overflow-hidden opacity-70 duration-300 ease-out group-hover/list:translate-x-0 group-hover/list:opacity-100' +
                      (isSelected ? ' translate-x-0 opacity-100' : ' -translate-x-7')
                    }
                    onClick={() => setSelectedIndex(index)}
                  >
                    <IconListItemArrow className="h-4 w-4 pt-[10px]" fill="#593725" />
                    <span className={textClass.title}>{value.title}</span>
                  </button>
                  <span
                    className={
                      `fade-in ${textClass.body_regular} mt-4` + (isSelected ? '' : ' hidden')
                    }
                  >
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
    <div className="group/bg relative overflow-hidden">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={leadership_bg} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="arta-container relative py-36">
        <h2 className={`${textClass.h2_style2} mb-2`}>{t.leadership.title}</h2>
        <ul className="flex w-full max-w-full flex-nowrap overflow-x-auto">
          {t.leadership.leaderList.map((leader, index) => (
            <li key={index} className="mr-8 flex w-[14rem] min-w-[14rem] flex-col last:mr-0">
              <div className="relative mb-4 aspect-[3/4] h-auto w-full overflow-hidden">
                <Image src={leader.image} alt="" layout="fill" objectFit="cover" />
              </div>
              <span className={`${textClass.small_text} whitespace-pre`}>{leader.title}</span>
              <span className={textClass.h6}>{leader.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const SectionTechFin = () => {
  const [selectedIndex, setSelectedIndex] = useState(2)

  return (
    <div className="relative flex flex-col">
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={tech_fin_bg} alt="" layout="fill" objectFit="cover" />
      </div>

      <div className="arta-container relative grid grid-cols-12 py-36">
        <div className="col-span-4 flex items-center">
          <h2 className={textClass.h2_style2}>{t.techFin.title}</h2>
        </div>
        <div className="col-span-8">
          <h3 className={textClass.h3_style2}>{t.techFin.subtitle}</h3>
          <Hr />
          <h4 className={`${textClass.title} mb-2`}>{t.techFin.section1Title}</h4>
          <p className={`${textClass.body_regular} max-w-[80%]`}>{t.techFin.section1Body}</p>
          <Hr />
          <h4 className={`${textClass.title} mb-2`}>{t.techFin.section2Title}</h4>
          <p className={`${textClass.body_regular} max-w-[80%]`}>{t.techFin.section2Body}</p>
          <Hr />
        </div>
      </div>

      {/* SectionEcosystem */}
      <div className="relative flex flex-col items-center pb-36">
        <div className="mb-12 max-w-3xl text-center">
          <h3 className={textClass.h3_style2}>{t.ecosystem.title}</h3>
          <p className={textClass.body_regular}>{t.ecosystem.subtitle}</p>
        </div>
        <div className="relative h-96 w-full max-w-full overflow-hidden">
          {t.ecosystem.itemList.map((item, index) => {
            const isSelected = index === selectedIndex
            const styledIndex = (index - selectedIndex + 7) % 5

            return (
              <div
                key={index}
                className={
                  'absolute left-1/2 flex aspect-square flex-col items-center justify-center rounded-full shadow-2xl transition-all duration-300' +
                  [
                    ' top-[24%] h-[60%] translate-x-[-300%]',
                    ' top-[10%] h-[70%] translate-x-[-164%]',
                    ' top-0 h-[80%] translate-x-[-50%]',
                    ' top-[10%] h-[70%] translate-x-[64%]',
                    ' top-[24%] h-[60%] translate-x-[200%]',
                  ][styledIndex] +
                  (isSelected
                    ? ' bg-arta-eggshell-100 text-arta-sand-100'
                    : ' bg-arta-sand-100/70 text-arta-snow-100')
                }
              >
                <div className="relative mb-4 h-16 w-16">
                  <Image src={item.image} alt="" layout="fill" objectFit="cover" />
                </div>
                <span className={`${textClass.body_regular} max-w-[60%] text-center`}>
                  {item.title}
                </span>
              </div>
            )
          })}

          <button
            className="absolute bottom-4 left-1/2 translate-x-[-350%]"
            onClick={() =>
              setSelectedIndex((s) =>
                !t.ecosystem.itemList[s - 1] ? t.ecosystem.itemList.length - 1 : s - 1
              )
            }
          >
            <IconArrowLeft fill="#593725" />
          </button>
          <button
            className="absolute bottom-4 left-1/2 translate-x-[250%]"
            onClick={() => setSelectedIndex((s) => (!t.ecosystem.itemList[s + 1] ? 0 : s + 1))}
          >
            <IconArrowRight fill="#593725" />
          </button>
        </div>
      </div>
    </div>
  )
}

const SectionTechFinVsFinTech = () => {
  return (
    <div className="group/bg relative overflow-hidden pb-36">
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={compare_bg} alt="" layout="fill" objectFit="cover" />
      </div>

      <div className="arta-container relative grid grid-cols-12 pt-36">
        <div className="col-span-5 flex items-center justify-center">
          <div className="flex aspect-square w-full -translate-y-12 flex-col items-center justify-center rounded-full bg-arta-eggshell-100 p-12 text-center">
            <h3 className={textClass.h2_style2}>{t.techFinVsFinTech.techFinTitle}</h3>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.techFinBody}</span>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <span className={textClass.h1_style2}>VS</span>
        </div>
        <div className="col-span-5">
          <div>
            <h2 className={`${textClass.h2_style2} mb-4`}>{t.techFinVsFinTech.title}</h2>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.subtitle}</span>
          </div>
          <div className="flex aspect-square w-full translate-y-12 flex-col items-center justify-center rounded-full bg-arta-eggshell-100 p-12 text-center">
            <h3 className={textClass.h2_style2}>{t.techFinVsFinTech.finTechTitle}</h3>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.finTechBody}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-[#D1C2AC] text-arta-sand-100">
        <SectionHeroBanner />
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

export default AboutPage

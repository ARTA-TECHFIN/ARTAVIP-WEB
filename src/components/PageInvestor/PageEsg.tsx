import type { NextPage } from 'next'
import { textClass } from 'src/components/Text'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import { IconListItemArrow, TopDownArrow, DownTopArrow } from '../Svg/Icon'

gsap.registerPlugin(ScrollToPlugin)

const PageEsg: NextPage = () => {
  const nav = useRef<HTMLUListElement>(null)
  const sections = useRef(null)

  const goToSection = (index: number) => () => {
    const esgSections = document.querySelectorAll('.esg-section')
    gsap.to(window, { duration: 1, scrollTo: { y: esgSections[index], offsetY: 130 } })
  }

  useEffect(() => {
    const esgSections = document.querySelectorAll('.esg-section')

    if (!esgSections.length) return

    gsap.to('.arta-gradient-border-inner', { rotate: 360, duration: 3, repeat: -1 })

    ScrollTrigger.create({
      trigger: nav.current,
      start: 'top center-=200px',
      endTrigger: sections.current,
      end: 'bottom center',
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      anticipatePin: 1,
      refreshPriority: 1,
    })

    esgSections.forEach((esgSection, index) => {
      ScrollTrigger.create({
        trigger: esgSection,
        start: 'top top+=320',
        end: 'bottom top+=320',
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
        onLeave: () => unsetActive(index),
        onLeaveBack: () => unsetActive(index),
      })
    })

    const navItems = nav.current?.childNodes

    function setActive(index: number) {
      if (!navItems) return
      const activeItem = navItems[index] as Element

      gsap.to(activeItem, { fontWeight: 800 })
      gsap.to(activeItem.querySelector('svg'), { width: 24 })
    }

    function unsetActive(index: number) {
      if (!navItems) return

      const activeItem = navItems[index] as Element

      gsap.to(activeItem, { fontWeight: 400 })
      gsap.to(activeItem.querySelector('svg'), { width: 0 })
    }

    setActive(0)
  }, [])

  const navList = ['Introduction', 'Environmental', 'Social', 'Governance']

  return (
    <div className="grid grid-cols-12 gap-x-5 pt-16">
      <ul ref={nav} className="col-span-3 h-[140px] !translate-y-0">
        {navList.map((item, index) => (
          <li
            className={`mb-6 flex cursor-pointer items-center text-black ${textClass.body_regular_verah}`}
            key={index}
            onClick={goToSection(index)}
          >
            <IconListItemArrow className="mr-2 w-0" fill="#593725" />
            {item}
          </li>
        ))}
      </ul>
      <div className="col-span-9" ref={sections}>
        <div id="introduction" className="esg-section pb-16">
          <h2 className={`${textClass.h3_style2}`}>{`Introduction`}</h2>
          <p className={`mt-4 ${textClass.body_regular_verah}`}>
            {`ARTA TechFin is determined to become a sustainability-conscious corporation. By engaging Group-wide initiative and taking sustainability-conscious into our decision-making process, we will answer our conscience and the general public with commitment and action.`}
          </p>
        </div>

        <div id="environmental" className="esg-section">
          <h2 className={`${textClass.h3_style2}`}>{`Environmental`}</h2>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`Acting responsibly to our planet earth, we devote great efforts to preventing pollution, minimizing energy consumption and reducing physical waste. At ARTA TechFin’s offices, we promote environmentally responsive virtue. Staff at our office are encouraged to have their recyclable waste categorized by paper, metals and plastics at our recycling facilities.`}</p>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`We have our offices located in K11 Atelier certified green offices. As an environmentally responsible tenant, we have an eco-lighting system installed to ensure electricity will be utilized only when it is necessary at the workstations and rooms; water-saving taps are installed and water will run with a lot more bubbles so that net water volume will be pared. By 2025, we aim to gradually reduce our electricity usage per square foot by 40% and water usage by 50% compared to 2021. `}</p>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`We also take a prudent approach to ensure our business is not a threat to the environment. In every investment strategy and service provider selection, we shall take sustainability into consideration.`}</p>
        </div>

        <div id="social" className="esg-section pt-16">
          <h2 className={`${textClass.h3_style2}`}>{`Social`}</h2>
          <h3 className={`mt-4 text-arta-sand-200 ${textClass.h6}`}>{`Employee care`}</h3>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`To nurture an equal, engaged and productive working environment, we have adopted flexible working hours. Our performance evaluation is result oriented so that staff can utilize their hours to achieve work-life balance.`}</p>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`We respect and stand up for the rights and dignity of staff of different races, genders and sexual orientations. People at ARTA TechFin are treated equally and fairly. We evaluate our staff by performance instead of identity.`}</p>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`Regarding talent management, we adhere to a ‘people-oriented’ principle while striving to provide an equal, diverse and respectful work environment for our employees. We have eliminated any trace of discrimination in hiring or treatment regardless of race, religion, gender, age, marital status, or physical and mental disability. To encourage greater workplace diversity and attract global talent from all walks of life, we welcome suitable foreign applicants and encourage employees to work from home remotely from different countries.`}</p>
          <h3 className={`mt-4 text-arta-sand-200 ${textClass.h6}`}>{`Community`}</h3>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`We believe corporations should take responsibility for fostering a sustainable community, given their considerable influence and prominence within society. We continue to show our care for different aspects of local community development, especially in the focus areas of employment promotion, social services, and community technology development.`}</p>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`We encourage our employees to participate in charitable events to contribute to society. The company will also organize charitable events as well as monetary donations to charities that match ARTA TechFin’s values.`}</p>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`Sharing knowledge to the youth and people in need generously is our social obligation. We will organize talks, seminars and courses with different institutions every year. We will offer up-to-date technical and finance know-how, case studies and market information to the interested parties.`}</p>
        </div>

        <div id="Governance" className="esg-section pt-16">
          <h2 className={`${textClass.h3_style2}`}>{`Governance`}</h2>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`We believe the growth and sustainability of the Group's businesses depend on the maintenance of high standards of corporate governance and business ethics. We value transparency and accountability as the keys to achieving a high standard of corporate governance, earning the confidence of shareholders and the public. In order to achieve this, ARTA TechFin has implemented strict governance procedures to guarantee accountability and transparency for our shareholders' long-term interests.`}</p>

          <h3 className={`mt-4 text-arta-sand-200 ${textClass.h6}`}>{`The Board`}</h3>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`The Board currently comprises a total of eight Directors, being three Executive Directors, two Non-Executive Directors and three Independent Non-Executive Directors, with expertise and experience covering a wide range of professions. The number of Independent Non-Executive Directors represents more than one-third of the Board. They have actively participated in the board committees of the Company and have made significant contributions of their skills and expertise to these committees.`}</p>

          <h3 className={`mt-4 text-arta-sand-200 ${textClass.h6}`}>{`Board Committees`}</h3>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`There are seven committees established directly under the Board to oversee the accountability of the corporate governance framework, including:`}</p>
          <ul className={`mt-4 list-disc pl-8 ${textClass.body_regular_verah}`}>
            <li>{`Management Committee`}</li>
            <li>{`Executive Committee`}</li>
            <li>{`Advisory Committee`}</li>
            <li>{`Compensation, Management Development and Succession Committee`}</li>
            <li>{`Nominating and Governance Committee`}</li>
            <li>{`Audit Committee`}</li>
            <li>{`Risk Committee`}</li>
            <li>{`Technology Committee`}</li>
          </ul>

          <h3 className={`mt-12 text-arta-sand-200 ${textClass.h6}`}>{`Risk management`}</h3>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`The Group has adopted both the “Top-down” and “Bottom-up” approaches.`}</p>

          <div className="arta-gradient-border relative mt-6 overflow-hidden">
            <div className="arta-gradient-border-inner"></div>
            <div className=" relative z-20 flex bg-arta-eggshell-100 py-12 px-[60px]">
              <div className="relative">
                <div className="arta-gradient-line-left absolute right-0 h-full"></div>
                <div className="pr-6">
                  <h3 className={`pl-4 text-arta-secondary ${textClass.h6}`}>{`The Board`}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary ${textClass.small_text_style2}`}
                  >{`(Risk Management Oversight)`}</p>
                  <ul className={`mt-4 list-disc pl-4 ${textClass.body_regular_verah}`}>
                    <li>{`Oversees the Company’s risk management policies and process`}</li>
                    <li className="mt-4">{`Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems`}</li>
                    <li className="mt-4">{`Determines the nature and extent of the outstanding emerging and existing risks`}</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-6">
                <div>
                  <h3
                    className={`pl-4 text-arta-secondary ${textClass.h6}`}
                  >{`Head of departments`}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary ${textClass.small_text_style2}`}
                  >{`(Risk & Control Monitoring)`}</p>
                  <ul className={`mt-4 list-disc pl-4 ${textClass.body_regular_verah}`}>
                    <li>{`Oversees the Company’s risk management policies and process`}</li>
                    <li>{`Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems`}</li>
                    <li>{`Determines the nature and extent of the outstanding emerging and existing risks`}</li>
                  </ul>
                </div>
                <div className="mt-11">
                  <h3
                    className={`pl-4 text-arta-secondary ${textClass.h6}`}
                  >{`Business/operating units`}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary ${textClass.small_text_style2}`}
                  >{`(Operating Risks & Internal Controls Ownership)`}</p>
                  <ul className={`mt-4 list-disc pl-4 ${textClass.body_regular_verah}`}>
                    <li>{`Oversees the Company’s risk management policies and process`}</li>
                    <li>{`Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems`}</li>
                    <li>{`Determines the nature and extent of the outstanding emerging and existing risks`}</li>
                  </ul>
                </div>
              </div>

              <div className=" absolute top-0 left-1">
                <p className=" absolute top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 rotate-90 text-center">
                  Top-down
                </p>
                <TopDownArrow />
              </div>

              <div className=" absolute bottom-0 right-1">
                <p className=" absolute top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 -rotate-90 text-center">
                  Bottom-up
                </p>
                <DownTopArrow />
              </div>
            </div>
          </div>

          {/* Top-down
  The Board
  Head of departments
  (Risk Management Oversight)
  (Risk & Control Monitoring)
  Oversees the Company’s risk management policies and process
  Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems
  Determines the nature and extent of the outstanding emerging and existing risks
  Identifies, assesses and manages the significant operating risks facing the Company
  Monitors the risk management and internal control systems and implements new controls·
  Business/operating units
  (Operating Risks & Internal Controls Ownership)
  Risk identification, assessment and mitigation performed across various departments
  Practices across business operations and functional areas
  Bottom-up */}
          <h3 className={`mt-12 text-arta-sand-200 ${textClass.h6}`}>{`Code of Conduct`}</h3>
          <p
            className={`mt-4 ${textClass.body_regular_verah}`}
          >{`The Company recognizes that employees play an essential and integral part in the risk management and internal control systems of the corporate structure. During the induction process, employees are required to understand the Company’s objectives, expectations and practices through training and the Compliance Manual.`}</p>
        </div>
      </div>
    </div>
  )
}

export default PageEsg

import { FC } from 'react'
import { textClass } from 'src/components/Text'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import { IconListItemArrow, TopDownArrow, DownTopArrow } from '../Svg/Icon'

gsap.registerPlugin(ScrollToPlugin)

const PageEsg: FC<{ t: any, locale: string }> = ({ t, locale }) => {
  const nav = useRef<HTMLUListElement>(null)
  const sections = useRef(null)

  console.log(t)

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

  const navList = ['Environmental', 'Social', 'Governance']

  return (
    <div className="grid grid-cols-12 gap-x-5 pt-16">
      <ul ref={nav} className="col-span-3 h-[140px] !translate-y-0 md:block hidden">
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
      <div className="md:col-span-9 col-span-full" ref={sections}>
        <div id="environmental" className="esg-section">
          <h2 className={`${textClass.h3_style2}`}>{`Environmental`}</h2>
          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: t.esg_environmental}}></div>
        </div>

        <div id="social" className="esg-section md:pt-16 pt-12">
          <h2 className={`${textClass.h3_style2}`}>{`Social`}</h2>
          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: t.esg_social}}></div>
        </div>

        <div id="Governance" className="esg-section md:pt-16 pt-12">
          <h2 className={`${textClass.h3_style2}`}>{`Governance`}</h2>
          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: t.esg_governance_1}}></div>

          <div className="arta-gradient-border relative mb-12 overflow-hidden">
            <div className="arta-gradient-border-inner"></div>
            <div className=" relative z-20 flex bg-arta-eggshell-100 md:py-12 py-4 md:px-[60px] px-6">
              <div className="relative">
                <div className="arta-gradient-line-left absolute right-0 h-full"></div>
                <div className="md:pr-6 pr-2">
                  <h3 className={`pl-4 text-arta-secondary sm:text-2xl text-sm`}>{`The Board`}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary sm:text-xs text-[1.5em]`}
                  >{`(Risk Management Oversight)`}</p>
                  <ul className={`md:mt-4 mt-2 list-disc pl-4 `}>
                    <li>{`Oversees the Company’s risk management policies and process`}</li>
                    <li className="md:mt-4 mt-1">{`Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems`}</li>
                    <li className="md:mt-4 mt-1">{`Determines the nature and extent of the outstanding emerging and existing risks`}</li>
                  </ul>
                </div>
              </div>

              <div className="relative md:pl-6 pl-2">
                <div>
                  <h3
                    className={`pl-4 text-arta-secondary  sm:text-2xl text-sm`}
                  >{`Head of departments`}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary sm:text-xs text-[1.5em]`}
                  >{`(Risk & Control Monitoring)`}</p>
                  <ul className={`md:mt-4 mt-2 list-disc pl-4 `}>
                    <li className="md:mt-4 mt-1">{`Oversees the Company’s risk management policies and process`}</li>
                    <li className="md:mt-4 mt-1">{`Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems`}</li>
                    <li className="md:mt-4 mt-1">{`Determines the nature and extent of the outstanding emerging and existing risks`}</li>
                  </ul>
                </div>
                <div className="md:mt-11 mt-4">
                  <h3
                    className={`pl-4 text-arta-secondary  sm:text-2xl text-sm`}
                  >{`Business/operating units`}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary sm:text-xs text-[1.5em]`}
                  >{`(Operating Risks & Internal Controls Ownership)`}</p>
                  <ul className={`md:mt-4 mt-2 list-disc pl-4`}>
                    <li className="md:mt-4 mt-1">{`Oversees the Company’s risk management policies and process`}</li>
                    <li className="md:mt-4 mt-1">{`Reviews and ensure that the Group has maintained and carried out effective and appropriate risk management and internal control systems`}</li>
                    <li className="md:mt-4 mt-1">{`Determines the nature and extent of the outstanding emerging and existing risks`}</li>
                  </ul>
                </div>
              </div>

              <div className=" absolute md:top-0 -top-[50px] md:left-1 -left-[12px] md:scale-100 scale-50">
                <p className=" absolute text-lg top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 rotate-90 text-center">
                  Top-down
                </p>
                <TopDownArrow />
              </div>

              <div className=" absolute md:bottom-0 -bottom-[50px] md:scale-100 scale-50 md:right-1 -right-[12px]">
                <p className=" absolute text-lg top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 -rotate-90 text-center">
                  Bottom-up
                </p>
                <DownTopArrow />
              </div>
            </div>
          </div>

          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: t.esg_governance_2}}></div>
        </div>
      </div>
    </div>
  )
}

export default PageEsg

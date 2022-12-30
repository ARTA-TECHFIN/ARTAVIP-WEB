import { FC } from 'react'
import { textClass } from 'src/components/Text'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef, useState } from 'react'
import { IconListItemArrow, TopDownArrow, DownTopArrow } from '../Svg/Icon'
import { useTranslation } from 'next-i18next'
import parse from 'html-react-parser'

gsap.registerPlugin(ScrollToPlugin)

const PageEsg: FC<{ k: any, locale: string }> = ({ k, locale }) => {
  const nav = useRef<HTMLUListElement>(null)
  const [openNavMenu, setOpenNavMenu] = useState(false)
  const sections = useRef(null)
  const { t } = useTranslation('common')

  const goToSection = (index: number) => () => {
    setOpenNavMenu(false)
    const esgSections = document.querySelectorAll('.esg-section')
    gsap.to(window, { duration: 0.7, scrollTo: { y: esgSections[index], offsetY: 130 } })
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

  const navList = [t('investor_relations.environmental'), t('investor_relations.social'), t('investor_relations.governance')]

  return (
    <div className="relative grid grid-cols-12 gap-x-5 pt-16">
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
      <div className="bg-arta-sand-100 absolute lg:hidden top-0 -ml-6 w-[100vw]">
        <p className="text-white text-[1rem] px-6 py-3 cursor-pointer" onClick={() => setOpenNavMenu(!openNavMenu)}>{t('investor_relations.environmental')}</p>
        <svg className="absolute top-5 right-6 pointer-events-none" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2.05092e-08C0.174335 0.030466 0.36004 0.045699 0.557115 0.045699C0.769349 0.045699 0.955054 0.030466 1.11423 2.05092e-08L6.89204 6.67205L12.6143 0C12.728 0.030466 12.8531 0.045699 12.9895 0.045699C13.1335 0.045699 13.7045 0.030466 13.8182 2.05092e-08C12.1796 1.95179 6.89204 8 6.89204 8C6.89204 8 1.59358 1.90812 0 2.05092e-08Z" fill="white"/>
        </svg>
        {
          openNavMenu && (
            <div className="text-white h-auto w-full absolute top-12 bg-arta-sand-100 text-[1rem]">
              <p className="px-6 py-3 cursor-pointer" onClick={goToSection(1)}>{t('investor_relations.social')}</p>
              <p className="px-6 py-3 cursor-pointer" onClick={goToSection(2)}>{t('investor_relations.governance')}</p>
            </div>
          )
        }
      </div>
      <div className="md:col-span-9 col-span-full" ref={sections} onClick={() => setOpenNavMenu(false)}>
        <div id="environmental" className="esg-section">
          <h2 className={`${textClass.h3_style2}`}>{t('investor_relations.environmental')}</h2>
          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: k.esg_environmental}}></div>
        </div>

        <div id="social" className="esg-section md:pt-16 pt-12">
          <h2 className={`${textClass.h3_style2}`}>{t('investor_relations.social')}</h2>
          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: k.esg_social}}></div>
        </div>

        <div id="Governance" className="esg-section md:pt-16 pt-12 mb-16 lg:mb-0">
          <h2 className={`${textClass.h3_style2}`}>{t('investor_relations.governance')}</h2>
          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: k.esg_governance_1}}></div>

          <div className="arta-gradient-border relative mb-12 overflow-hidden font-Verah text-[1rem] leading-[1.5rem] tracking-wide">
            <div className="arta-gradient-border-inner"></div>
            <div className="etg-outline relative z-20 flex flex-col lg:flex-row bg-arta-eggshell-100 md:py-12 py-10 md:px-[60px] pl-16 pr-12">
              <div className="relative mb-6 pb-6 flex-1 lg:mb-0 border-b border-arta-secondary lg:border-none">
                <div className="lg:arta-gradient-line-left absolute right-0 h-full"></div>
                <div className="md:pr-6 pr-2">
                  <h3 className={`pl-4 text-arta-secondary sm:text-2xl text-sm`}>{t("investor_relations.esg_the_board")}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary leading-normal sm:text-xs text-[1.5em]`}
                  >{t("investor_relations.esg_the_board_subtitle")}</p>
                  <div className="module-text-section">
                    {parse(t("investor_relations.esg_the_board_content"))}
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-6 flex-1">
                <div>
                  <h3
                    className={`pl-4 text-arta-secondary  sm:text-2xl text-sm`}
                  >{t("investor_relations.esg_head_of_departments")}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary sm:text-xs text-[1.5em] leading-normal`}
                  >{t("investor_relations.esg_head_of_departments_subtitle")}</p>
                  <div className="module-text-section">
                    {parse(t("investor_relations.esg_head_of_departments_content"))}
                  </div>
                </div>
                <div className="md:mt-11 mt-4">
                  <h3
                    className={`pl-4 text-arta-secondary  sm:text-2xl text-sm`}
                  >{t("investor_relations.esg_unit")}</h3>
                  <p
                    className={`pl-4 !text-arta-secondary sm:text-xs text-[1.5em] leading-normal`}
                  >{t("investor_relations.esg_unit_subtitle")}</p>
                  <div className="module-text-section">
                    {parse(t("investor_relations.esg_unit_content"))}
                  </div>
                </div>
              </div>

              <div className=" absolute top-0 left-1 lg:scale-100 scale-80">
                <p className=" absolute text-lg top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 rotate-90 text-center">
                  {t("investor_relations.esg_top_down")}
                </p>
                <TopDownArrow />
              </div>

              <div className=" absolute bottom-0 lg:scale-100 scale-80 right-1">
                <p className=" absolute text-lg top-2/4 left-2/4 w-[110px] -translate-y-2/4 -translate-x-2/4 -rotate-90 text-center">
                  {t("investor_relations.esg_bottom_up")}
                </p>
                <DownTopArrow />
              </div>
            </div>
          </div>

          <div className={`module-etg-text-section ${textClass.body_regular_verah}`} dangerouslySetInnerHTML={{__html: k.esg_governance_2}}></div>
        </div>
      </div>
    </div>
  )
}

export default PageEsg

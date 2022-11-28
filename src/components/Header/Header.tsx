import Link from 'next/link'
import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/outline'
import MobileNavbar from './MobileNavbar'
import { gsap } from 'gsap'
import { IconListItemArrow } from '../Svg/Icon'
import ArtaLogo from 'src/components/Svg/arta-logo'
import { links } from 'src/domains/links'
import { ButtonAnimated } from '../ButtonAnimated'
import cn from 'classnames'
import { useTranslation } from 'next-i18next';

type menuItemT = {
  title: string
  link: string
}

type pageInfoItemT = {
  pageName: string
  title: string
  paragraph: string
  buttonText: string
  href: string
  pages: menuItemT[]
}

const Header: React.FC<{ textColor?: 'white' | 'brown'; fontSize?: string }> = (props) => {
  const { textColor = 'white', fontSize = '16px' } = props
  const { t } = useTranslation('common')

  const textColorClass = textColor === 'white' ? 'text-arta-snow-100' : 'text-arta-russet-100'
  const bgColorClass = textColor === 'white' ? 'bg-arta-russet-100/90' : 'bg-arta-snow-100/95'
  const borderColorClass = textColor === 'white' ? 'border-arta-snow-100' : 'border-arta-russet-100'

  // For mobile navbar
  const [showMenu, setShowMenu] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false)
  const [activeMobileNavItem, setActiveMobileNavItem] = useState(-1)

  const pageInfoList: pageInfoItemT[] = [
    {
      pageName: t('page_title.about_us'),
      title: t('page_title.about_us'),
      paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
      buttonText: t('page_title.about_us'),
      href: links.about,
      pages: [
        { title: t('about_us.vision_mission'), link: links.aboutVision },
        { title: t('about_us.culture_values'), link: links.aboutCulture },
        { title: t('about_us.leadership'), link: links.aboutLeadership },
        { title: t('about_us.what_is_techfin'), link: links.aboutTechFin },
      ],
    },
    {
      pageName: t('page_title.our_businesses'),
      title: t('page_title.our_businesses'),
      paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
      buttonText: '',
      href: '',
      pages: [
        { title: t('page_title.asset_management'), link: links.businessesAssetManagement },
        { title: t('page_title.investment_banking'), link: links.businessesInvestmentBanking },
        { title: t('page_title.insurance_brokerage'), link: links.businessesInsuranceBrokerage },
        { title: t('page_title.global_markets'), link: links.businessesSecuritiesBrokerage },
        { title: t('page_title.artazine'), link: links.businessesWeb3 },
      ],
    },
    {
      pageName: t('page_title.investor_relations'),
      title: t('page_title.investor_relations'),
      paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
      buttonText: t('page_title.investor_relations'),
      href: links.investor,
      pages: [
        { title: t("investor_relations.announcements_notices"), link: links.investor },
        { title: t("investor_relations.corporate_information"), link: links.investorCorporateInformation },
        { title: t("investor_relations.financial_calendar"), link: links.investorFinCalendar },
        { title: t("investor_relations.esg"), link: links.investorEsg },
      ],
    },
    {
      pageName: t('page_title.media_centre'),
      title: t('page_title.media_centre'),
      paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
      buttonText: 'Media Centre home',
      href: links.media,
      pages: [
        { title: t('page_title.arta_blog'), link: links.media },
        { title: t('page_title.press_release'), link: links.media },
      ],
    },
    {
      pageName: t('page_title.join_us'),
      title: t('page_title.join_us'),
      paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
      buttonText: 'Join Us home',
      href: links.joinUs,
      pages: [
        { title: t('join_us.work_with_arta'), link: `${links.joinUs}#work-with-arta` },
        { title: t('join_us.our_values'), link: `${links.joinUs}#our-value` },
        { title: t('join_us.arta_cares'), link: `${links.joinUs}#arta-care` },
        { title: t('join_us.job_openings'), link: `${links.joinUs}#job-opening` },
      ],
    },
    {
      pageName: t('page_title.contact_us'),
      title: t('page_title.contact_us'),
      paragraph: ``,
      buttonText: '',
      href: links.contact,
      pages: [],
    },
  ]

  const DEFAULT_TAB_INDEX = -1
  const [activeTabIndex, _setActiveTabIndex] = useState(DEFAULT_TAB_INDEX)
  const setActiveTabIndex = (index: number) => {
    _setActiveTabIndex(index)

    if (selectedTab) return
    gsap.fromTo('#fadeIn', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.3 })
  }
  const selectedTab = activeTabIndex === DEFAULT_TAB_INDEX ? null : pageInfoList[activeTabIndex]

  useEffect(() => {
    const changeBackground = () => {
      // home page no bg is needed. It is working on home page because scrolling is not in home page, its window.scrollY is always 0
      // 66 is just a number that feels good, better than 0
      setNavbarBg(window.scrollY >= 66)
    }

    changeBackground()
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <div className="fixed z-50 w-full">
      <div onMouseLeave={() => setActiveTabIndex(DEFAULT_TAB_INDEX)}>
        <header
          className={cn(
            'w-full px-[4em] pt-[6em] transition duration-300 lg:pt-[2.6em] lg:pb-[2em] xl:mx-auto',
            navbarBg && 'lg:bg-white lg:bg-opacity-75'
          )}
        >
          <div className="flex w-full justify-between lg:space-x-6">
            <div className="hidden items-center justify-center space-x-8 lg:flex">
              {pageInfoList.map((page, index) => {
                const selected = index === activeTabIndex
                const ChevronIcon = selected ? ChevronUpIcon : ChevronDownIcon
                return (
                  <div
                    key={index}
                    className={`group z-[4] flex cursor-pointer items-center justify-center opacity-70 transition hover:opacity-100 ${textColorClass}`}
                    onMouseEnter={() => (page.pages.length > 0 ? setActiveTabIndex(index) : null)}
                  >
                    {page.pages.length === 0 && (
                      <Link className="flex items-start" href={page.href}>
                        <span style={{ fontSize: `${fontSize}` }}>{page.title}</span>
                      </Link>
                    )}

                    {page.pages.length > 0 && (
                      <>
                        <span
                          style={{ fontSize: `${fontSize}` }}
                          className={
                            `z-[3] leading-[24px] decoration-arta-sunray-100 underline-offset-[20px] transition group-hover:underline` +
                            (selected ? ' underline' : '')
                          }
                        >
                          {page.pageName}
                        </span>
                        <ChevronIcon className="z-[3] ml-1 h-4 w-4 transition group-hover:text-arta-sunray-100" />
                      </>
                    )}
                  </div>
                )
              })}
            </div>
            <div
              className="flex h-[22px] w-[26px] cursor-pointer flex-col justify-between lg:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span
                className={cn(
                  'h-[2px] w-full',
                  textColor == 'white' ? 'bg-[#F4F1E1]' : 'bg-[#593725]'
                )}
              ></span>
              <span
                className={cn(
                  'h-[2px] w-full',
                  textColor == 'white' ? 'bg-[#F4F1E1]' : 'bg-[#593725]'
                )}
              ></span>
              <span
                className={cn(
                  'h-[2px] w-full',
                  textColor == 'white' ? 'bg-[#F4F1E1]' : 'bg-[#593725]'
                )}
              ></span>
            </div>
            <div className="z-[1] text-right">
              <Link href="/">
                <div className="relative h-[32px] w-[78.67px] cursor-pointer opacity-100 transition hover:opacity-100 md:h-auto md:w-auto">
                  <ArtaLogo className={`${textColorClass} h-full w-full md:h-auto md:w-auto`} />
                </div>
              </Link>
            </div>
          </div>

          <div
            className={
              `absolute top-0 left-0 min-h-[100px] w-full ${bgColorClass} py-12 px-[4em] pt-[130px] ${textColorClass} transition-all duration-300 ease-in-out xl:mx-auto` +
              (selectedTab ? ' translate-y-0' : ' pointer-events-none -translate-y-full')
            }
          >
            <div className="flex max-w-main-contain " id="fadeIn">
              {selectedTab && (
                <div className="flex space-x-8 2xl:w-3/4">
                  <div className="flex max-w-[400px] flex-col space-y-6">
                    <h6 className="font-Verah text-2xl">{selectedTab.title}</h6>
                    <p className="font-Neue text-[14px] leading-[20px]">{selectedTab.paragraph}</p>

                    {selectedTab.buttonText.length > 0 && (
                      <ButtonAnimated
                        href={selectedTab.href}
                        as="a"
                        className={`w-[260px] p-4 px-6 py-3 font-medium shadow-md ${textColorClass} ${borderColorClass}`}
                        borderWidth={2}
                      >
                        {selectedTab.buttonText}
                      </ButtonAnimated>
                    )}
                  </div>
                  <div className="flex flex-col">
                    {selectedTab.pages.map((item, index) => (
                      <li
                        key={index}
                        style={{ fontSize: `${fontSize}` }}
                        className={`group relative -translate-x-4 cursor-pointer list-none py-1 px-2 leading-[24px] opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100`}
                      >
                        <Link className="flex items-start pl-5" href={item.link}>
                          <IconListItemArrow
                            fill={textColor === 'white' ? '#F4F1E1' : '#2E1605'}
                            className=" ease mr-2 mt-1 hidden h-4 w-4 -translate-x-full duration-300 group-hover:block group-hover:translate-x-0"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              )}
              <div></div>
            </div>
          </div>

          <div>
            {showMenu && (
              <div className="absolute top-0 left-0 z-[801] flex min-h-[100vh] w-full flex-col bg-arta-russet-100 px-[4em] pt-[6em] lg:pt-[2.8em] ">
                <div className="flex items-start justify-between">
                  <div
                    className="h-6 w-6 cursor-pointer text-arta-eggshell-100"
                    onClick={() => {
                      setShowMenu(!showMenu)
                    }}
                  >
                    <XIcon className="h-6 w-6" />
                  </div>
                  <div className="relative h-[32px] w-[78.67px] cursor-pointer opacity-100 transition hover:opacity-100 md:h-auto md:w-auto">
                    <img src="/images/Group.png" alt="logo" className=" object-contain" />
                  </div>
                </div>
                <div className="mt-8 text-white ">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col space-y-8">
                      {pageInfoList.map((item, index) => (
                        <div key={index}>
                          <MobileNavbar
                            item={item}
                            expand={activeMobileNavItem === index}
                            index={index}
                            setActiveMobileNavItem={setActiveMobileNavItem}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header

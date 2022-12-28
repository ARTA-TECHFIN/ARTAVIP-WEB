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
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import hoverMenuJson from 'apidata/hover-menu.json'

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

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/hover-menu-description`)
  const data = await res.json()
  return data
}

const Header: React.FC<{
  textColor?: 'white' | 'black' | 'brown'
  fontSize?: string
  src?: string
}> = (props) => {
  const { textColor = 'white', fontSize = '16px', src = 'default' } = props
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router

  const [headerData, setHeaderData] = useState({
    about_us: '',
    investor_relation: '',
    join_us: '',
    media_centre: '',
    our_business: '',
  })

  const textColorClass =
    textColor == 'black'
      ? 'text-arta-black'
      : textColor === 'white'
      ? 'text-arta-snow-100'
      : 'text-arta-russet-100'
  const bgColorClass =
    textColor == 'black'
      ? 'bg-white'
      : textColor === 'white'
      ? 'bg-arta-russet-100/90'
      : 'bg-arta-snow-100/95'
  const borderColorClass =
    textColor == 'black'
      ? 'border-arta-black'
      : textColor === 'white'
      ? 'border-arta-snow-100'
      : 'border-arta-russet-100'
  const mobileMenuBg = textColor == 'black' ? 'bg-white' : 'bg-arta-russet-100'

  // For mobile navbar
  const [showMenu, setShowMenu] = useState(false)
  const [navbarBg, setNavbarBg] = useState(false)
  const [activeMobileNavItem, setActiveMobileNavItem] = useState(-1)
  const [scrollDir, setScrollDir] = useState('scrolling down')

  const pageInfoList: pageInfoItemT[] = [
    {
      pageName: t('page_title.about_us'),
      title: t('page_title.about_us'),
      paragraph: headerData['about_us'],
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
      paragraph: headerData['our_business'],
      buttonText: '',
      href: '',
      pages: [
        { title: t('page_title.asset_management'), link: links.businessesAssetManagement },
        { title: t('page_title.investment_banking'), link: links.businessesInvestmentBanking },
        { title: t('page_title.insurance_brokerage'), link: links.businessesInsuranceBrokerage },
        { title: t('page_title.global_markets'), link: links.businessesSecuritiesBrokerage },
        // { title: t('page_title.esg_advisory'), link: links.businessesEsg },
        { title: t('page_title.artazine'), link: links.businessesArtazine },
      ],
    },
    {
      pageName: t('page_title.investor_relations'),
      title: t('page_title.investor_relations'),
      paragraph: headerData['investor_relation'],
      buttonText: t('page_title.investor_relations'),
      href: links.investor,
      pages: [
        { title: t('investor_relations.announcements_notices'), link: `${links.investor}#content` },
        {
          title: t('investor_relations.corporate_information'),
          link: `${links.investorCorporateInformation}#content`,
        },
        {
          title: t('investor_relations.financial_calendar'),
          link: `${links.investorFinCalendar}#content`,
        },
        { title: t('investor_relations.esg'), link: `${links.investorEsg}#content` },
      ],
    },
    {
      pageName: t('page_title.media_centre'),
      title: t('page_title.media_centre'),
      paragraph: headerData['media_centre'],
      buttonText: t('page_title.media_centre'),
      href: links.media,
      pages: [
        { title: t('page_title.arta_blog'), link: `${links.media}#list` },
        { title: t('page_title.press_release'), link: `${links.mediaPress}#list` },
      ],
    },
    {
      pageName: t('page_title.join_us'),
      title: t('page_title.join_us'),
      paragraph: headerData['join_us'],
      buttonText: t('page_title.join_us'),
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
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const changeBackground = () => {
      // home page no bg is needed. It is working on home page because scrolling is not in home page, its window.scrollY is always 0
      // 66 is just a number that feels good, better than 0
      if (window) setNavbarBg(window?.scrollY >= 66 || false)

      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    changeBackground()
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [scrollDir])

  useEffect(() => {
    const g = (pageData: any, keyWithoutLang: string) =>
      `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
    const fetchData = async () => {
      const useLocalCms = process.env.NEXT_PUBLIC_USE_LOCAL_CMS_DATA === 'true'
      const result = useLocalCms ? hoverMenuJson : await fetchCmsData()

      if (result.data?.attributes) {
        setHeaderData({
          about_us: g(result, 'about_us'),
          investor_relation: g(result, 'investor_relation'),
          join_us: g(result, 'join_us'),
          media_centre: g(result, 'media_centre'),
          our_business: g(result, 'our_business'),
        })
      }
    }

    fetchData()
  }, [locale])

  return (
    <div
      className={cn(
        'fixed top-0 z-50 w-full opacity-100 transition-all duration-500',
        scrollDir == 'scrolling down' && '-top-32 opacity-0'
      )}
    >
      <div onMouseLeave={() => setActiveTabIndex(DEFAULT_TAB_INDEX)}>
        <header
          className={cn(
            'mt-0 w-full px-[4em] py-[3em] transition duration-300 lg:pt-[2.6em] lg:pb-[2em] xl:mx-auto',
            navbarBg &&
              (textColor === 'black' ? 'bg-white' : 'bg-arta-dark-brown') + ' bg-opacity-70'
          )}
        >
          <div className="flex w-full items-center justify-between lg:space-x-6">
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
                      <Link title={page.title} className="flex items-start" href={page.href}>
                        <span style={{ fontSize: `${fontSize}` }}>{page.title}</span>
                      </Link>
                    )}

                    {page.pages.length > 0 && (
                      <>
                        <span
                          style={{ fontSize: `${fontSize}` }}
                          className={
                            `z-[3] leading-[24px] ${
                              textColor === 'black'
                                ? 'decoration-arta-black'
                                : 'decoration-arta-sunray-100'
                            } underline-offset-[20px] transition group-hover:underline` +
                            (selected ? ' underline' : '')
                          }
                        >
                          {page.pageName}
                        </span>
                        <ChevronIcon
                          className={`z-[3] ml-1 h-4 w-4 transition ${
                            textColor === 'black'
                              ? 'group-hover:text-arta-black'
                              : 'group-hover:text-arta-sunray-100'
                          }`}
                        />
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
                  textColor == 'white'
                    ? 'bg-[#F4F1E1]'
                    : textColor == 'black'
                    ? 'bg-arta-black'
                    : 'bg-[#593725]'
                )}
              ></span>
              <span
                className={cn(
                  'h-[2px] w-full',
                  textColor == 'white'
                    ? 'bg-[#F4F1E1]'
                    : textColor == 'black'
                    ? 'bg-arta-black'
                    : 'bg-[#593725]'
                )}
              ></span>
              <span
                className={cn(
                  'h-[2px] w-full',
                  textColor == 'white'
                    ? 'bg-[#F4F1E1]'
                    : textColor == 'black'
                    ? 'bg-arta-black'
                    : 'bg-[#593725]'
                )}
              ></span>
            </div>
            <div className="z-[1] text-right pr-[2px]">
              <Link title={'Arta TechFin'} href="/">
                <div className="relative h-[32px] w-[81px] cursor-pointer opacity-100 transition hover:opacity-100 md:h-auto md:w-auto">
                  <ArtaLogo className={`${textColorClass} h-full w-full md:h-auto md:w-auto`} />
                </div>
              </Link>
            </div>
          </div>

          <div
            className={
              `absolute top-0 left-0 min-h-[100px] w-full ${bgColorClass} py-12 px-[4em] ${
                src == 'homepage' ? 'pt-[calc(2.6em+88px)]' : 'pt-[calc(2.6em+72px)]'
              } ${textColorClass} transition-all duration-300 ease-in-out xl:mx-auto` +
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
                        className={`group relative -translate-x-4 cursor-pointer list-none py-1 px-2 ${
                          src == 'homepage' ? 'leading-[' + fontSize + ']' : 'leading-[24px]'
                        } opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100`}
                      >
                        <Link className="flex items-start pl-5" href={item.link}>
                          <IconListItemArrow
                            fill={
                              textColor === 'white'
                                ? '#F4F1E1'
                                : textColor === 'black'
                                ? '#000000'
                                : '#2E1605'
                            }
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
              <div
                className={`absolute top-0 left-0 z-[801] flex min-h-[100vh] w-full flex-col ${mobileMenuBg} px-[4em] pt-[6em] lg:pt-[2.8em]`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`h-8 w-8 cursor-pointer pr-2 pb-2 ${
                      textColor == 'black' ? 'text-arta-black' : 'text-arta-eggshell-100'
                    }`}
                    onClick={() => {
                      setShowMenu(!showMenu)
                    }}
                  >
                    <XIcon className="h-6 w-6" />
                  </div>
                  <div className="relative h-[32px] w-[81px] cursor-pointer opacity-100 transition hover:opacity-100 md:h-auto md:w-auto">
                    <Link title="Arta TechFin" href="/">
                      <img
                        src={`/images/${
                          textColor == 'black' ? 'arta-logo_black' : 'arta-logo'
                        }.svg`}
                        alt="Arta TechFin"
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
                <div className={`mt-8 ${textColorClass} `}>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex w-full flex-col space-y-8">
                      {pageInfoList.map((item, index) => (
                        <div key={index}>
                          <MobileNavbar
                            item={item}
                            expand={activeMobileNavItem === index}
                            index={index}
                            setActiveMobileNavItem={setActiveMobileNavItem}
                            textColor={textColor}
                            setShowMenu={setShowMenu}
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

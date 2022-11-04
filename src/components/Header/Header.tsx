import Link from 'next/link'
import React, { useState } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/outline'
import MobileNavbar from './MobileNavbar'
import { gsap } from 'gsap'
import ClickAwayListener from 'react-click-away-listener'
import { IconListItemArrow } from '../Svg/Icon'
import ArtaLogo from 'src/components/Svg/arta-logo'
import { links } from 'src/domains/links'
import { ButtonAnimated } from '../ButtonAnimated'

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

const pageInfoList: pageInfoItemT[] = [
  {
    pageName: 'About Us',
    title: 'About Us',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'About Us home',
    href: links.about,
    pages: [
      { title: 'Vision and Mission', link: links.aboutVision },
      { title: 'Culture and Values', link: links.aboutCulture },
      { title: 'Leadership', link: links.aboutLeadership },
      { title: 'What is TechFin', link: links.aboutTechFin },
    ],
  },
  {
    pageName: 'Our Businesses',
    title: 'Our Businesses',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Our Businesses home',
    href: links.businesses,
    pages: [
      { title: 'Asset Management', link: links.businesses },
      { title: 'Investment Banking', link: links.businesses },
      { title: 'Insurance Brokerage', link: links.businesses },
      { title: 'Securities Brokerage', link: links.businessesSecurities },
      { title: 'Artazine', link: links.businessesWeb3 },
    ],
  },
  {
    pageName: 'Investor Relations',
    title: 'Investor Relations',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Investor Relations',
    href: links.investor,
    pages: [
      { title: 'Announcements and notices', link: links.investor },
      { title: 'Financial Reports', link: links.investorFinReport },
      { title: 'Financial Calender', link: links.investorFinCalendar },
      { title: 'ESG', link: links.investorEsg },
    ],
  },
  {
    pageName: 'Media Centre',
    title: 'Media Centre',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Media Centre home',
    href: links.media,
    pages: [
      { title: 'ARTA Blog', link: links.media },
      { title: 'Press Release', link: links.media },
      { title: 'Media Enquiry', link: links.media },
    ],
  },
  {
    pageName: 'Contact Us',
    title: 'Contact Us',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Contact Us home',
    href: links.contact,
    pages: [
      { title: 'Work with ARTA', link: links.contact },
      { title: 'Job Openings', link: links.contact },
      { title: 'Our Office', link: links.contact },
    ],
  },
]

const Header: React.FC<{ textColor?: 'white' | 'brown' }> = (props) => {
  const { textColor = 'white' } = props
  const textColorClass = textColor === 'white' ? 'text-arta-snow-100' : 'text-arta-russet-100'
  const bgColorClass = textColor === 'white' ? 'bg-arta-russet-100/90' : 'bg-arta-snow-100/95'
  const borderColorClass = textColor === 'white' ? 'border-arta-snow-100' : 'border-arta-russet-100'

  // For mobile navbar
  const [showMenu, setShowMenu] = useState(false)

  const DEFAULT_TAB_INDEX = -1
  const [activeTabIndex, _setActiveTabIndex] = useState(DEFAULT_TAB_INDEX)
  const setActiveTabIndex = (index: number) => {
    _setActiveTabIndex(index)
    gsap.fromTo('#fadeIn', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.3 })
  }
  const selectedTab = activeTabIndex === DEFAULT_TAB_INDEX ? null : pageInfoList[activeTabIndex]

  return (
    <div className="fixed z-50 w-full">
      <ClickAwayListener onClickAway={() => setActiveTabIndex(DEFAULT_TAB_INDEX)}>
        <header className="w-full px-[4em] pt-[6em] lg:pt-[2.8em] xl:mx-auto">
          <div className="flex w-full justify-between lg:space-x-6">
            <div className="hidden items-center justify-center space-x-8 lg:flex">
              {pageInfoList.map((page, index) => {
                const selected = index === activeTabIndex
                const ChevronIcon = selected ? ChevronUpIcon : ChevronDownIcon
                return (
                  <div
                    key={index}
                    className={`group z-[4] flex cursor-pointer items-center justify-center opacity-70 transition hover:opacity-100 ${textColorClass}`}
                    onClick={() => setActiveTabIndex(selected ? DEFAULT_TAB_INDEX : index)}
                  >
                    <span
                      className={
                        'z-[3] text-[1em] leading-[24px] decoration-arta-sunray-100 underline-offset-[20px] transition group-hover:underline' +
                        (selected ? ' underline' : '')
                      }
                    >
                      {page.pageName}
                    </span>
                    <ChevronIcon className="z-[3] ml-1 h-4 w-4 transition group-hover:text-arta-sunray-100" />
                  </div>
                )
              })}
            </div>
            <div
              className="flex cursor-pointer items-center justify-center p-2 text-arta-eggshell-100 lg:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img src="/images/Group 1.png" alt="menu" />
            </div>
            <div className="z-[1] text-right">
              <Link href="/">
                <div className="relative cursor-pointer opacity-100 transition hover:opacity-100">
                  <ArtaLogo className={textColorClass} />
                </div>
              </Link>
            </div>
          </div>

          <div
            className={
              `absolute top-0 left-0 min-h-[100px] w-full ${bgColorClass} py-12 px-24 pt-[130px] ${textColorClass} transition-all duration-300 ease-in-out xl:mx-auto` +
              (selectedTab ? ' translate-y-0' : ' pointer-events-none -translate-y-full')
            }
          >
            <div className="flex max-w-main-contain xl:mx-auto" id="fadeIn">
              {selectedTab && (
                <div className="flex justify-center space-x-8 2xl:w-3/4">
                  <div className="flex max-w-[400px] flex-col space-y-10">
                    <h6 className="font-Verah text-2xl">{selectedTab.title}</h6>
                    <p className="font-Neue text-[14px] leading-[20px]">{selectedTab.paragraph}</p>

                    <ButtonAnimated
                      href={selectedTab.href}
                      as="a"
                      className={`w-[260px] p-4 px-6 py-3 font-medium shadow-md ${textColorClass} ${borderColorClass}`}
                      borderWidth={2}
                    >
                      {selectedTab.buttonText}
                    </ButtonAnimated>
                  </div>
                  <div className="flex flex-col">
                    {selectedTab.pages.map((item, index) => (
                      <li
                        key={index}
                        className="group relative -translate-x-4 cursor-pointer list-none py-2 px-2 text-[16px] leading-[24px] opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100"
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
              <div className="absolute top-0 left-0 z-[801] flex min-h-[100vh] w-full flex-col bg-arta-russet-100 py-8 px-6 md:py-12 md:px-24">
                <div className="flex items-center justify-between">
                  <div
                    className="h-6 w-6 text-arta-eggshell-100"
                    onClick={() => {
                      setShowMenu(!showMenu)
                    }}
                  >
                    <XIcon className="h-6 w-6" />
                  </div>
                  <div className="relative cursor-pointer opacity-100 transition hover:opacity-100">
                    <img src="/images/Group.png" alt="logo" className=" object-contain" />
                  </div>
                </div>
                <div className="mt-8 text-white ">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col space-y-8">
                      {pageInfoList.map((item, index) => (
                        <div key={index}>
                          <MobileNavbar item={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </ClickAwayListener>
    </div>
  )
}

export default Header

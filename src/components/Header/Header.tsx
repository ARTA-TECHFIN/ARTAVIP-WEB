import Link from 'next/link'
import React, { useState } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/outline'
import MobileNavbar from './MobileNavbar'
import { gsap } from 'gsap'
import ClickAwayListener from 'react-click-away-listener'
import { IconListItemArrow } from '../Icon'
import ArtaLogo from 'src/components/Svg/arta-logo';

type pageInfoItemT = {
  pageName: string
  title: string
  paragraph: string
  buttonText: string
  href: string
  pages: string[]
}

const pageInfoList: pageInfoItemT[] = [
  {
    pageName: 'About Us',
    title: 'About Us',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'About Us home',
    href: '/about',
    pages: ['Vision and Mission', 'Culture and Values', 'Leadership', 'What is TechFin'],
  },
  {
    pageName: 'Our Businesses',
    title: 'Our Businesses',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Our Businesses home',
    href: '/businesses',
    pages: [
      'Asset Management',
      'Investment Banking',
      'Insurance Brokerage',
      'Securities Brokerage',
      'Artazine',
    ],
  },
  {
    pageName: 'Investor Relations',
    title: 'Investor Relations',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Investor Relations',
    href: '/investor-relations',
    pages: ['Announcements and notices', 'Financial Reports', 'Financial Calender', 'ESG'],
  },
  {
    pageName: 'Media Centre',
    title: 'Media Centre',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Media Centre home',
    href: '/media-centre',
    pages: ['ARTA Blog', 'Press Release', 'Media Enquiry'],
  },
  {
    pageName: 'Contact Us',
    title: 'Contact Us',
    paragraph: `ARTA TechFin is determined to create the fairest, most transparent, and open markets in the world. We carry this out every day by providing clients with a variety of financial services.`,
    buttonText: 'Contact Us home',
    href: '/contact',
    pages: ['Work with ARTA', 'Job Openings', 'Our Office'],
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
    <div className="fixed z-10 w-full">
      <ClickAwayListener onClickAway={() => setActiveTabIndex(DEFAULT_TAB_INDEX)}>
        <header className="w-full pt-[6em] lg:pt-[2.8em] px-[4em] xl:mx-auto">
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

                    <Link href={selectedTab.href} passHref>
                      <a
                        className={`group relative inline-flex w-[260px] items-center justify-center overflow-hidden rounded-full border-2 ${borderColorClass} p-4 px-6 py-3 font-medium ${textColorClass} shadow-md transition duration-300 ease-out`}
                      >
                        <span
                          className={`ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] font-Neue text-[16px] leading-[24px] ${textColorClass} duration-300 group-hover:translate-x-0`}
                        >
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                          <span>{selectedTab.buttonText}</span>
                        </span>
                        <span
                          className={`ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] ${textColorClass} transition-all duration-300 group-hover:translate-x-full`}
                        >
                          {selectedTab.buttonText}
                        </span>
                        <span className="invisible relative">{selectedTab.buttonText}</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    {selectedTab.pages.map((item, index) => (
                      <li
                        key={index}
                        className="group relative -translate-x-4 cursor-pointer list-none py-2 px-2 text-[16px] leading-[24px] opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100"
                      >
                        <span className="flex items-start pl-5">
                          <IconListItemArrow
                            fill={textColor === 'white' ? '#F4F1E1' : '#2E1605'}
                            className=" ease mr-2 mt-1 hidden h-4 w-4 -translate-x-full duration-300 group-hover:block group-hover:translate-x-0"
                          />
                          <span>{item}</span>
                        </span>
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

import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { FC } from 'react'
import { HeroBanner } from '../HeroBanner'

import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'

import {mediaCmsT} from 'src/domains/media'

const TABS = {
  Blog: 'Blog',
  Press_Releases: 'Press_Releases',
} as const

type tabsT = keyof typeof TABS

const tabInfoMap = {
  [TABS.Blog]: { title: 'Arta Blog', link: links.mediaBlog },
  [TABS.Press_Releases]: { title: 'Press Releases', link: links.mediaPress },
}

const tabList = Object.values(tabInfoMap)

type propsT = {
  cms: mediaCmsT
  tabType: tabsT
  children: React.ReactNode
}


const PageMediaPage: FC<propsT> = ({ cms, tabType, children })  => {
  const tabInfo = tabInfoMap[tabType]

  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-eggshell-100 text-arta-sand-100 md:pb-[150px] pb-12">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
        />
          <div className="arta-container mx-auto">
            <div className='overflow-auto arta-hide-scrollbar md:mx-0 -mx-6 py-16 '>
                <TabBar
                  tabs={tabList.map((t) => t.title)}
                  selectedTab={tabInfo.title}
                  setSelectedTab={(_, index) =>
                    Router.push(tabList[index].link, undefined, { scroll: false })
                  }
                />
              </div>
          </div>
            {children}
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export { TABS }


export default PageMediaPage

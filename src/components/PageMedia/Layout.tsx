import { getMediaCmsT } from 'src/domains/media'
import { Seo } from 'src/components/Seo'
import Header from 'src/components/Header/Header'
import { HeroBanner } from 'src/components/HeroBanner'
import Footer from 'src/components/Footer'

import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'

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

const Layout = (props: { cms: getMediaCmsT; children: React.ReactNode }) => {
  const { cms, children } = props
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-eggshell-100 pb-12 text-arta-sand-100 md:pb-[150px]">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
        />
        {children}
      </main>
      <Footer textColor="brown" />
    </>
  )
}

const Tab = (props: { tabType: tabsT }) => {
  const tabInfo = tabInfoMap[props.tabType]

  return (
    <div className="arta-container mx-auto">
      <div className="arta-hide-scrollbar -mx-6 overflow-auto py-16 md:mx-0 ">
        <TabBar
          tabs={tabList.map((t) => t.title)}
          selectedTab={tabInfo.title}
          setSelectedTab={(_, index) =>
            Router.push(tabList[index].link, undefined, { scroll: false })
          }
        />
      </div>
    </div>
  )
}

export { Layout as MediaLayout, Tab as MediaTab, TABS as MediaTABS }

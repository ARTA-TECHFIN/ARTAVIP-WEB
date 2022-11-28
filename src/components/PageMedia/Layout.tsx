import { Seo } from 'src/components/Seo'
import Header from 'src/components/Header/Header'
import { HeroBanner } from 'src/components/HeroBanner'
import Footer from 'src/components/Footer'

import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'

import { useTranslation } from 'next-i18next'

const TABS = {
  Blog: 'Blog',
  Press_Releases: 'Press_Releases',
} as const

type tabsT = keyof typeof TABS

const Layout = (props: { k: any; children: React.ReactNode, tabType: tabsT }) => {
  const { t } = useTranslation('common')
  const { k, children } = props

  const tabInfoMap = {
    [TABS.Blog]: { title: t('page_title.arta_blog'), link: links.mediaBlog },
    [TABS.Press_Releases]: { title: t('page_title.press_release'), link: links.mediaPress },
  }
  const tabList = Object.values(tabInfoMap)
  const tabInfo = tabInfoMap[props.tabType]

  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-eggshell-100 pb-12 text-arta-sand-100 md:pb-[150px]">
        <HeroBanner
          title={t("page_title.media_centre")}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
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
        {children}
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export { Layout as MediaLayout, TABS as MediaTABS }

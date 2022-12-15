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

const Layout = (props: {
  seo: any
  cms: any
  children: React.ReactNode
  tabType?: tabsT
  gaLog?: any
  gaObj?: {
    event_name: string
    content: {
      Content: string
    }
  }
  gaType?: string
}) => {
  const { t } = useTranslation('common')
  const { seo, cms, children, gaLog, gaObj, gaType } = props
  const tabInfoMap = {
    [TABS.Blog]: {
      title: t('page_title.arta_blog'),
      link: links.mediaBlog,
      value: t('page_title.arta_blog'),
    },
    [TABS.Press_Releases]: {
      title: t('page_title.press_release'),
      link: links.mediaPress,
      value: t('page_title.press_release'),
    },
  }
  const tabList = Object.values(tabInfoMap)
  const tabInfo = tabInfoMap[props.tabType || 'Blog']

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ga={gaLog ? gaLog : ''}
        gaObj={gaObj}
        gaType={gaType}
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-eggshell-100 pb-28 text-arta-sand-100 md:pb-[150px]">
        <HeroBanner
          title={t('page_title.media_centre')}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
        />
        {props.tabType && (
          <div className="arta-container mx-auto" id="list">
            <div className="arta-hide-scrollbar -mx-6 overflow-auto py-10 md:mx-0 lg:py-16 ">
              <TabBar
                className="justify-center"
                tabs={tabList.map((t) => {
                  return {
                    label: t.title,
                    value: t.value,
                  }
                })}
                selectedTab={tabInfo.title}
                setSelectedTab={(_, index) =>
                  Router.push(tabList[index].link, undefined, { scroll: false })
                }
              />
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export { Layout as MediaLayout, TABS as MediaTABS }

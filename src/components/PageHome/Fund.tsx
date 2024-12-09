/* eslint-disable */
import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { reportCmsT } from 'src/domains/investor'
import { FC } from 'react'
import {TabBar2} from 'src/components/TabBar2'
import { links } from 'src/domains/links'
import Router from 'next/router'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import homepageJson from 'apidata/homepage.json'
import Footer from 'src/components/Footer'

const TABS = {
  aspiring: 'aspiring',
  riverchain: 'riverchain',
  advisor: 'advisor',
  aaml: 'aaml',
} as const



type tabsT = keyof typeof TABS

type propsT = {
  data: any
  tabType: tabsT
  hideTab?: boolean
  simpleHeader?: boolean
  gaLog?: boolean
  children: React.ReactNode
}

const Onboarding: FC<propsT> = ({
  tabType,
  data,
  hideTab = false,
  children,
  gaLog = false,
}) => {
  const homeData = homepageJson
  
  const { locale } = useRouter()
  const router = useRouter()
  const z = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  const tabInfoMap = {
    [TABS.aspiring]: {
      title: data.title.sub_title_1,
      link: data.title.link_1,
      value: 'aspiring',
    },
    [TABS.riverchain]: {
      title: data.title.sub_title_2,
      link: data.title.link_2,
      value: 'riverchain',
    },
    [TABS.advisor]: {
      title: data.title.sub_title_3,
      link: data.title.link_3,
      value: 'advisor',
    },
    [TABS.aaml]: {
      title: data.title.sub_title_4,
      link: data.title.link_4,
      value: 'aaml',
    },
  }
  const tabList = Object.values(tabInfoMap)

  useEffect(() => {
    if (tabType === 'aspiring' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'riverchain' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth - 100
    }

    if (tabType === 'advisor' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }
    
    if (tabType === 'aaml' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

  }, [])

  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`Home | Arta AM`}
        description=''
        keywords=''
        ga="Homepage"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[220px]" />
      <main className="flex flex-col">
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[106px] " id="content">
          <div className="arta-container mx-auto homes_fund">
              <div className='text-arta-sand-100 pt-2 top-text'>{data.title.header}</div>
            {!hideTab && (
              <div id="tab" className="arta-hide-scrollbar -mx-6 overflow-scroll md:mx-0">
                <TabBar2
                  className={`${locale == 'en'
                    ? 'min-w-[750px] lg:min-w-[650px]'
                    : 'min-w-[550px] lg:min-w-[500px]'
                    } pl-6`}
                  tabs={tabList.map((t) => {
                    return { label: t.title, value: t.value}
                  })}
                  selectedTab={tabType}
                  setSelectedTab={(_, index) =>
                    Router.push(tabList[index].link, undefined, { scroll: false })
                  }
                />
              </div>
            )}
            {children}
            <div className='small-text pt-4 text-arta-sand-100'>{data.title.remark}</div>
          </div>
        </div>
      </main>
      <Footer textColor="white" />
    </>
  )
}

export { TABS }
export default Onboarding

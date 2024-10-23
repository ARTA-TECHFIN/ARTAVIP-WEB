/* eslint-disable */
import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { reportCmsT } from 'src/domains/investor'
import { FC } from 'react'
import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import homepageJson from 'apidata/homepage.json'

const TABS = {
  person: 'person',
  company: 'company',
  institution: 'institution',
} as const

type tabsT = keyof typeof TABS

type propsT = {
  tabType: tabsT
  hideTab?: boolean
  simpleHeader?: boolean
  gaLog?: boolean
  children: React.ReactNode
}

const HomeLayout: FC<propsT> = ({
  tabType,
  hideTab = false,
  children,
  gaLog = false,
}) => {
  const homeData = homepageJson
  const { locale } = useRouter()
  const tabInfoMap = {
    [TABS.person]: {
      title: homeData.person,
      link: links.home,
      value: 'person',
    },
    [TABS.company]: {
      title: homeData.company,
      link: links.company,
      value: 'company',
    },
    [TABS.institution]: {
      title: homeData.institution,
      link: links.institution,
      value: 'institution',
    },
  }
  const tabList = Object.values(tabInfoMap)
  const router = useRouter()
  useEffect(() => {
    if (tabType === 'person' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'company' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth - 100
    }

    if (tabType === 'institution' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

  }, [])

  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`Home | Arta TechFin`}
        description=''
        keywords=''
        ga="Homepage"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[220px]" />
      <main className="flex flex-col">
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[306px] " id="content">
          <div className="arta-container mx-auto homes">
              <div className='text-arta-sand-100 pt-2 top-text'>{homeData.t0}</div>
              <div className='small-text pt-4 text-arta-sand-100'>
                <li><button onClick={() => {router.push(`${homeData.t5_link}`)}}>{homeData.t5}</button></li>
                <li><button onClick={() => {router.push(`${homeData.t1_link}`)}}>{homeData.t1}</button></li>
                <li><button onClick={() => {router.push(`${homeData.t4_link}`)}}>{homeData.t4}</button></li>
              </div>
              <div className='text-arta-sand-100 pt-2 top-text'>{homeData.t3}</div>
            {!hideTab && (
              <div id="tab" className="arta-hide-scrollbar -mx-6 overflow-scroll md:mx-0">
                <TabBar
                  className={`${locale == 'en'
                    ? 'min-w-[750px] lg:min-w-[650px]'
                    : 'min-w-[550px] lg:min-w-[500px]'
                    } pl-6`}
                  tabs={tabList.map((t) => {
                    return { label: t.title, value: t.value }
                  })}
                  selectedTab={tabType}
                  setSelectedTab={(_, index) =>
                    Router.push(tabList[index].link, undefined, { scroll: false })
                  }
                />
              </div>
            )}
            {children}
            <div className='small-text pt-4 text-arta-sand-100'>{homeData.b0}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export { TABS }
export default HomeLayout

/* eslint-disable */
import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { Seo } from 'src/components/Seo'
import { FC } from 'react'
import { TabBar } from '../TabBar'
import Router from 'next/router'
import { useRouter } from 'next/router'
import Footer from 'src/components/Footer'

const TABS = {
  person: 'person',
  company: 'company',
  institution: 'institution',
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
  
  const { locale } = useRouter()


  const tabInfoMap = {
    [TABS.person]: {
      title: data.title.sub_title_1,
      link: data.title.link_1,
      value: 'person',
    },
    [TABS.company]: {
      title: data.title.sub_title_2,
      link: data.title.link_2,
      value: 'company',
    },
    [TABS.institution]: {
      title: data.title.sub_title_3,
      link: data.title.link_3,
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
        title={`Home | Arta VIP`}
        description=''
        keywords=''
        ga="Homepage"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[220px]" />
      <main className="flex flex-col">
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[106px] " id="content">
          <div className="arta-container mx-auto homes">
              <div className='text-arta-sand-100 pt-2 top-text'>{data.title.header}</div>
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

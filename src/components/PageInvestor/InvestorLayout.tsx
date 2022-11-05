import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'

import { getReportCms, reportCmsT } from 'src/domains/investor'
import { FC } from 'react'
import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'

const TABS = {
  announcement: 'announcement',
  financial_report: 'financial_report',
  financial_calendar: 'financial_calendar',
  esg: 'esg',
} as const

type tabsT = keyof typeof TABS

const tabInfoMap = {
  [TABS.announcement]: { title: 'Announcements & Notices', link: links.investor },
  [TABS.financial_report]: { title: 'Financial Reports', link: links.investorFinReport },
  [TABS.financial_calendar]: { title: 'Financial Calendar', link: links.investorFinCalendar },
  [TABS.esg]: { title: 'ESG', link: links.investorEsg },
}

const tabList = Object.values(tabInfoMap)

type propsT = {
  cms: reportCmsT
  tabType: tabsT
  children: React.ReactNode
}

const InvestorLayout: FC<propsT> = ({ cms, tabType, children }) => {
  const tabInfo = tabInfoMap[tabType]
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
          label={cms.heroBanner.label}
        />
        <div className='pt-12 pb-6 md:pt-16 md:pb-[206px] bg-arta-eggshell-100'>
          <div className='arta-container mx-auto'>
            <div className='overflow-auto arta-hide-scrollbar md:mx-0 -mx-6'>
              <TabBar
                tabs={tabList.map((t) => t.title)}
                selectedTab={tabInfo.title}
                setSelectedTab={(_, index) =>
                  Router.push(tabList[index].link, undefined, { scroll: false })
                }
              />
            </div>
            {children}
          </div>
        </div>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export { TABS }
export default InvestorLayout

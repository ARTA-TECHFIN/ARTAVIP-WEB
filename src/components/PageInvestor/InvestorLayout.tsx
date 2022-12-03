/* eslint-disable */
import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'

import { reportCmsT } from 'src/domains/investor'
import { FC } from 'react'
import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'
import { useTranslation } from 'next-i18next'

const TABS = {
  announcement: 'announcement',
  corporate_information: 'corporate_information',
  financial_calendar: 'financial_calendar',
  esg: 'esg',
} as const

type tabsT = keyof typeof TABS

type propsT = {
  k: any
  cms?: reportCmsT
  tabType: tabsT
  hideTab?: boolean
  children: React.ReactNode
}

const InvestorLayout: FC<propsT> = ({ k, cms, tabType, hideTab = false, children }) => {
  const { t } = useTranslation('common')
  const tabInfoMap = {
    [TABS.announcement]: { title: t("investor_relations.announcements_notices"), link: links.investor },
    [TABS.corporate_information]: { title: t("investor_relations.corporate_information"), link: links.investorCorporateInformation },
    [TABS.financial_calendar]: { title: t("investor_relations.financial_calendar"), link: links.investorFinCalendar },
    [TABS.esg]: { title: t("investor_relations.esg"), link: links.investorEsg },
  }
  const tabList = Object.values(tabInfoMap)

  const tabInfo = tabInfoMap[tabType]

  useEffect(() => {
    if ( tabType === "esg" && document.getElementById("tab")) {
      // @ts-ignore
      document.getElementById("tab").scrollLeft = document.getElementById("tab")?.scrollWidth
    }

    if (tabType === "financial_calendar") {
      // @ts-ignore
      document.getElementById("tab").scrollLeft = document.getElementById("tab")?.scrollWidth - 100
    }

    if (tabType === "corporate_information") {
      // @ts-ignore
      document.getElementById("tab").scrollLeft = 100
    }
  }, []);

  return (
    <>
      <Seo title={t("page_title.investor_relations")} />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t("page_title.investor_relations")}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
          label={k.heroBanner.label}
        />
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[206px]">
          <div className="arta-container mx-auto">
            {
              !hideTab && (
                <div id="tab" className="arta-hide-scrollbar -mx-6 overflow-scroll md:mx-0">
                  <TabBar
                    tabs={tabList.map((t) => t.title)}
                    selectedTab={tabInfo.title}
                    setSelectedTab={(_, index) =>
                      Router.push(tabList[index].link, undefined, { scroll: false })
                    }
                  />
                </div>
              )
            }
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

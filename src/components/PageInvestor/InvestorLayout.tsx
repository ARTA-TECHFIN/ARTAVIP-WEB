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
import { useRouter } from 'next/router'

const TABS = {
  announcement: 'announcement',
  corporate_information: 'corporate_information',
  financial_calendar: 'financial_calendar',
  esg: 'esg',
} as const

type tabsT = keyof typeof TABS

type propsT = {
  seo: any
  k: any
  cms?: reportCmsT
  tabType: tabsT
  hideTab?: boolean
  simpleHeader?: boolean
  gaLog?: boolean
  children: React.ReactNode
}

const InvestorLayout: FC<propsT> = ({
  seo,
  k,
  cms,
  simpleHeader = false,
  tabType,
  hideTab = false,
  children,
  gaLog = false,
}) => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const tabInfoMap = {
    [TABS.announcement]: {
      title: t('investor_relations.announcements_notices'),
      link: links.investor,
      value: 'announcement',
    },
    [TABS.corporate_information]: {
      title: t('investor_relations.corporate_information'),
      link: links.investorCorporateInformation,
      value: 'corporate_information',
    },
    [TABS.financial_calendar]: {
      title: t('investor_relations.financial_calendar'),
      link: links.investorFinCalendar,
      value: 'financial_calendar',
    },
    [TABS.esg]: { title: t('investor_relations.esg'), link: links.investorEsg, value: 'esg' },
  }
  const tabList = Object.values(tabInfoMap)

  useEffect(() => {
    if (tabType === 'esg' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'financial_calendar' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth - 100
    }

    if (tabType === 'corporate_information' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = 100
    }
  }, [])

  return (
    <>
      <Seo
        title={seo.title || ''}
        description={seo.description || ''}
        keywords={seo.keywords || ''}
        ga={
          gaLog
            ? tabType == TABS.announcement
              ? 'IR - Announcements & Reports'
              : tabType == TABS.corporate_information
              ? 'IR - Corporate Information'
              : tabType == TABS.financial_calendar
              ? 'IR - Financial Calendar'
              : tabType == TABS.esg
              ? 'IR - ESG'
              : ''
            : ''
        }
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={seo.title.replace(' | Arta TechFin', '')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
          label={simpleHeader ? t('page_title.investor_relations') : ''}
          simpleHeader={simpleHeader}
        />
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[206px]" id="content">
          <div className="arta-container mx-auto">
            {!hideTab && (
              <div id="tab" className="arta-hide-scrollbar -mx-6 overflow-scroll md:mx-0">
                <TabBar
                  className={`${
                    locale == 'en'
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
          </div>
        </div>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export { TABS }
export default InvestorLayout

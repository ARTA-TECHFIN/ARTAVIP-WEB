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
import { textClass } from '../Text'

const TABS = {
  hk_stock: 'hk_stock',
  sse_stock: 'sse_stock',
  szse_stock: 'szse_stock',
} as const

type tabsT = keyof typeof TABS

type propsT = {
  seo: any
  k: any
  h: any
  cms?: reportCmsT
  tabType: tabsT
  hideTab?: boolean
  simpleHeader?: boolean
  gaLog?: boolean
  children: React.ReactNode
}

const LeaningLayout: FC<propsT> = ({
  seo,
  k,
  h,
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
    [TABS.hk_stock]: {
      title: h.hk,
      link: links.leaningHk,
      value: 'hk_stock',
    },
    [TABS.sse_stock]: {
      title: h.sse,
      link: links.leaningSse,
      value: 'sse_stock',
    },
    [TABS.szse_stock]: {
      title: h.szse,
      link: links.leaningSzse,
      value: 'szse_stock',
    },
  }
  const tabList = Object.values(tabInfoMap)

  useEffect(() => {
    if (tabType === 'hk_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'sse_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth - 100
    }

    if (tabType === 'szse_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

  }, [])

  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={seo.title || ''}
        description={seo.description || ''}
        keywords={seo.keywords || ''}
        ga={
          gaLog
            ? tabType == TABS.hk_stock
              ? 'HK Stock'
              : tabType == TABS.sse_stock
                ? 'SSE Stock'
                : tabType == TABS.szse_stock
                  ? 'SZSE Stock'
                    : ''
            : ''
        }
      />
      <Header textColor="white" />
      <main className="flex flex-col">
        <HeroBanner
          title={seo.title.replace(' | Arta TechFin', '')}
          description=''
          image='/images/customers-services/211025_image_service_fee_banner.png'
          mobileImage='/images/customers-services/211025_image_service_fee_banner.png'
          label={simpleHeader ? t('page_title.securities') : ''}
          simpleHeader={simpleHeader}
        />
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[206px]" id="content">
          <div className="arta-container mx-auto">
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
          </div>
        </div>
      </main>
      <Footer textColor="white" />
    </>
  )
}

export { TABS }
export default LeaningLayout

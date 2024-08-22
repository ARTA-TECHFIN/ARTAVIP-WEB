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
  us_stock: 'us_stock',
  global_stock: 'global_stock',
  ss_stock: 'ss_stock',
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
    [TABS.hk_stock]: {
      title: t('products_info.hk_market'),
      link: links.productsSecurities,
      value: 'hk_stock',
    },
    [TABS.us_stock]: {
      title: t('products_info.us_market'),
      link: links.productsSecuritiesUs,
      value: 'us_stock',
    },
    [TABS.ss_stock]: {
      title: t('products_info.ss_market'),
      link: links.productsSecuritiesSs,
      value: 'ss_stock',
    },
    [TABS.global_stock]: {
      title: t('products_info.global_market'),
      link: links.productsSecuritiesGlobal,
      value: 'global_stock',
    },
  }
  const tabList = Object.values(tabInfoMap)

  useEffect(() => {
    if (tabType === 'hk_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'us_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth - 100
    }

    if (tabType === 'global_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'ss_stock' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = 100
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
              : tabType == TABS.us_stock
                ? 'US Stock'
                : tabType == TABS.global_stock
                  ? 'Global Stock'
                  : tabType == TABS.ss_stock
                    ? 'SZSS Stock'
                    : ''
            : ''
        }
      />
      <Header textColor="white" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={seo.title.replace(' | Arta TechFin', '')}
          description=''
          image='/images/customers-services/211025_image_service_fee_banner.png'
          mobileImage='/images/customers-services/211025_image_service_fee_banner.png'
          label={simpleHeader ? t('page_title.securities') : ''}
          simpleHeader={simpleHeader}
        />
        <div id="securities-bd-text">
          <div className="arta-container relative z-1 mx-auto py-8 md:py-[150px] md:text-center">
            <h1 className={`${textClass.h6} py-3`}>{k.description}</h1>
            <hr className='securities-hr'></hr>
            <h1 style={{ fontWeight: 'bold', color: 'black' }} className={`${textClass.h6} py-3`}>{k.priority}</h1>
            <div className="mt-8 grid grid-cols-3 gap-x-12 md:grid-cols-4 lg:grid-cols-3  place-items-center">
              {
                k.avg.map((j: any, index: number) => {
                  return (
                    <div key={index} className='col-span-2 md:col-span-1 flex items-center text-center flex-col p-4 w-max'>
                      <h1 className={`mt-4 ${textClass.h6}`} style={{ color: '#20365B' }}>{g(j, 'title')}</h1>
                      <p className={`mt-4 text-xs`}>{g(j, 'description')}</p>
                      <img src={j.adv_icon_url} />
                    </div>
                  )
                })
              }
            </div>
            <div className={`${textClass.h6} pt-3`} dangerouslySetInnerHTML={{ __html: k.link }}></div>
          </div>
        </div>
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
export default InvestorLayout

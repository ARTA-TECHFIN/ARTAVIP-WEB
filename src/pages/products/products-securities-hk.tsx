import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import aboutUsJson from 'apidata/about-us.json'
import PageProductsSecurities from 'src/components/PageProducts/PageProductsSecuritiesHk'
import tradeJson from 'apidata/trade.json'
import { useTranslation } from 'next-i18next'
import InvestorLayout, { TABS } from 'src/components/PageProducts/InvestorLayout'
import PageProductsSecuritiesHk from 'src/components/PageProducts/PageProductsSecuritiesHk'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-securities?populate=*`)
  const data = await res.json()
  return data
}

const fetchHkData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-hk-market?populate=*`)
  const data = await res.json()
  return data
}


const fetchHkTipsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/hk-trade-tips?populate=*`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, hkData: any, hkTipsData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    description: g('description'),
    priority: g('priority'),
    avg: pageData.data.attributes.adv_1,
    link: g('link'),
    hk: hkData.data.attributes,
    tip: hkTipsData.data.attributes,
    heroBanner: {
      description: '',
      image: '/images/products/securities2.jpg',
      mobileImage: '/images/products/securities2.jpg',
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchData()
  const hkData = await fetchHkData()
  const hkTipsData = await fetchHkTipsData()
  const titleData = await fetchTitle()

  const t = (keyWithoutLang: string) => `${titleData.data.attributes.productTitle[`${keyWithoutLang}_${locale}`]}`

  return {
    props: {
      k: massageData(pageData, hkData, hkTipsData, locale),
      h: {
        title: t('securities'),
        tip: t('hk_trade_tips'),
        hk: t('securities_hk'),
        us: t('securities_us'),
        ss: t('securities_ss'),
        gb: t('securities_gb'),
      },
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const SecuritiesPage = (props: { k: any ,h: any }) => {

  return (
    <InvestorLayout
      k={props.k}
      h={props.h}
      tabType={TABS.hk_stock}
      gaLog={true}
      seo={{
        title: props.h.title,
        description: '',
        keywords: '',
      }}
    >
      <PageProductsSecuritiesHk k={props.k} tip={props.h.tip} />
    </InvestorLayout>
  )
}

export default SecuritiesPage

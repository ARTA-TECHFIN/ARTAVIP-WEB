import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import aboutUsJson from 'apidata/about-us.json'
import PageProductsSecurities from 'src/components/PageProducts/PageProductsSecurities'
import tradeJson from 'apidata/trade.json'
import { HeroBanner } from 'src/components/HeroBanner'

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

const fetchUsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-us-market?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, hkData: any, usData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    description: g('description'),
    priority: g('priority'),
    avg:pageData.data.attributes.adv_1,
    link: pageData.data.attributes.link,
    hk:hkData.data.attributes,
    us:usData.data.attributes,
    heroBanner: {
      description: '',
      image: '/images/products/securities2.jpg',
      mobileImage: '/images/products/securities2.jpg',
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = await fetchData()
  const hkData = await fetchHkData()
  const usData = await fetchUsData()
  const trade=tradeJson.data.attributes

  return {
    props: {
      k: massageData(pageData,hkData,usData, locale),
      u: trade,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageProductsSecurities
export type PageAboutCmsT = ReturnType<typeof massageData>

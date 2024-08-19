import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageProductsFutures from 'src/components/PageProducts/PageProductsFutures'
import { json } from 'stream/consumers'

const fetchFuturesData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-futures`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    title: g('title'),
    description: g('description'),
    ex_des_1: g('ex_des_1'),
    ex_des_2: g('ex_des_2'),
    ex_des_2_d: g('ex_des_2_d'),
    ex_des_3: g('ex_des_3'),
    heroBanner: {
      description: '',
      image: '/images/products/211025_image_product_futures_banner-1.png',
      mobileImage: '/images/products/211025_image_product_futures_banner-1.png',
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchFuturesData()

  return {
    props: {
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageProductsFutures
export type PageAboutCmsT = ReturnType<typeof massageData>

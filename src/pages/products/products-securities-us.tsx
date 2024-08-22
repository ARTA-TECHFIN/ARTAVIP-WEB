import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import InvestorLayout, { TABS } from 'src/components/PageProducts/InvestorLayout'
import PageProductsSecuritiesUs from 'src/components/PageProducts/PageProductsSecuritiesUs'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-securities?populate=*`)
  const data = await res.json()
  return data
}

const fetchUsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-us-market?populate=*`)
  const data = await res.json()
  return data
}

const fetchUsCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/us-trade-tips?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, usData: any, usTipsData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    description: g('description'),
    priority: g('priority'),
    avg:pageData.data.attributes.adv_1,
    link: g('link'),
    us:usData.data.attributes,
    tip:usTipsData.data.attributes,
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
  const usData = await fetchUsData()
  const usTipsData = await fetchUsCmsData()

  return {
    props: {
      k: massageData(pageData,usData,usTipsData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const SecuritiesPage = (props: { k: any }) => {
  const { t } = useTranslation()

  return (
    <InvestorLayout
      k={props.k}
      tabType={TABS.us_stock}
      gaLog={true}
      seo={{
        title: `${t('page_title.securities')} | Arta TechFin`,
        description: '',
        keywords: t('page_title.securities'),
      }}
    >
      <PageProductsSecuritiesUs k={props.k} />
    </InvestorLayout>
  )
}

export default SecuritiesPage

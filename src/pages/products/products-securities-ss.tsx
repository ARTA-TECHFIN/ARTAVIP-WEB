import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import InvestorLayout, { TABS } from 'src/components/PageProducts/InvestorLayout'
import PageProductsSecuritiesSs from 'src/components/PageProducts/PageProductsSecuritiesSs'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/product-securities?populate=*`)
  const data = await res.json()
  return data
}

const fetchSsCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/ss-trade-tips?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, usTipsData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    description: g('description'),
    priority: g('priority'),
    avg:pageData.data.attributes.adv_1,
    link: pageData.data.attributes.link,
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
  const ssTipsData = await fetchSsCmsData()

  return {
    props: {
      k: massageData(pageData,ssTipsData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const SecuritiesPage = (props: { k: any }) => {
  const { t } = useTranslation()

  return (
    <InvestorLayout
      k={props.k}
      tabType={TABS.ss_stock}
      gaLog={true}
      seo={{
        title: `${t('page_title.securities')} | Arta TechFin`,
        description: '',
        keywords: t('page_title.securities'),
      }}
    >
      <PageProductsSecuritiesSs k={props.k} />
    </InvestorLayout>
  )
}

export default SecuritiesPage

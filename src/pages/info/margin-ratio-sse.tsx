import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LeaningLayout, { TABS } from 'src/components/PageProducts/LeaningLayout'
import PageLeaningSse from 'src/components/PageProducts/PageLeaningSse'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/sse-marginable-stock?populate=*`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.productTitle[`${keyWithoutLang}_${locale}`]}`

  const pageData = await fetchCmsData()
  const titleData = await fetchTitle()

  return {
    props: {
      k: pageData.data,
      title: t('margin_ratio'),
      h :{
        hk:t('margin_hk'),
        sse:t('margin_sse'),
        szse:t('margin_szse'),
      },
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


const MarginRatioPage = (props: { k: any, h: any , title: any }) => {

  return (
    <LeaningLayout
      k={props.k}
      h={props.h}
      tabType={TABS.sse_stock}
      gaLog={true}
      seo={{
        title: props.title,
        description: '',
        keywords: '',
      }}
    >
      <PageLeaningSse k={props.k} />
    </LeaningLayout>
  )
}

export default MarginRatioPage

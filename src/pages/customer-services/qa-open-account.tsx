import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageQaOpenAccount from 'src/components/PageCustomerServices/PageQaOpenAccount'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/qa-open-accounts?populate=*`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, titleData: any, locale: string | undefined = 'en') => {
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.faqs[`${keyWithoutLang}_${locale}`]}`
  return {
    data: pageData.data,
    title:t('faqs_open_account')
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchData()
  const titleData = await fetchTitle()

  return {
    props: {
      k: massageData(pageData,titleData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageQaOpenAccount
export type PageAboutCmsT = ReturnType<typeof massageData>

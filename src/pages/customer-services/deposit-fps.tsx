import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageDepositFPS from 'src/components/PageCustomerServices/PageDepositFPS'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/fund-deposits-fps?populate=*`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any,title: any, locale: string | undefined = 'en') => {
  const t = (keyWithoutLang: string) => `${title.data.attributes.customerService[`${keyWithoutLang}_${locale}`]}`
  return {
    data: pageData.data,
    title: t('fund_fps'),
    procedure: pageData.data.attributes.procedure,
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

export default PageDepositFPS
export type PageAboutCmsT = ReturnType<typeof massageData>

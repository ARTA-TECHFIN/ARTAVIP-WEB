import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageDepositBankDetail from 'src/components/PageCustomerServices/PageDepositBankDetail'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/fund-deposits-bank-detail?populate=*`)
  const data = await res.json()
  return data
}
const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any,titleData:any, locale: string | undefined = 'en') => {
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.customerService[`${keyWithoutLang}_${locale}`]}`
  return {
    data: pageData.data,
    title: t('fund_deposits'),
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

export default PageDepositBankDetail
export type PageAboutCmsT = ReturnType<typeof massageData>

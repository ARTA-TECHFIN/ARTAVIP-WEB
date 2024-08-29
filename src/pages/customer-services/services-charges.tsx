import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageServiceCharges from 'src/components/PageCustomerServices/PageServiceCharges'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/services-charges?populate=*`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}


const massageData = (pageData: any, titleData: any, locale: string | undefined = 'en') => {
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.customerService[`${keyWithoutLang}_${locale}`]}`
  return {
    cms: pageData.data,
    files: pageData.data.attributes.fee_files,
    title: t('service_charges'),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const cms = await fetchCmsData()
  const titleData = await fetchTitle()

  return {
    props: {
      k: massageData(cms, titleData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


export default PageServiceCharges
export type PageAboutCmsT = ReturnType<typeof massageData>

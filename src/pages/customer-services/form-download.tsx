import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageFormDownload from 'src/components/PageCustomerServices/PageFormDownload'
import { json } from 'stream/consumers'

const fetchFuturesData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/form-download?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  return {
    title_1: g('title_1'),
    title_2: g('title_2'),
    tips: g('tips'),
    form_1: pageData.data.attributes.form_1,
    form_2: pageData.data.attributes.form_2,
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

export default PageFormDownload
export type PageAboutCmsT = ReturnType<typeof massageData>

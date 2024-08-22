import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageServiceCharges from 'src/components/PageCustomerServices/PageServiceCharges'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/services-charges?populate=*`)
  const data = await res.json()
  return data
}


const massageData = (pageData: any, locale: string | undefined = 'en') => {
  return {
    cms: pageData.data,
    files: pageData.data.attributes.fee_files,
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const cms = await fetchCmsData()

  return {
    props: {
      k: massageData(cms, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


export default PageServiceCharges
export type PageAboutCmsT = ReturnType<typeof massageData>

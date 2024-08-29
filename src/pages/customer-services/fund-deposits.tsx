import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageFundDeposits from 'src/components/PageCustomerServices/PageFundDeposits'

const fetchDepositsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/fund-deposits?populate=*`)
  const data = await res.json()
  return data
}
const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}


const massageData = (pageData: any,titleData:any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.customerService[`${keyWithoutLang}_${locale}`]}`
  return {
    data: pageData.data,
    notice: g('notice'),
    notice_ps: g('notice_ps'),
    notice_ph: g('notice_ph'),
    remark_1: g('remark_1'),
    remark_2: g('remark_2'),
    title: t('fund_deposits'),
    heroBanner: {
      description: '',
      image: '/images/customers-services/211025_image_service_deposit_banner.png',
      mobileImage: '/images/customers-services/211025_image_service_deposit_banner.png',
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchDepositsData()
  const titleData = await fetchTitle()

  return {
    props: {
      k: massageData(pageData,titleData, locale),

      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageFundDeposits
export type PageAboutCmsT = ReturnType<typeof massageData>

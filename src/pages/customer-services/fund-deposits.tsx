import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageFundDeposits from 'src/components/PageCustomerServices/PageFundDeposits'
import { useRouter } from 'next/router'

const fetchDepositsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/fund-deposits?populate=*`)
  const data = await res.json()
  return data
}


const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  return {
    data: pageData.data,
    notice: g('notice'),
    notice_ps: g('notice_ps'),
    notice_ph: g('notice_ph'),
    remark_1: g('remark_1'),
    remark_2: g('remark_2'),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchDepositsData()

  return {
    props: {
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageFundDeposits
export type PageAboutCmsT = ReturnType<typeof massageData>

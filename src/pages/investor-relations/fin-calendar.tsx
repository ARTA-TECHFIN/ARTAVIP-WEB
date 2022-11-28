import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageFinancialCalendar from 'src/components/PageInvestor/PageFinancialCalendar'
import { getReportCms, reportCmsT } from 'src/domains/investor'
import investorRelationJson from 'apidata/investor-relation.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      description: g('description') !== null ? g('description') : '',
      image: '/images/asset-management/banner.png',
      mobileImage: '/images/asset-management/mobile-banner.png',
      label: '',
    },
  }
}

// Add get report here if seo is needed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? investorRelationJson : await fetchCmsData()

  return {
    props: {
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const FinCalendarPage = (props: { k: any }) => {
  return (
    <InvestorLayout k={props.k} tabType={TABS.financial_calendar}>
      <PageFinancialCalendar />
    </InvestorLayout>
  )
}

export default FinCalendarPage

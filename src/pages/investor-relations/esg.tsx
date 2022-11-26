import type { GetServerSideProps } from 'next'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageEsg from 'src/components/PageInvestor/PageEsg'
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
      title: 'Investor Relation',
      description: `Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
      image: '/images/investor-relations/banner.png',
      mobileImage: '/images/investor-relations/mobile-banner.png',
      label: '',
    },
  }
}

const InvestorPage = (props: { cms: reportCmsT, t:any, locale: string }) => {
  return (
    <InvestorLayout cms={props.cms} tabType={TABS.esg}>
      <PageEsg t={props.t} locale={props.locale} />
    </InvestorLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const cms = await getReportCms({ lang: 'en' })
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? investorRelationJson : await fetchCmsData()

  return {
    props: {
      t: massageData(pageData, locale),
      locale,
      cms,
    },
  }
}

export default InvestorPage

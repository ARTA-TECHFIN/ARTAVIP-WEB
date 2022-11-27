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
      description: g('description'),
      image: '/images/investor-relations/banner.png',
      mobileImage: '/images/investor-relations/mobile-banner.png',
      label: '',
    },
    esg_environmental: g('esg_environmental'),
    esg_social: g('esg_social'),
    esg_governance_1: g('esg_governance_1'),
    esg_governance_2: g('esg_governance_2'),
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
      cms: massageData(pageData, locale),
    },
  }
}

export default InvestorPage

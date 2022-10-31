import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageFinancialCalendar from 'src/components/PageInvestor/PageFinancialCalendar'
import { getReportCms, reportCmsT } from 'src/domains/investor'

// Add get report here if seo is needed
export const getStaticProps = async () => {
  const cms = await getReportCms({ lang: 'en' })

  return {
    props: { cms },
  }
}

const InvestorPage = (props: { cms: reportCmsT }) => {
  return (
    <InvestorLayout cms={props.cms} tabType={TABS.financial_calendar}>
      <PageFinancialCalendar />
    </InvestorLayout>
  )
}

export default InvestorPage

import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageResultAnnouncements from 'src/components/PageInvestor/PageResultAnnouncements'
import { getReportCms, reportCmsT } from 'src/domains/investor'

// Add get report here if seo is needed
export const getStaticProps = async () => {
  const cms = await getReportCms({ lang: 'en' })

  return {
    props: {
      cms: {
        heroBanner: {
          title: 'Results Announcement',
          description: `Investor Relataion`,
          image: '/images/investor-relations/banner.png',
          mobileImage: '/images/investor-relations/mobile-banner.png',
          label: '',
        }
      }
    },
  }
}

const InvestorPage = (props: { cms: reportCmsT }) => {
  return (
    <InvestorLayout cms={props.cms} tabType={TABS.financial_report} hideTab={true}>
      <PageResultAnnouncements />
    </InvestorLayout>
  )
}

export default InvestorPage

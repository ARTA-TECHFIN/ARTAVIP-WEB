import { InferGetStaticPropsType } from 'next'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageAnnouncement from 'src/components/PageInvestor/PageAnnouncement'
import { getReportCms } from 'src/domains/investor'

// Add get report here if seo is needed
export const getStaticProps = async () => {
  const cms = await getReportCms({ lang: 'en' })

  return {
    props: { cms },
  }
}

const InvestorPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <InvestorLayout cms={props.cms} tabType={TABS.announcement}>
      <PageAnnouncement />
    </InvestorLayout>
  )
}

export default InvestorPage

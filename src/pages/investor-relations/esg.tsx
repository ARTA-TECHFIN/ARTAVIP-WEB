import PageInvestor from 'src/components/PageInvestor/PageInvestor'
import { getReportCms } from 'src/domains/investor'

// Add get report here if seo is needed
export const getStaticProps = async () => {
  const cms = await getReportCms({ lang: 'en' })

  return {
    props: { cms },
  }
}

const InvestorPage = (props: { cms: Awaited<ReturnType<typeof getReportCms>> }) => {
  return <PageInvestor cms={props.cms} tabType="esg" />
}

export default InvestorPage

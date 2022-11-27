import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageAnnouncement from 'src/components/PageInvestor/PageAnnouncement'
import { getReportCms, reportCmsT } from 'src/domains/investor'

// Add get report here if seo is needed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const cms = await getReportCms({ lang: 'en' })

  return {
    props: {
      cms,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const InvestorPage = (props: { cms: reportCmsT }) => {
  return (
    <InvestorLayout cms={props.cms} tabType={TABS.announcement} hideTab={true}>
      <PageAnnouncement />
    </InvestorLayout>
  )
}

export default InvestorPage

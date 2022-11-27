import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageResultAnnouncements from 'src/components/PageInvestor/PageResultAnnouncements'
import { reportCmsT } from 'src/domains/investor'

// Add get report here if seo is needed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context

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
      },
      ...(await serverSideTranslations(locale || 'en', ['common'])),
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

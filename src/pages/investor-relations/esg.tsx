import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageEsg from 'src/components/PageInvestor/PageEsg'
import { getReportCms, reportCmsT } from 'src/domains/investor'
import investorRelationJson from 'apidata/investor-relation.json'
import { useTranslation } from 'next-i18next'

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
      description: g('description') !== null ? g('description') : '',
      image: '/images/investor-relations/top-banner.jpg',
      mobileImage: '/images/investor-relations/mobile-top-banner.jpg',
      label: '',
    },
    esg_environmental: g('esg_environmental'),
    esg_social: g('esg_social'),
    esg_governance_1: g('esg_governance_1'),
    esg_governance_2: g('esg_governance_2'),
  }
}

const InvestorPage = (props: { k: any; locale: string }) => {
  const { t } = useTranslation()

  return (
    <InvestorLayout
      k={props.k}
      tabType={TABS.esg}
      gaLog={true}
      seo={{
        title: `${t('page_title.investor_relations')} | Arta TechFin`,
        description: t('page_description.investor_relations'),
        keywords: t('page_keywords.investor_relations'),
      }}
    >
      <PageEsg k={props.k} locale={props.locale} />
    </InvestorLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? investorRelationJson : await fetchCmsData()

  return {
    props: {
      k: massageData(pageData, locale),
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default InvestorPage

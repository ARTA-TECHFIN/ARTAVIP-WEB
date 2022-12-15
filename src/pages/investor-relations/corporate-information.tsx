import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageCorporateInformation from 'src/components/PageInvestor/PageCorporateInformation'
import investorRelationJson from 'apidata/investor-relation.json'
import { useTranslation } from 'next-i18next'
import { t } from 'i18next'

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
      image: '/images/investor-relations/top-banner.jpg',
      mobileImage: '/images/investor-relations/mobile-top-banner.jpg',
      label: '',
    },
    ci_company_name: g('ci_company_name'),
    ci_sector: g('ci_sector'),
    ci_principal_place: g('ci_principal_place'),
    ci_register_office: g('ci_register_office'),
    ci_web_address: pageData.data.attributes['ci_web_address'],
    ci_phone_number: pageData.data.attributes['ci_phone_number'],
    ci_fax_number: pageData.data.attributes['ci_fax_number'],
    ci_financial_year_end: g('ci_financial_year_end'),
    ci_independent_directors: g('ci_independent_directors'),
    ci_company_secretory: g('ci_company_secretory'),
    ci_principal_bankers: g('ci_principal_bankers'),
    ci_auditors: g('ci_auditors'),
    ci_legal_counsels_1: g('ci_legal_counsels_1'),
    ci_legal_counsels_2: g('ci_legal_counsels_2'),
    ci_hkex_stock_code: pageData.data.attributes['ci_hkex_stock_code'],
    ci_listing_date: pageData.data.attributes['ci_listing_date'],
    ci_share_register_transfer_office: g('ci_share_register_transfer_office'),
    ci_executive_directors: g('ci_executive_directors'),
    ci_non_executive_directors: g('ci_non_executive_directors'),
    esg_governance_2: g('esg_governance_2'),
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

const InvestorPage = (props: { k: any }) => {
  const { t } = useTranslation()

  return (
    <InvestorLayout
      k={props.k}
      tabType={TABS.corporate_information}
      gaLog={true}
      seo={{
        title: `${t('page_title.investor_relations')} | Arta TechFin`,
        description: t('page_description.investor_relations'),
        keywords: t('page_keywords.investor_relations'),
      }}
    >
      <PageCorporateInformation k={props.k} />
    </InvestorLayout>
  )
}

export default InvestorPage

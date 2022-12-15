import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'
import PageFinancialCalendar from 'src/components/PageInvestor/PageFinancialCalendar'
import { getReportCms, reportCmsT } from 'src/domains/investor'
import investorRelationJson from 'apidata/investor-relation.json'
import financialCalendarJson from 'apidata/investor-relations-financial-calendars.json'
import { useTranslation } from 'next-i18next'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`)
  const data = await res.json()
  return data
}

const fetchFcData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relations-financial-calendars`
  )
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
  }
}

const fcData = (fcData: any, locale: string | undefined = 'en') => {
  const getKey = (keyWithoutLang: string) => `${`${keyWithoutLang}_${locale}`}`

  return fcData
    .sort((a: any, b: any) => a.attributes.date.localeCompare(b.attributes.date))
    .map(({ attributes: press }: any) => ({
      year: +press.date.split('-')[0],
      post: {
        date: press.date,
        title: press[getKey('title')],
      },
    }))
    .reduce((acc: any, curr: any) => {
      const last = acc[acc.length - 1]
      if (last && last.year === curr.year) {
        last.posts.push(curr.post)
      } else {
        acc.push({ year: curr.year, posts: [curr.post] })
      }
      return acc
    }, []) as {
    year: number
    posts: { date: string; title: string }[]
  }[]
}

// Add get report here if seo is needed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? investorRelationJson : await fetchCmsData()
  const datesData = useLocalCms ? financialCalendarJson : await fetchFcData()

  return {
    props: {
      k: massageData(pageData, locale),
      fc: fcData(datesData.data, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const FinCalendarPage = (props: { k: any; fc: any }) => {
  const { t } = useTranslation()
  return (
    <InvestorLayout
      k={props.k}
      tabType={TABS.financial_calendar}
      gaLog={true}
      seo={{
        title: `${t('page_title.investor_relations')} | Arta TechFin`,
        description: t('page_description.investor_relations'),
        keywords: t('page_keywords.investor_relations'),
      }}
    >
      <PageFinancialCalendar fc={props.fc} />
    </InvestorLayout>
  )
}

export default FinCalendarPage

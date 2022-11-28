import type { NextPage } from 'next'
import Link from 'next/link'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { ReportSection } from './ReportSection'
import { ReportCard } from './ReportCard'
import { links } from 'src/domains/links'
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router"

const QUERY_FINANCIAL_REPORT = 'QUERY_FINANCIAL_REPORT'

// TODO: Assume only get four years of data
const useGetData = (locale: 'en' | 'tc' | 'sc') => {
  const lang = locale || 'en'
  console.log(lang)
  const year = new Date().getFullYear()
  const yearList = [year, year - 1, year - 2, year - 3]

  return useQuery([QUERY_FINANCIAL_REPORT, lang, year], async () => {
    const res = await Promise.all(
      yearList.map((year) => getReportList({ lang, page: 1, reportType: 'r', year }))
    )

    return res.map((r, i) => ({
      year: year - i,
      results: r.data.results,
    }))
  })
}

const PageInvestorRelations: NextPage = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const { status, data, error } = useGetData(locale)

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div className="pt-[66px]">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <ul className="col-span-full col-span-full grid grid-cols-12 sm:gap-8 gap-4 sm:mt-0 mt-4">
          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorResultAnnouncements}>
              <ReportCard title={t("join_us.results_announcements")} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={"/investor-relations/announcements-notices"}>
              <ReportCard title={t("join_us.interim_annual_reports")} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorAnnouncementsNotices}>
              <ReportCard title={t("join_us.announments_noties")} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={"/investor-relations/announcements-notices"}>
              <ReportCard title={t("join_us.circulars")} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={"/investor-relations/announcements-notices"}>
              <ReportCard title={t("join_us.listing_documents")} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PageInvestorRelations

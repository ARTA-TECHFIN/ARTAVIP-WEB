import type { NextPage } from 'next'
import Link from 'next/link'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { ReportSection } from './ReportSection'
import { ReportCard } from './ReportCard'
import { links } from 'src/domains/links'

const QUERY_FINANCIAL_REPORT = 'QUERY_FINANCIAL_REPORT'

// TODO: Assume only get four years of data
const useGetData = () => {
  const lang = 'en'
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
  const { status, data, error } = useGetData()

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div className="pt-[66px]">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <ul className="col-span-full col-span-full grid grid-cols-12 sm:gap-8 gap-4 sm:mt-0 mt-4">
          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorResultAnnouncements}>
              <ReportCard title={"Results Announcements"} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={"/investor-relations/announcements-notices"}>
              <ReportCard title={"Interim & Annual Reports"} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorAnnouncementsNotices}>
              <ReportCard title={"Announcements & Notices"} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={"/investor-relations/announcements-notices"}>
              <ReportCard title={"Circulars"} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={"/investor-relations/announcements-notices"}>
              <ReportCard title={"Listing Documents"} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PageInvestorRelations

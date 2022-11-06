import type { NextPage } from 'next'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { ReportSection } from './ReportSection'

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

const PageFinancialReport: NextPage = () => {
  const { status, data, error } = useGetData()

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div className="pt-[66px]">
      {data.map((yearly) => (
        <ReportSection key={yearly.year} year={yearly.year} reports={yearly.results} />
      ))}
    </div>
  )
}

export default PageFinancialReport

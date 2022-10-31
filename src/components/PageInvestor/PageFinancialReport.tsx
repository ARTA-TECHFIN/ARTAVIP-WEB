import type { NextPage } from 'next'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { ReportSection } from './ReportSection'

const QUERY_FINANCIAL_REPORT = 'QUERY_FINANCIAL_REPORT'

// TODO: Assume only get four years of data
const PageFinancialReport: NextPage = () => {
  const lang = 'en'
  const year = new Date().getFullYear()
  const { status, data, error } = useQuery([QUERY_FINANCIAL_REPORT, lang, year], async () => {
    const res = await Promise.all([
      getReportList({ lang, page: 1, reportType: 'r', year: year }),
      getReportList({ lang, page: 1, reportType: 'r', year: year - 1 }),
      getReportList({ lang, page: 1, reportType: 'r', year: year - 2 }),
      getReportList({ lang, page: 1, reportType: 'r', year: year - 3 }),
    ])

    return res.map((r, i) => ({
      year: year - i,
      results: r.data.results,
    }))
  })

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div>
      {data.map((yearly) => (
        <ReportSection key={yearly.year} year={yearly.year} reports={yearly.results} />
      ))}
    </div>
  )
}

export default PageFinancialReport

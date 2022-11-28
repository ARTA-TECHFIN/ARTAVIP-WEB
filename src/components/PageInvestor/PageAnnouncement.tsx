import type { NextPage } from 'next'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { Loader } from '../Loader'
import { ErrorMessage } from '../ErrorMessage'
import { CalendarAccordion } from './CalendarAccordion'
import { useRouter } from "next/router"

const QUERY_ANNOUNCEMENT = 'QUERY_ANNOUNCEMENT'

// TODO: Assume only get four years of data
const useGetData = (locale: string) => {
  const lang = locale === 'en'? 'en': locale === 'tc'? 'tc': 'sc'
  const year = new Date().getFullYear()
  const yearList = [year, year - 1, year - 2, year - 3]

  return useQuery([QUERY_ANNOUNCEMENT, lang, year], async () => {
    const res = await Promise.all(
      yearList.map((year) => getReportList({ lang, page: 1, reportType: 'b03', year }))
    )

    return res.map((r, i) => ({
      year: year - i,
      results: r.data.results,
    }))
  })
}

const PageAnnouncement: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const { status, data, error } = useGetData(locale || "en")

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div className="mt-16">
      {data?.map((yearly, index) => (
        <CalendarAccordion
          index={index}
          key={yearly.year}
          year={yearly.year}
          events={yearly.results.map((r) => ({
            date: new Date(r.doc_date),
            title: r.headline,
            url: r.url,
          }))}
        />
      ))}
    </div>
  )
}

export default PageAnnouncement

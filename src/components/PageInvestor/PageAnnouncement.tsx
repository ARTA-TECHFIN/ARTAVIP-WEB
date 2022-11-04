import type { NextPage } from 'next'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { Loader } from '../Loader'
import { ErrorMessage } from '../ErrorMessage'
import { CalendarAccordion } from './CalendarAccordion'

const QUERY_ANNOUNCEMENT = 'QUERY_ANNOUNCEMENT'

// TODO: Assume only get four years of data
const PageAnnouncement: NextPage = () => {
  const lang = 'en'
  const year = new Date().getFullYear()
  const { status, data, error } = useQuery([QUERY_ANNOUNCEMENT, lang, year], async () => {
    const res = await Promise.all([
      getReportList({ lang, page: 1, reportType: 'acl', year: year }),
      getReportList({ lang, page: 1, reportType: 'acl', year: year - 1 }),
      getReportList({ lang, page: 1, reportType: 'acl', year: year - 2 }),
      getReportList({ lang, page: 1, reportType: 'acl', year: year - 3 }),
    ])

    return res.map((r, i) => ({
      year: year - i,
      results: r.data.results.filter((r) => r.filetype === 'ANN'),
    }))
  })


  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div className='mt-16'>
      {data.map((yearly) => (
        
        <CalendarAccordion
          key={yearly.year}
          year={yearly.year}
          events={yearly.results.map((r) => ({
            date: new Date(r.doc_date),
            title: r.headline,
            url: r.url
          }))}
        />
      ))}
    </div>
  )
}

export default PageAnnouncement

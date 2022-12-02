import type { NextPage } from 'next'

import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { Loader } from '../Loader'
import { ErrorMessage } from '../ErrorMessage'
import { useMemo, useState } from 'react'
import { InputDropdown } from '../InputDropdown'
import { Pagination } from '../Pagination'
import { CalendarCardList } from './CalendarCardList'

const QUERY_FINANCIAL_CALENDAR = 'QUERY_FINANCIAL_CALENDAR'

// TODO: Assume only get five years of data.
/**
 * TODO: This is a temporary solution to get the data from the API.
 * Since the API cannot filter by filetype, we need to filter it manually.
 * So that we don't know how many pages we need to fetch.
 */
const year = new Date().getFullYear()
const yearList = [year, year - 1, year - 2, year - 3, year - 4]
const yearOptions = [
  { value: '', label: 'Please select' },
  ...yearList.map((year) => {
    const yearStr = year.toString()
    return { value: yearStr, label: yearStr[0].toUpperCase() + yearStr.slice(1) }
  }),
]

const useGetData = (year: number | null, page: number) => {
  const lang = 'en'
  return useQuery([QUERY_FINANCIAL_CALENDAR, lang, year], async () => {
    const res = await getReportList({ lang, page: page, reportType: 'acl', year: year })

    return res.data.results.filter((r) => r.filetype === 'RAN')
  })
}

const PageFinancialCalendar: NextPage = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedPage, setSelectedPage] = useState<number>(1)

  const { status, data, error } = useGetData(selectedYear, selectedPage)

  const groupedDataByYear = useMemo(() => {
    if (!data) return []

    // For performance, we use for loop instead of map
    const groupedData = {} as { [key: number]: typeof data }
    for (let i = 0; i < data.length; i++) {
      const d = data[i]
      const year = new Date(d.doc_date).getFullYear()
      if (!groupedData[year]) groupedData[year] = []
      groupedData[year].push(d)
    }

    return Object.entries(groupedData).map(([year, events]) => ({
      year: parseInt(year),
      events,
    }))
  }, [data])

  return (
    <div className="mt-8 flex flex-col">
      {/* <div className="sm:w-[288px] w-full ml-auto">
        <InputDropdown
          value={`${selectedYear}`}
          onChange={(v) => setSelectedYear(+v.target.value || null)}
          options={yearOptions}
        />
      </div> */}
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <ErrorMessage error={error} />
      ) : (
        <div className='mt-6'>
          {groupedDataByYear.map((yearly) => (
            <CalendarCardList
              key={yearly.year}
              year={yearly.year}
              events={yearly.events.map((r) => ({
                date: new Date(r.doc_date),
                title: r.headline,
                url: r.url,
              }))}
            />
          ))}
          {/* <div className='mt-12'>
            <Pagination page={selectedPage} onChange={setSelectedPage} totalPage={20} />
          </div> */}
        </div>
      )}
    </div>
  )
}

export default PageFinancialCalendar

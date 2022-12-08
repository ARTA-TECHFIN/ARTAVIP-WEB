import type { NextPage } from 'next'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getReportList } from 'src/domains/investor'
import { Loader } from '../Loader'
import { ErrorMessage } from '../ErrorMessage'
import { CalendarAccordion } from './CalendarAccordion'
import { useRouter } from "next/router"
import Link from 'next/link'
import { links } from 'src/domains/links'
import { useTranslation } from 'next-i18next'
import { textClass } from 'src/components/Text'

const QUERY_CIRCULARS = 'QUERY_CIRCULARS'

// TODO: Assume only get four years of data
const useGetData = (locale: string) => {
  const lang = locale === 'en'? 'en': locale === 'tc'? 'tc': 'sc'
  const year = new Date().getFullYear()
  const yearList = [year, year - 1, year - 2, year - 3, year - 4]

  return useQuery([QUERY_CIRCULARS, lang, year], async () => {
    const res = await Promise.all(
      yearList.map((year) => getReportList({ lang, page: 1, reportType: 'c', year }))
    )

    return res.map((r, i) => ({
      year: year - i,
      results: r.data.results,
    }))
  })
}

const PageCirculars: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const { status, data, error } = useGetData(locale || "en")
  const { t } = useTranslation('common')
  const [openYear, setOpenYear] = useState(data && data[0].year || 2022)

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  const setOpenYearFunc = (year: number) => {
    if (year == openYear) {
      setOpenYear(0)
    } else {
      setOpenYear(year)
    }
  }

  return (
    <div className="mt-16">
      <Link href={links.investor}>
        <p className={`${textClass.body_regular} mb-12 flex gap-4`}>
          <svg className="mt-[6px]" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C7.96953 0.174335 7.9543 0.36004 7.9543 0.557115C7.9543 0.769349 7.96953 0.955054 8 1.11423L1.32795 6.89204L8 12.6143C7.96953 12.728 7.9543 12.8531 7.9543 12.9895C7.9543 13.1335 7.96953 13.7045 8 13.8182C6.04821 12.1796 -3.01261e-07 6.89204 -3.01261e-07 6.89204C-3.01261e-07 6.89204 6.09188 1.59358 8 0Z" fill="#593725"/>
          </svg>
          <span className="underline">{t("investor_relations.back")}</span>
        </p>
      </Link>
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
          openYear={openYear}
          setOpenYear={setOpenYearFunc}
        />
      ))}
    </div>
  )
}

export default PageCirculars

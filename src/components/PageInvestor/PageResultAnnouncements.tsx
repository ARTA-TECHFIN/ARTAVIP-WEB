import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import { getAdvancedReportList } from 'src/domains/investor'
import { ErrorMessage } from '../ErrorMessage'
import { Loader } from '../Loader'
import { ReportSection } from './ReportSection'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { links } from 'src/domains/links'
import { useTranslation } from 'next-i18next'
import { textClass } from 'src/components/Text'

interface responseT {
  year: number
  results: any
}

const QUERY_RESULT_ANNOUNCEMENT = 'QUERY_RESULT_ANNOUNCEMENT'
// TODO: Assume only get four years of data
const useGetData = (locale: string) => {
  const lang = locale === 'en' ? 'en' : locale === 'tc' ? 'tc' : 'sc'
  return useQuery([QUERY_RESULT_ANNOUNCEMENT], async () => {
    const result = await getAdvancedReportList({ lang, reportType: 'results' })
    let yearList: string[] = []
    let response: responseT[] = []
    if (result && result.status == 200 && result.message == 'Success') {
      result.data.results.map((item) => {
        if (yearList.indexOf(item.year) == -1 && parseInt(item.year) >= 2018)
          yearList.push(item.year)
      })
      yearList.map((year) => {
        response.push({
          year: parseInt(year),
          results: result.data.results.filter((item) => item.year == year),
        })
      })
      return response
    }
  })
}

const PageResultAnnouncements: NextPage = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const { status, data, error } = useGetData(locale || 'en')

  if (status === 'loading') return <Loader />
  if (status === 'error') return <ErrorMessage error={error} />

  return (
    <div className="pt-16">
      <Link href={links.investor}>
        <p className={`${textClass.body_regular} mb-12 flex gap-4`}>
          <svg
            className="mt-[6px]"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C7.96953 0.174335 7.9543 0.36004 7.9543 0.557115C7.9543 0.769349 7.96953 0.955054 8 1.11423L1.32795 6.89204L8 12.6143C7.96953 12.728 7.9543 12.8531 7.9543 12.9895C7.9543 13.1335 7.96953 13.7045 8 13.8182C6.04821 12.1796 -3.01261e-07 6.89204 -3.01261e-07 6.89204C-3.01261e-07 6.89204 6.09188 1.59358 8 0Z"
              fill="#593725"
            />
          </svg>
          <span className="underline">{t('investor_relations.back')}</span>
        </p>
      </Link>
      {data?.map((yearly) => (
        <ReportSection key={yearly.year} year={yearly.year} reports={yearly.results} />
      ))}
    </div>
  )
}

export default PageResultAnnouncements

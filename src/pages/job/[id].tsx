import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PageJobOpenings from 'src/components/PageJobOpenings/PageJobOpenings'
import jobJson from 'apidata/job.json'

const fetchJobData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us-jobs-openings/${id}`
  )
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data[`${keyWithoutLang}_${locale}`]}`
  return {
    job_id: pageData.data.slug,
    job_title: g('job_title'),
    work_location: g('work_location'),
    department: g('department'),
    job_description: g('job_description'),
    category: pageData.data.category,
    seniority: pageData.data.seniority,
    showing_start_date: pageData.data.showing_start_date,
    showing_end_date: pageData.data.showing_end_date,
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, query } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const job = useLocalCms ? jobJson : await fetchJobData(query.id + '')
  return {
    props: {
      k: massageData(job, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageJobOpenings
export type jobDetailsT = ReturnType<typeof massageData>

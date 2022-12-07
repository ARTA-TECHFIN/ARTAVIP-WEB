import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import JoinUsLayout from 'src/components/PageJoinUs/JoinUsLayout'
import joinUsJson from 'apidata/join-us.json'
import joinUsJobsOpeningsJson from 'apidata/join-us-jobs-openings.json'

import { getJobsCms, getJobsCmsT } from 'src/domains/jobs'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us`)
  const data = await res.json()
  return data
}

const fetchJobsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us-jobs-openings`)
  const data = await res.json()
  return data.data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      description: g('description') !== null ? g('description') : '',
      image: '/images/join-us/banner.jpg',
      mobileImage: '/images/join-us/mobile-banner.jpg',
    },
    work_with_arta_description: g('work_with_arta_description'),
    our_values_description: g('our_values_description'),
    arta_cares_description: g('arta_cares_description'),
    job_openings_description: g('job_openings_description'),
    our_values_icons: pageData.data.attributes.our_values_icons,
    our_cares_icons: pageData.data.attributes.our_cares_icons,
    work_with_arta_image: pageData.data.attributes.work_with_arta_image.data.attributes.url || '',
  }
}

const PageJoinUs = (props: { k: any; cms: getJobsCmsT; jobs: any }) => {
  const { k, cms, jobs } = props

  return <JoinUsLayout k={k} jobs={jobs} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const cms = await getJobsCms({ lang: 'en' })

  // CMS join us page is broken
  const pageData = useLocalCms ? joinUsJson : await fetchCmsData()
  const jobs = useLocalCms ? joinUsJobsOpeningsJson.data : await fetchJobsData()
  // const pageData = joinUsJson

  return {
    props: {
      k: massageData(pageData, locale),
      cms,
      jobs,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageJoinUs

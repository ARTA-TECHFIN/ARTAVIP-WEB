import type { GetServerSideProps } from 'next'
import JoinUsLayout from 'src/components/PageJoinUs/JoinUsLayout'
import joinUsJson from 'apidata/join-us.json'

import { getJobsCms, getJobsCmsT } from 'src/domains/jobs'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/join-us`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      title: 'Join Us',
      description: g('description') !== null ? g('description') : '',
      image: '/images/about/banner.jpg',
      mobileImage: '/images/about/mobile-banner.png',
    },
  }
}

const PageJoinUs = (props: { t: any, cms: getJobsCmsT }) => {
  const { t, cms } = props
  const jobs = cms.jobs

  console.log(t)

  return (
    <JoinUsLayout t={t} jobs={jobs} />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const cms = await getJobsCms({ lang: 'en' })

  // CMS join us page is broken
  // const pageData = useLocalCms ? joinUsJson : await fetchCmsData()
  const pageData = joinUsJson

  return {
    props: {
      t: massageData(pageData, locale),
      cms,
    },
  }
}

export default PageJoinUs

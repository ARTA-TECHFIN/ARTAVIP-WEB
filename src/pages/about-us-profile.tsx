import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageAbout from 'src/components/PageAbout/PageAbout'
import aboutUsJson from 'apidata/about-us.json'
import leadershipJson from 'apidata/about-us-leaderships.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/about-us-profile?populate=*`)
  const data = await res.json()
  return data
}

const fetchJoinUsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/join-us?populate=*`)
  const data = await res.json()
  return data
}

const fetchEventData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/about-us-important-events?populate=*`)
  const data = await res.json()
  return data
}
interface responseT {
  title: any
  des: any
}

const massageData = (pageData: any, eventData: any,joinUsData: any, locale: string | undefined = 'en') => {
  const advantageData = joinUsData.data.attributes.our_advantage[0];
  const dutyData = joinUsData.data.attributes.duty_brief[0];
  const timeLineData = joinUsData.data.attributes.TimeLine;

  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const j = (keyWithoutLang: string) => `${joinUsData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const s = (keyWithoutLang: string) => `${advantageData[`${keyWithoutLang}_${locale}`]}`
  const d = (keyWithoutLang: string) => `${dutyData[`${keyWithoutLang}_${locale}`]}`
  let response: responseT[] = []

  timeLineData.map((item:any) => {
    response.push({
      title: item[`title_${locale}`],
      des: item[`des_${locale}`],
    })
  })
  return {
    heroBanner: {
      description: g('description') !== null ? g('description') : '',
      image: '/images/about/211025_image_aboutus_contactus_banner.png',
      mobileImage: '/images/about/211025_image_aboutus_contactus_banner.png',    
    },
    joinUs: {
      description: j('description') !== null ? j('description') : '',
      workWithArtaDescription: j('work_with_arta_description') !== null ? j('work_with_arta_description') : '',
      advTitle: s('title') !== null ? s('title') : '',
      advDes: s('description') !== null ? s('description') : '',
      dutyTitle: d('title') !== null ? d('title') : '',
      dutyDes: d('description') !== null ? d('description') : '',
      timeLineLength: timeLineData.length ,
      timeLine: response,
    },
    profile: {
      description: g('description') !== null ? g('description') : '',
    },
    list: eventData.data
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? aboutUsJson : await fetchCmsData()
  const eventData = useLocalCms ? leadershipJson : await fetchEventData()
  const joinUsData = useLocalCms ? leadershipJson : await fetchJoinUsData()

  return {
    props: {
      k: massageData(pageData, eventData,joinUsData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageAbout
export type PageAboutCmsT = ReturnType<typeof massageData>

import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageAbout from 'src/components/PageAbout/PageAbout'
import aboutUsJson from 'apidata/about-us.json'
import leadershipJson from 'apidata/about-us-leaderships.json'

import leader_1 from 'src/components/PageAbout/images/leader_1.jpg'
import eco_icon1 from 'src/components/PageAbout/images/eco_icon1.svg'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/about-us`)
  const data = await res.json()
  return data
}

const fetchLeadershipData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/about-us-leaderships`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, leadershipData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      description: g('about_us_description') !== null ? g('about_us_description') : '',
      image: '/images/about/banner.jpg',
      mobileImage: '/images/about/mobile-banner.jpg',
    },
    mission: {
      subtitle1: g('vision_mission_line_1'),
      subtitle2: g('vision_mission_line_2'),
    },
    culture: {
      subtitle1: g('culture_value_description'),
      sectionTitle: g('culture_value_subtitle'),
      // prettier-ignore
      valueList: pageData.data.attributes.culture_value_values.map((item: any) => ({
        title: item[`value_${locale}`], description: item[`description_${locale}`],
      })) as { title: string; description: string }[],
    },
    leadership: {
      title: 'Leadership',
      // prettier-ignore
      leaderList: leadershipData.data.sort((a:any, b:any) => a.attributes.priority - b.attributes.priority),
    },
    techFin: {
      subtitle: g('techfin_title'),
      section1Title: g('techfin_subtitle_1'),
      section1Body: g('techfin_content_1'),
      section2Title: g('techfin_subtitle_2'),
      section2Body: g('techfin_content_2'),
    },
    ecosystem: {
      subtitle: g('our_ecosystem_description'),
      itemList: [
        { title: g('our_ecosystem_1'), Component: eco_icon1 },
        { title: g('our_ecosystem_2'), Component: eco_icon1 },
        { title: g('our_ecosystem_3'), Component: eco_icon1 },
        { title: g('our_ecosystem_4'), Component: eco_icon1 },
        { title: g('our_ecosystem_5'), Component: eco_icon1 },
        { title: g('our_ecosystem_6'), Component: eco_icon1 },
        { title: g('our_ecosystem_7'), Component: eco_icon1 },
        { title: g('our_ecosystem_8'), Component: eco_icon1 },
      ],
    },
    techFinVsFinTech: {
      subtitle: g('techfin_vs_fintech_description'),
      techFinTitle: g('techfin_vs_fintech_1_title'),
      techFinBody: g('techfin_vs_fintech_1_content'),
      finTechTitle: g('techfin_vs_fintech_2_title'),
      finTechBody: g('techfin_vs_fintech_2_content'),
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? aboutUsJson : await fetchCmsData()
  const leadershipData = useLocalCms ? leadershipJson : await fetchLeadershipData()

  return {
    props: {
      k: massageData(pageData, leadershipData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageAbout
export type PageAboutCmsT = ReturnType<typeof massageData>

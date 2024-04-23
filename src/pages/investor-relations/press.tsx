import { useState } from 'react'
import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'
import PagePressRelease from 'src/components/PageInvestor/PagePressRelease'
import investorRelationJson from 'apidata/investor-relation.json'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import { links } from 'src/domains/links'
import mediaCentrePressReleasesJson from 'apidata/media-centre-press-releases.json'
import { useTranslation } from 'next-i18next'
import { getMediaCms2, getMediaCmsT2, getSlug } from 'src/domains/media'
import InvestorLayout, { TABS } from 'src/components/PageInvestor/InvestorLayout'



const fetchPressData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-press-releases`
  )
  const data = await res.json()
  return data
}

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/investor-relation`)
  const data = await res.json()
  return data
}


const massageData = (pageData: any,pressData: any,  locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const getKey = (keyWithoutLang: string) => `${`${keyWithoutLang}_${locale}`}`

  return {
    heroBanner: {
      title: 'Investor Relation',
      description: g('description') !== null ? g('description') : '',
      image: '/images/investor-relations/top-banner.jpg',
      mobileImage: '/images/investor-relations/mobile-top-banner.jpg',
      label: '',
    },
    pressPosts: pressData.data
      .sort((a: any, b: any) => a.attributes.date.localeCompare(b.attributes.date))
      .map(({ attributes: press }: any) => ({
        year: +press.date.split('-')[0],
        post: {
          date: press.date,
          slug: press.slug,
          title: press[getKey('title')],
          title_en: press.title_en,
          text: press[getKey('content')],
          pdf: press[getKey('pdf')] ?? {},
        },
      }))
      .reduce((acc: any, curr: any) => {
        const last = acc[acc.length - 1]
        if (last && last.year === curr.year) {
          last.posts.push(curr.post)
        } else {
          acc.push({ year: curr.year, posts: [curr.post] })
        }
        return acc
      }, []) as {
      year: number
      posts: {
        date: string
        title: string
        slug: string
        title_en: string
        text: string
        pdf: any
      }[]
    }[],
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = useLocalCms ? investorRelationJson : await fetchCmsData()
  const pressData = useLocalCms ? mediaCentrePressReleasesJson : await fetchPressData()

  return {
    props: {
      k: massageData(pageData,pressData, locale),
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


const PressRelease = (props: { k: any; locale: string }) => {
  const { t } = useTranslation()
  const [openYear, setOpenYear] = useState(
    (props.k.pressPosts && props.k.pressPosts.sort((a: any, b: any) => b.year - a.year)[0].year) || 2022
  )

  const setOpenYearFunc = (year: number) => {
    if (year == openYear) {
      setOpenYear(0)
    } else {
      setOpenYear(year)
    }
  }
  return (
    <InvestorLayout
      k={props.k}
      tabType={TABS.press_releases}
      gaLog={true}
      seo={{
        title: `${t('page_title.press_release')} | Arta TechFin`,
        description: t('page_description.press_release'),
        keywords: t('page_keywords.press_release'),
      }}
    >
      <PagePressRelease k={props.k.pressPosts} locale={props.locale}/>
    </InvestorLayout>
  )
}

export default PressRelease

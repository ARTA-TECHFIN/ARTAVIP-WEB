import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import { links } from 'src/domains/links'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import mediaCentreJson from 'apidata/media-centre.json'
import mediaCentrePressReleasesJson from 'apidata/media-centre-press-releases.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-center`)
  const data = await res.json()
  return data
}

const fetchPressData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-press-releases`)
  const data = await res.json()
  return data.data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  console.log(pageData)
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      description: g('description') !== null ? g('description') : '',
      image: '/images/media-centre/banner.png',
      mobileImage: '/images/media-centre/mobile-banner.png',
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cms = await getMediaCms({ lang: 'en' })
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = useLocalCms ? mediaCentreJson : await fetchCmsData()
  const pressData = useLocalCms ? mediaCentrePressReleasesJson : await fetchPressData()

  return {
    props: {
      cms,
      press: pressData,
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const PageMediaCenter = (props: { press: any, k: any, cms: getMediaCmsT }) => {
  const { press, k, cms } = props
  console.log( press )
  return (
    <MediaLayout k={k} tabType={MediaTABS.Press_Releases}>
      <div className="arta-container mx-auto">
        {cms.pressPosts.map((yearly:any, index:number) => (
          <CalendarAccordion
            index={index}
            key={yearly.year}
            year={yearly.year}
            events={yearly.posts.map((r:any, i:number) => ({
              date: new Date(r.date),
              title: r.title,
              postPageUrl: `${links.mediaPressPost}/${getSlug(r.title)}`,
            }))}
          />
        ))}
      </div>
    </MediaLayout>
  )
}

export default PageMediaCenter

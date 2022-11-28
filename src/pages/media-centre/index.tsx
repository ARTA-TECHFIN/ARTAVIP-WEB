import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout, MediaTab, MediaTABS } from 'src/components/PageMedia/Layout'
import Link from 'next/link'
import { links } from 'src/domains/links'
import Image from 'next/image'
import mediaCentreJson from 'apidata/media-centre.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-center`)
  const data = await res.json()
  console.log(data)
  return data
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

  return {
    props: {
      cms,
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    }
  }
}

const PageMediaCenter = (props: { cms: getMediaCmsT, k: any }) => {
  const { k, cms } = props
  return (
    <MediaLayout k={k} tabType={MediaTABS.Blog}>
      <div className="arta-container mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {cms.blogPosts.map((post: any, index: number) => (
            <Link
              key={index}
              className="col-span-full md:col-span-6 lg:col-span-4"
              href={`${links.mediaBlogPost}/${getSlug(post.title)}`}
            >
              <div className="w-full cursor-pointer bg-white transition-shadow hover:shadow-postCard">
                <Image width={395} height={246} src={post.image} alt="" className="w-full" />
                <div className="px-6 pt-4 pb-6 md:pt-6 md:pb-12">
                  <span className="text-xs">{post.date}</span>
                  <h5 className="mt-1 text-xl">{post.title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MediaLayout>
  )
}

export default PageMediaCenter

import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import Link from 'next/link'
import { links } from 'src/domains/links'
import Image from 'next/image'
import mediaCentreJson from 'apidata/media-centre.json'
import mediaCentreArtaBlogsJson from 'apidata/media-centre-arta-blogs.json'
import { useRouter } from 'next/router'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-center`)
  const data = await res.json()
  return data
}

const fechBlogsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-arta-blogs`)
  const data = await res.json()
  return data.data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
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
  const blogsData = useLocalCms ? mediaCentreArtaBlogsJson : await fechBlogsData()

  return {
    props: {
      cms,
      blogs: blogsData,
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    }
  }
}

const PageMediaCenter = (props: { blogs: any, cms: getMediaCmsT, k: any }) => {
  const router = useRouter();
  const { locale } = router;
  const { blogs, k, cms } = props
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  console.log(blogs)
  return (
    <MediaLayout k={k} tabType={MediaTABS.Blog}>
      <div className="arta-container mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {blogs.map((post: any, index: number) => (
            <Link
              key={index}
              className="col-span-full md:col-span-6 lg:col-span-4"
              href={`/media-centre/blog-post/${post.id}`}
            >
              <div className="w-full cursor-pointer bg-white transition-shadow hover:shadow-postCard">
                <img src={post.attributes.thumbnail.data?.attributes.url} alt="" className="w-full" />
                <div className="px-6 pt-4 pb-6 md:pt-6 md:pb-12">
                  <span className="text-xs">{post.attributes.date}</span>
                  <h5 className="mt-1 text-xl">{g(post, "title")}</h5>
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

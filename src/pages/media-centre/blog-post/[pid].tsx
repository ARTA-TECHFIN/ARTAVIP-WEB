import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

import { GetStaticPaths, GetStaticProps } from 'next'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout } from 'src/components/PageMedia/Layout'
import Link from 'next/link'
import { textClass } from 'src/components/Text'
import { links } from 'src/domains/links'
import { IconArrowLeft } from 'src/components/Svg/Icon'
import mediaCentreJson from 'apidata/media-centre.json'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-center`)
  const data = await res.json()
  return data
}

const fetchBlogData = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-arta-blogs/${id}`)
  const data = await res.json()
  return data
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
  const pid = context.params?.pid + ""

  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = useLocalCms ? mediaCentreJson : await fetchCmsData()
  const blog = useLocalCms ? mediaCentreJson : await fetchBlogData(pid)

  return {
    props: {
      cms,
      blog: blog,
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Post = (props: { k:any, cms: getMediaCmsT; blog: getMediaCmsT['blogPosts'][number] }) => {
  const { k, cms, blog } = props
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const g = (keyWithoutLang: string) => `${blog.data.attributes[`${keyWithoutLang}_${locale}`]}`
  return (
    <MediaLayout k={k}>
      <div className="arta-container mx-auto mt-8">
        <Link
          className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
          href={links.mediaBlog}
        >
          <IconArrowLeft fill="#593725" className="mr-2 h-4" />
          {t("media.back_blog")}
        </Link>
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <p className="text-xs text-arta-indigo-100">{blog.date}</p>
          <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{blog.title}</h2>
          <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{blog.text}</p>
          <div className="mx-auto mt-12 w-fit">
            <img src={blog.data.attributes.thumbnail?.data.attributes.url} alt="" />
          </div>
        </div>
      </div>
    </MediaLayout>
  )
}

export default Post

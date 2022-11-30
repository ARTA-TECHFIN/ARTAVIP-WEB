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
import { useTranslation } from 'next-i18next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context

  const cms = await getMediaCms({ lang: locale })
  const pid = context.params?.pid

  return {
    props: {
      cms,
      blog: cms.blogPosts.find((blog) => getSlug(blog.title) === pid),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Post = (props: { cms: getMediaCmsT; blog: getMediaCmsT['blogPosts'][number] }) => {
  const { cms, blog } = props
  const { t } = useTranslation('common')
  return (
    <MediaLayout cms={cms}>
      <div className="arta-container mx-auto mt-8">
        <Link
          className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
          href={links.mediaBlog}
        >
          <IconArrowLeft fill="#593725" className="mr-2 h-4" />
          {t('media.back_blog')}
        </Link>
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <p className="text-xs text-arta-indigo-100">{blog.date}</p>
          <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{blog.title}</h2>
          <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{blog.text}</p>
          <div className="mx-auto mt-12 w-fit">
            {/* <img src={blog.image} alt="" /> */}
            <Image src={blog.image} alt="" width={470.39} height={350} />
          </div>
        </div>
      </div>
    </MediaLayout>
  )
}

export default Post

import Image from 'next/image'

import { GetStaticPaths, GetStaticProps } from 'next'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout } from 'src/components/PageMedia/Layout'
import Link from 'next/link'
import { textClass } from 'src/components/Text'
import { links } from 'src/domains/links'
import { IconArrowLeft } from 'src/components/Svg/Icon'

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = await getMediaCms({ lang: 'en' })

  const paths = cms.blogPosts.map((blog, index) => ({
    params: { pid: getSlug(blog.title) },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cms = await getMediaCms({ lang: 'en' })
  const pid = params?.pid

  return {
    props: {
      cms,
      blog: cms.blogPosts.find((blog) => getSlug(blog.title) === pid)!,
    },
  }
}

const Post = (props: { cms: getMediaCmsT; blog: getMediaCmsT['blogPosts'][number] }) => {
  const { cms, blog } = props
  return (
    <MediaLayout cms={cms}>
      <div className="arta-container mx-auto mt-8">
        <Link
          className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
          href={links.mediaBlog}
        >
          <IconArrowLeft fill="#593725" className="mr-2 h-4" />
          {'Back to listing'}
        </Link>
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <p className="text-xs text-arta-indigo-100">{blog.date}</p>
          <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{blog.title}</h2>
          <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{blog.text}</p>
          <div className="mx-auto mt-12 w-fit">
            <Image src={blog.image} alt="" width={470.39} height={350} />
          </div>
        </div>
      </div>
    </MediaLayout>
  )
}

export default Post

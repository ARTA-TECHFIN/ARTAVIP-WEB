import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { MediaLayout } from 'src/components/PageMedia/Layout'
import { IconArrowLeft } from 'src/components/Svg/Icon'
import { textClass } from 'src/components/Text'
import { links } from 'src/domains/links'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import parse from 'html-react-parser'

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = await getMediaCms({ lang: 'en' })

  const paths = cms.pressPosts.flatMap((pressByYear) => {
    return pressByYear.posts.map((post, index) => ({
      params: { slug: getSlug(post.title) },
    }))
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const cms = await getMediaCms({ lang: locale })
  const slug = params?.slug

  let post: any = null
  cms.pressPosts.some((pressByYear) => {
    const r = pressByYear.posts.find((post) => getSlug(post.title) === slug)
    if (r) post = r

    return r
  })!

  return {
    props: {
      cms,
      post,
    },
  }
}

const PressPost = (props: {
  cms: getMediaCmsT
  post: getMediaCmsT['pressPosts'][number]['posts'][number]
}) => {
  const { cms, post } = props

  return (
    <MediaLayout cms={cms}>
      <div className="arta-container mx-auto mt-8">
        <Link
          className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
          href={links.mediaPress}
        >
          <IconArrowLeft fill="#593725" className="mr-2 h-4" />
          {'Back to listing'}
        </Link>
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <p className="text-xs text-arta-indigo-100">{post.date}</p>
          <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{post.title}</h2>
          <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{parse(post.text)}</p>
        </div>
      </div>
    </MediaLayout>
  )
}

export default PressPost

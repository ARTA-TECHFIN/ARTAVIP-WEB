import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { MediaLayout } from 'src/components/PageMedia/Layout'
import { IconArrowLeft } from 'src/components/Svg/Icon'
import { textClass } from 'src/components/Text'
import { links } from 'src/domains/links'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import parse from 'html-react-parser'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { dateFormat } from 'utils/date'

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const cms = await getMediaCms({ lang: locale })

  const slug = params?.slug

  let post: any = null
  cms.pressPosts.some((pressByYear) => {
    const r = pressByYear.posts.find((post) => post.slug === slug)
    if (r) post = r

    return r
  })

  return {
    props: {
      cms,
      post,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const PressPost = (props: {
  cms: getMediaCmsT
  post: getMediaCmsT['pressPosts'][number]['posts'][number]
}) => {
  const { cms, post } = props
  const { t } = useTranslation('common')

  return (
    <MediaLayout
      cms={cms}
      seo={{
        title: `${post.title} | Arta TechFin`,
        description: t('page_description.press_release'),
        keywords: t('page_keywords.press_release'),
      }}
      gaType="others"
      gaObj={{
        event_name: 'Press_Release_Content',
        content: {
          Content: post.slug,
        },
      }}
    >
      <div className="arta-container mx-auto mt-8">
        <Link
          className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
          href={links.mediaPress}
        >
          <IconArrowLeft fill="#593725" className="mr-2 h-4" />
          {t('media.back_press')}
        </Link>
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <p className="text-xs text-arta-indigo-100">{dateFormat(new Date(post.date))}</p>
          <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{post.title}</h2>
          <div className={`blog-content mt-6 ${textClass.body_regular_verah} text-black`}>
            {parse(post.text)}
          </div>
          {post.pdf.data && (
            <ButtonAnimated
              as="a"
              external={true}
              href={post.pdf.data.attributes.url}
              className="border-arta-sand-100 text-arta-sand-100"
            >
              {t('media.download_pdf')}
            </ButtonAnimated>
          )}
        </div>
      </div>
    </MediaLayout>
  )
}

export default PressPost

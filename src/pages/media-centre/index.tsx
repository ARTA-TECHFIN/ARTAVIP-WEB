import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import Link from 'next/link'
import { dateFormat } from 'utils/date'
import { useTranslation } from 'next-i18next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context

  return {
    props: {
      cms: await getMediaCms({ lang: locale }),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const PageMediaCenter = (props: { cms: getMediaCmsT }) => {
  const { cms } = props
  const { t } = useTranslation()
  return (
    <MediaLayout
      cms={cms}
      tabType={MediaTABS.Blog}
      seo={{
        title: `${t('page_title.media_center')} | Arta TechFin`,
        description: t('page_description.media_center'),
        keywords: t('page_keywords.media_center'),
      }}
      gaLog="Media Centre - Arta Blog"
    >
      <div className="arta-container mx-auto">
        <div className="grid grid-cols-12">
          {cms.blogPosts
            .sort((a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
            .map((post: any, index: number) => (
              <Link
                key={index}
                className="col-span-full md:col-span-6 lg:col-span-4 m-2 md:m-4"
                href={`/media-centre/blog-post/${post.slug}`}
              >
                <div className="h-full w-full cursor-pointer bg-white transition-shadow hover:shadow-postCard">
                  <div className="relative h-[0] pb-[56.25%] w-full overflow-hidden">
                    <img src={post.image} alt="" className="absolute h-full w-full object-cover" />
                  </div>
                  <div className="px-6 pt-4 pb-6 md:pt-6 md:pb-12">
                    <span className="text-xs">{dateFormat(new Date(post.date))}</span>
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

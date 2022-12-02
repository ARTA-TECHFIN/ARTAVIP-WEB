import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import Link from 'next/link'

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
  return (
    <MediaLayout cms={cms} tabType={MediaTABS.Blog}>
      <div className="arta-container mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {cms.blogPosts.map((post, index) => (
            <Link
              key={index}
              className="col-span-full h-full md:col-span-6 lg:col-span-4"
              href={`/media-centre/blog-post/${getSlug(post.title)}`}
            >
              <div className="w-full h-full cursor-pointer bg-white transition-shadow hover:shadow-postCard">
                <div className="relative w-full aspect-video">
                  <img src={post.image} alt="" className="w-full object-cover absolute h-full" />
                </div>
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

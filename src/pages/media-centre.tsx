import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
import { MediaLayout, MediaTab, MediaTABS } from 'src/components/PageMedia/Layout'
import Link from 'next/link'
import { links } from 'src/domains/links'
import Image from 'next/image'

export const getStaticProps = async () => {
  const cms = await getMediaCms({ lang: 'en' })
  return {
    props: { cms },
  }
}

const PageMediaCenter = (props: { cms: getMediaCmsT }) => {
  const { cms } = props
  return (
    <MediaLayout cms={cms}>
      <MediaTab tabType={MediaTABS.Blog} />

      <div className="arta-container mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {cms.blogPosts.map((post, index) => (
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

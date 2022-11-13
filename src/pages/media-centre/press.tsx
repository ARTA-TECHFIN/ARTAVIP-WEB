import { InferGetStaticPropsType } from 'next'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'
import { MediaLayout, MediaTab, MediaTABS } from 'src/components/PageMedia/Layout'
import { links } from 'src/domains/links'
import { getMediaCms, getSlug } from 'src/domains/media'

export const getStaticProps = async () => {
  const cms = await getMediaCms({ lang: 'en' })
  return {
    props: { cms },
  }
}

const PageMediaCenter = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { cms } = props
  return (
    <MediaLayout cms={cms}>
      <MediaTab tabType={MediaTABS.Press_Releases} />
      <div className="arta-container mx-auto">
        {cms.pressPosts.map((yearly, index) => (
          <CalendarAccordion
            index={index}
            key={yearly.year}
            year={yearly.year}
            events={yearly.posts.map((r, i) => ({
              date: new Date(r.date),
              title: r.title,
              postPageUrl: `${links.mediaPressPost}/${getSlug(r.title)}`,
            }))}
          />
        ))}
      </div>
    </MediaLayout>
  )
}

export default PageMediaCenter

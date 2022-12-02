import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import { links } from 'src/domains/links'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'

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
  console.log(cms.pressPosts)
  return (
    <MediaLayout cms={cms} tabType={MediaTABS.Press_Releases}>
      <div className="arta-container mx-auto">
        {cms.pressPosts.sort((a, b) => b.year - a.year).map((yearly, index) => (
          <CalendarAccordion
            index={index}
            key={yearly.year}
            year={yearly.year}
            events={yearly.posts.map((r, i) => ({
              date: new Date(r.date),
              title: r.title,
              postPageUrl: `${links.mediaPressPost}/${getSlug(r.title_en)}`,
            }))}
          />
        ))}
      </div>
    </MediaLayout>
  )
}

export default PageMediaCenter

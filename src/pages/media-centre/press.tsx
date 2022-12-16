import { useState } from 'react'
import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'
import { MediaLayout, MediaTABS } from 'src/components/PageMedia/Layout'
import { links } from 'src/domains/links'
import { getMediaCms, getMediaCmsT, getSlug } from 'src/domains/media'
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
  const [openYear, setOpenYear] = useState(
    (cms.pressPosts && cms.pressPosts.sort((a: any, b: any) => b.year - a.year)[0].year) || 2022
  )
  const { t } = useTranslation()
  const setOpenYearFunc = (year: number) => {
    if (year == openYear) {
      setOpenYear(0)
    } else {
      setOpenYear(year)
    }
  }
  return (
    <MediaLayout
      cms={cms}
      tabType={MediaTABS.Press_Releases}
      seo={{
        title: `${t('page_title.press_release')} | Arta TechFin`,
        description: t('page_description.press_release'),
        keywords: t('page_keywords.press_release'),
      }}
      gaLog="Media Centre - Press Release"
    >
      <div className="arta-container mx-auto">
        {cms.pressPosts
          .sort((a: any, b: any) => b.year - a.year)
          .map((yearly: any, index: any) => (
            <CalendarAccordion
              index={index}
              key={yearly.year}
              year={yearly.year}
              events={yearly.posts.map((r: any) => ({
                date: new Date(r.date),
                title: r.title,
                postPageUrl: `${links.mediaPressPost}/${r.slug}`,
              }))}
              openYear={openYear}
              setOpenYear={setOpenYearFunc}
            />
          ))}
      </div>
    </MediaLayout>
  )
}

export default PageMediaCenter

import { Seo } from 'src/components/Seo'
import Header from 'src/components/Header/Header'
import { HeroBanner } from 'src/components/HeroBanner'
import Footer from 'src/components/Footer'
import { FC } from 'react'
import { useState } from 'react'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'

import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'

import { useTranslation } from 'next-i18next'

const PagePressRelease: FC<{ k: any, locale: string }> = ({ k, locale }) => {
  const [openYear, setOpenYear] = useState(
    (k.pressPosts && k.pressPosts.sort((a: any, b: any) => b.year - a.year)[0].year) || 2024
  )

  const setOpenYearFunc = (year: number) => {
    if (year == openYear) {
      setOpenYear(0)
    } else {
      setOpenYear(year)
    }
  }
  return (
    <>

      <main className="flex flex-col bg-arta-eggshell-100 pb-28 text-arta-sand-100 md:pb-[150px]">
      <div className="arta-container mx-auto">
        {k.sort((a: any, b: any) => b.year - a.year)
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
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PagePressRelease

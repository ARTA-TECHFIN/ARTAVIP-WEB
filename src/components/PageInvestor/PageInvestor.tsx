import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'

import { getReportCms, getReportList, reportRequestT } from 'src/domains/investor'
import { FC } from 'react'

const tabs = {
  'announcement': { reportType: 'acl' },
  'financial-report': { reportType: 'r' },
  'financial-calendar': { reportType: 'r' },
  'esg': { reportType: 'acl' },
}

type tabsT = keyof typeof tabs

type propsT = {
  cms: Awaited<ReturnType<typeof getReportCms>>
  tabType: tabsT
}

const PageInvestorPage: FC<propsT> = ({ cms }) => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          label={cms.heroBanner.label}
        />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageInvestorPage

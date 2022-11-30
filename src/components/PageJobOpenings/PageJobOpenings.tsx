import type { NextPage } from 'next'
import Link from 'next/link'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import SectionBanner from './SectionBanner'
import SectionJobView from './SectionJobView'
import { IconArrowLeft } from 'src/components/Svg/Icon'
import { textClass } from 'src/components/Text'
import { links } from 'src/domains/links'
import { useTranslation } from 'next-i18next'

const PageJobOpenings: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <SectionBanner />
        <div className="bg-arta-eggshell-100 pt-12 pb-[150px]">
          <div className="arta-container mx-auto">
            <Link
              className={`flex cursor-pointer items-center underline mb-4 ${textClass.body_regular_verah}`}
              href={links.joinUs}
            >
              <IconArrowLeft fill="#593725" className="mr-2 h-4" />
              {t("join_us.back")}
            </Link>
            <SectionJobView />
          </div>
        </div>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageJobOpenings

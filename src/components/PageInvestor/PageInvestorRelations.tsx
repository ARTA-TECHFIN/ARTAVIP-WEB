import type { NextPage } from 'next'
import Link from 'next/link'

import { ReportCard } from './ReportCard'
import { links } from 'src/domains/links'
import { useTranslation } from 'next-i18next'
import { AnnouncementIcon, ReportIcon } from '../Svg/Icon'

const PageInvestorRelations: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className="pt-4 md:pt-16">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <ul className="col-span-full col-span-full grid grid-cols-12 sm:gap-8 gap-4 sm:mt-0 mt-4">
          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorResultAnnouncements}>
              <ReportCard title={t("join_us.results_announcements")} Icon={AnnouncementIcon} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorInterimAnnualReports}>
              <ReportCard title={t("join_us.interim_annual_reports")} Icon={AnnouncementIcon} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorAnnouncementsNotices}>
              <ReportCard title={t("join_us.announments_noties")} Icon={ReportIcon} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorCirculars}>
              <ReportCard title={t("join_us.circulars")} Icon={ReportIcon} />
            </Link>
          </li>

          <li className="md:col-span-6 col-span-12">
            <Link href={links.investorListingDocuments}>
              <ReportCard title={t("join_us.listing_documents")} Icon={ReportIcon} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PageInvestorRelations

import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { textClass } from 'src/components/Text'
import parse from 'html-react-parser'

const PageCorporateInformation: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')

  const basicInformation = [
    {label: t("corporate_information.company_name"), value: "ARTA TechFin Corporation Limited"},
    {label: t("corporate_information.sector"), value: "Consolidated Enterprises"},
    {label: t("corporate_information.principal_place_of_business"), value: "Units 1-2, Level 9\nK11 ATELIER King's Road\n728 King's Road, Quarry Bay\nHong Kong"},
    {label: t("corporate_information.registered_office"), value: "Cricket Square\nHutchins Drive\nP.O. Box 2681\nGrand Cayman KY1-1111\nCayman Islands"},
    {label: t("corporate_information.website"), value: "http://www.artatechfin.com"},
    {label: t("corporate_information.phone"), value: "(852) 3513 8279"},
    {label: t("corporate_information.fax"), value: "(852) 2507 2009"},
    {label: t("corporate_information.financial_year_end"), value: "March 31"},
  ]

  const boardOfDirectors = [
    {label: t("corporate_information.executive_directors"), value: "<ul><li>Mr. Lau Fu Wing, Eddie (Chief Executive Officer)</li><li>Ms. Yeung Shuet Fan Pamela</li><li>Ms. Li Chuchu, Tracy</li>"},
    {label: t("corporate_information.non_executive_directors"), value: "<ul><li>Dr. Cheng Chi-Kong, Adrian JP</li><li>Mr. Han Kam Leung, Michael</li></ul>"},
    {label: t("corporate_information.independent_non_executive_directors"), value: "<ul><li>Ms. Ling Kit Sum Imma</li><li>Mr. Lo Chun Yu Toby</li><li>Dr. Tam Lai Fan Gloria</li></ul>"},
  ]

  const legalCounsels = [
    {label: t("corporate_information.hong_kong"), value: "Reed Smith Richards Butler\n17/F One Island East\nTaikoo Place, 18 Westlands Road\nQuarry Bay, Hong Kong"},
    {label: t("corporate_information.cayman_islands"), value: "Conyers Dill & Pearman\n29th Floor, One Exchange Square\n8 Connaught Place\nCentral, Hong Kong"},
  ]

  const shareInformation = [
    {label: t("corporate_information.hkex_stock_code"), value: "279"},
    {label: t("corporate_information.listing_date"), value: "11th May, 1988"},
    {label: t("corporate_information.share_registrar"), value: "Tricor Secretaries Limited\n17/F, Far East Finance Centre\n16 Harcourt Road\nHong Kong"},
  ]

  return (
    <div className="pt-16">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.basic_information")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              basicInformation.map((j) => {
                return (
                  <div className="col-span-full sm:col-span-6">
                    <div className="text-base text-black">
                      <div className={`font-bold`}>{j.label}</div>
                      <p className="whitespace-pre">{parse(j.value)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.board_of_directors")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              boardOfDirectors.map((j) => {
                return (
                  <div className="col-span-full sm:col-span-6">
                    <div className="text-base text-black">
                      <div className={`font-bold`}>{j.label}</div>
                      <p className="whitespace-pre">{parse(j.value)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.finance_and_admin")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              boardOfDirectors.map((j) => {
                return (
                  <div className="col-span-full sm:col-span-6">
                    <div className="text-base text-black">
                      <div className={`font-bold`}>{j.label}</div>
                      <p className="whitespace-pre">{parse(j.value)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.legal_counsels")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              legalCounsels.map((j) => {
                return (
                  <div className="col-span-full sm:col-span-6">
                    <div className="text-base text-black">
                      <div className={`font-bold`}>{j.label}</div>
                      <p className="whitespace-pre">{parse(j.value)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.share_information")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              shareInformation.map((j) => {
                return (
                  <div className="col-span-full sm:col-span-6">
                    <div className="text-base text-black">
                      <div className={`font-bold`}>{j.label}</div>
                      <p className="whitespace-pre">{parse(j.value)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageCorporateInformation

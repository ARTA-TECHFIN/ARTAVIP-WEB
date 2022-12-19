import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { textClass } from 'src/components/Text'
import parse from 'html-react-parser'
import { dateFormat } from 'utils/date'

const PageCorporateInformation: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')

  const basicInformation = [
    {label: t("corporate_information.company_name"), value: k.ci_company_name},
    {label: t("corporate_information.sector"), value: k.ci_sector},
    {label: t("corporate_information.principal_place_of_business"), value: k.ci_principal_place},
    {label: t("corporate_information.registered_office"), value: k.ci_register_office},
    {label: t("corporate_information.website"), value: k.ci_web_address, isLink: true},
    {label: t("corporate_information.phone"), value: k.ci_phone_number},
    {label: t("corporate_information.fax"), value: k.ci_fax_number},
    {label: t("corporate_information.financial_year_end"), value: k.ci_financial_year_end},
  ]

  const boardOfDirectors = [
    {label: t("corporate_information.executive_directors"), value: k.ci_executive_directors},
    {label: t("corporate_information.non_executive_directors"), value: k.ci_non_executive_directors},
    {label: t("corporate_information.independent_non_executive_directors"), value: k.ci_independent_directors},
  ]

  const financeAndAdmin = [
    {label: t("corporate_information.company_secretary"), value: k.ci_company_secretory},
    {label: t("corporate_information.principal_bankers"), value: k.ci_principal_bankers},
    {label: t("corporate_information.auditors"), value: k.ci_auditors },
  ]

  const legalCounsels = [
    {label: '', value: k.ci_legal_counsels_1},
    {label: '', value: k.ci_legal_counsels_2},
  ]

  const shareInformation = [
    {label: t("corporate_information.hkex_stock_code"), value: k.ci_hkex_stock_code},
    {label: t("corporate_information.listing_date"), value: k.ci_listing_date, isDate: true},
    {label: t("corporate_information.share_registrar"), value: k.ci_share_register_transfer_office},
  ]

  return (
    <div className="pt-8">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.basic_information")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              basicInformation.map((j, i) => {
                return (
                  <div className="col-span-full sm:col-span-6" key={i}>
                    <div className="text-base text-arta-sand-100">
                      <div className={`font-bold font-Neue`}>{j.label}</div>
                      <div className="whitespace-breakspace font-Neue">{j.isLink? <a className="underline" href={j.value} target="_blank" rel="noreferrer">{j.value}</a> : parse(j.value)}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.board_of_directors")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              boardOfDirectors.map((j, i) => {
                return (
                  <div className="col-span-full sm:col-span-6" key={i}>
                    <div className="text-base text-arta-sand-100">
                      <div className={`font-bold font-Neue`}>{j.label}</div>
                      <div className="whitespace-breakspace font-Neue">{parse(j.value)}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.finance_and_admin")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              financeAndAdmin.map((j, i) => {
                return (
                  <div className="col-span-full sm:col-span-6" key={i}>
                    <div className="text-base text-arta-sand-100">
                      <div className={`font-bold font-Neue`}>{j.label}</div>
                      <div className="font-Neue">{parse(j.value)}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.legal_counsels")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            {
              legalCounsels.map((j, i) => {
                return (
                  <div className="col-span-full sm:col-span-6" key={i}>
                    <div className="text-base text-arta-sand-100">
                      <div className={`font-bold font-Neue`}>{j.label}</div>
                      <div className="whitespace-breakspace font-Neue">{parse(j.value)}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t("corporate_information.share_information")}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 pb-10 sm:gap-y-8">
            {
              shareInformation.map((j, i) => {
                return (
                  <div className="col-span-full sm:col-span-6" key={i}>
                    <div className="text-base text-arta-sand-100">
                      <div className={`font-bold font-Neue`}>{j.label}</div>
                      <div className="whitespace-breakspace font-Neue">{j.isDate? dateFormat(new Date(j.value)) :parse(j.value)}</div>
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

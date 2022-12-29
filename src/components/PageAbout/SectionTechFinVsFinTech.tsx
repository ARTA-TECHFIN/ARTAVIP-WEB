import { textClass } from 'src/components/Text'
import { PageAboutCmsT } from 'src/pages/about-us'
import { useTranslation } from 'next-i18next';

export const SectionTechFinVsFinTech = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  const { t } = useTranslation('common')

  return (
    <div
      className={`group/bg relative overflow-hidden bg-[#DFD8CA] bg-[url('/images/compare_bg_mobile.png')] bg-cover bg-fixed md:pb-[150px] lg:bg-[url('/images/compare_bg.jpg')]`}
    >
      <div className="arta-container px-6 md:px-12 relative mx-auto grid grid-cols-12 py-20 md:py-[150px] md:py-12">
        <div className="col-span-full mb-12 block md:hidden">
          <h2 className={`${textClass.h2_style2} mb-4`}>{t("about_us.techfin_vs_fintech")}</h2>
          <span className={textClass.body_regular}>{k.techFinVsFinTech.subtitle}</span>
        </div>
        <div className="col-span-full flex items-center justify-center md:col-span-5">
          <div className="flex w-full flex-col items-center justify-center rounded-full px-6 text-center h-0 pb-[100%] md:translate-y-12 bg-arta-eggshell-100 shadow-blogPost relative">
            <div className="absolute w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3
                className={`${textClass.h2_style2} flex w-full  items-center justify-center rounded-full md:mb-0 `}
              >
                {k.techFinVsFinTech.techFinTitle}
              </h3>
              <span className={`${textClass.body_regular} hidden md:mx-auto md:block`}>
                {k.techFinVsFinTech.techFinBody}
              </span>
            </div>
          </div>
        </div>
        <p className={`${textClass.body_regular} col-span-full text-center mt-8 mb-4 md:hidden`}>
          {k.techFinVsFinTech.techFinBody}
        </p>
        <div className="col-span-full my-8 flex items-center justify-center md:col-span-2 md:mt-0">
          <span className={textClass.h1_style2}>VS</span>
        </div>
        <div className="col-span-full md:col-span-5 ">
          <div className="hidden md:block">
            <h2 className={`${textClass.h2_style2} mb-4`}>{t("about_us.techfin_vs_fintech")}</h2>
            <span className={textClass.body_regular}>{k.techFinVsFinTech.subtitle}</span>
          </div>
          <div className="flex h-0 pb-[100%] w-full flex-col items-center justify-center rounded-full px-6 text-center md:translate-y-12 bg-arta-eggshell-100 shadow-blogPost relative">
            <div className="absolute md:w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3
                className={`${textClass.h2_style2} flex w-full  items-center justify-center rounded-full md:mb-0`}
              >
                {k.techFinVsFinTech.finTechTitle}
              </h3>
              <span className={`${textClass.body_regular} hidden md:mx-auto md:block`}>
                {k.techFinVsFinTech.finTechBody}
              </span>
            </div>
          </div>
        </div>
        <p className={`${textClass.body_regular} col-span-full text-center mt-8 mb-4 md:hidden`}>
          {k.techFinVsFinTech.finTechBody}
        </p>
      </div>
    </div>
  )
}

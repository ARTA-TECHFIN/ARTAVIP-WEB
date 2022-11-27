import { textClass } from 'src/components/Text'
import { PageAboutCmsT } from 'src/pages/about'

export const SectionTechFinVsFinTech = (props: { k: PageAboutCmsT }) => {
  const { k } = props
  return (
    <div
      className={`group/bg relative overflow-hidden bg-[#DFD8CA] bg-[url('/images/compare_bg_mobile.png')] bg-cover bg-fixed md:pb-[150px] lg:bg-[url('/images/compare_bg.jpg')]`}
    >
      <div className="arta-container relative mx-auto grid grid-cols-12  py-20 md:py-[150px] md:py-12">
        <div className="col-span-full mb-12 block md:hidden">
          <h2 className={`${textClass.h2_style2} mb-4`}>{k.techFinVsFinTech.title}</h2>
          <span className={textClass.body_regular}>{k.techFinVsFinTech.subtitle}</span>
        </div>
        <div className="col-span-full flex items-center justify-center md:col-span-5">
          <div className="flex aspect-auto w-full flex-col items-center justify-center rounded-full px-6 text-center md:aspect-square md:translate-y-12 md:bg-arta-eggshell-100 md:p-12 md:shadow-blogPost">
            <h3
              className={`${textClass.h2_style2} mb-6 flex aspect-square w-full  items-center justify-center rounded-full bg-arta-eggshell-100 shadow-circle md:mb-0 md:aspect-auto md:bg-transparent md:shadow-none`}
            >
              {k.techFinVsFinTech.techFinTitle}
            </h3>
            <span className={`${textClass.body_regular} -mx-6 md:mx-auto`}>
              {k.techFinVsFinTech.techFinBody}
            </span>
          </div>
        </div>
        <div className="col-span-full my-8 flex items-center justify-center md:col-span-2 md:mt-0">
          <span className={textClass.h1_style2}>VS</span>
        </div>
        <div className="col-span-full md:col-span-5 ">
          <div className="hidden md:block">
            <h2 className={`${textClass.h2_style2} mb-4`}>{k.techFinVsFinTech.title}</h2>
            <span className={textClass.body_regular}>{k.techFinVsFinTech.subtitle}</span>
          </div>
          <div className="flex aspect-auto w-full flex-col items-center justify-center rounded-full px-6 text-center md:aspect-square md:translate-y-12 md:bg-arta-eggshell-100 md:p-12 md:shadow-blogPost">
            <h3
              className={`${textClass.h2_style2} mb-6 flex aspect-square w-full  items-center justify-center rounded-full bg-arta-eggshell-100 shadow-circle md:mb-0 md:aspect-auto md:bg-transparent md:shadow-none`}
            >
              {k.techFinVsFinTech.finTechTitle}
            </h3>
            <span className={`${textClass.body_regular} -mx-6 md:mx-auto`}>
              {k.techFinVsFinTech.finTechBody}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

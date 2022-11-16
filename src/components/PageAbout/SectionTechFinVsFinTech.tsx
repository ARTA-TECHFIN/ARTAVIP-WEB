import Image from 'next/image'
import compare_bg from './images/compare_bg.jpg'
import compare_bg_mobile from './images/compare_bg_mobile.png'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionTechFinVsFinTech = () => {
  return (
    <div className="group/bg relative overflow-hidden md:pb-[150px] bg-[#DFD8CA]">
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 md:group-hover/bg:scale-100">
        <Image src={compare_bg} alt="" fill className="object-cover md:block hidden" />
        <Image src={compare_bg_mobile} alt="" fill className="object-cover mt-40 md:hidden block" />
      </div>

      <div className="arta-container mx-auto relative grid grid-cols-12  md:py-[150px] py-20 md:py-12">
        <div className='md:hidden block col-span-full mb-12'>
          <h2 className={`${textClass.h2_style2} mb-4`}>{t.techFinVsFinTech.title}</h2>
          <span className={textClass.body_regular}>{t.techFinVsFinTech.subtitle}</span>
        </div>
        <div className="md:col-span-5 col-span-full flex items-center justify-center">
          <div className="flex md:aspect-square aspect-auto w-full md:translate-y-12 flex-col items-center justify-center rounded-full md:bg-arta-eggshell-100 md:p-12 px-6 text-center md:shadow-blogPost">
            <h3 className={`${textClass.h2_style2} aspect-square md:aspect-auto md:bg-transparent bg-arta-eggshell-100  w-full flex items-center justify-center rounded-full md:mb-0 mb-6 shadow-circle md:shadow-none`}>{t.techFinVsFinTech.techFinTitle}</h3>
            <span className={`${textClass.body_regular} md:mx-auto -mx-6`}>{t.techFinVsFinTech.techFinBody}</span>
          </div>
        </div>
        <div className="md:col-span-2 col-span-full md:mt-0 my-8 flex items-center justify-center">
          <span className={textClass.h1_style2}>VS</span>
        </div>
        <div className="md:col-span-5 col-span-full ">
          <div className='md:block hidden'>
            <h2 className={`${textClass.h2_style2} mb-4`}>{t.techFinVsFinTech.title}</h2>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.subtitle}</span>
          </div>
          <div className="flex md:aspect-square aspect-auto w-full md:translate-y-12 flex-col items-center justify-center rounded-full md:bg-arta-eggshell-100 md:p-12 px-6 text-center md:shadow-blogPost">
            <h3 className={`${textClass.h2_style2} aspect-square md:aspect-auto md:bg-transparent bg-arta-eggshell-100  w-full flex items-center justify-center rounded-full md:mb-0 mb-6 shadow-circle md:shadow-none`}>{t.techFinVsFinTech.finTechTitle}</h3>
            <span className={`${textClass.body_regular} md:mx-auto -mx-6`}>{t.techFinVsFinTech.finTechBody}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

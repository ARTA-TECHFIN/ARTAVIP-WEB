import Image from 'next/image'
import compare_bg from './images/compare_bg.jpg'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionTechFinVsFinTech = () => {
  return (
    <div className="group/bg relative overflow-hidden pb-36">
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={compare_bg} alt="" fill className="object-cover" />
      </div>

      <div className="arta-container relative grid grid-cols-12 pt-36">
        <div className="col-span-5 flex items-center justify-center">
          <div className="flex aspect-square w-full -translate-y-12 flex-col items-center justify-center rounded-full bg-arta-eggshell-100 p-12 text-center">
            <h3 className={textClass.h2_style2}>{t.techFinVsFinTech.techFinTitle}</h3>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.techFinBody}</span>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <span className={textClass.h1_style2}>VS</span>
        </div>
        <div className="col-span-5">
          <div>
            <h2 className={`${textClass.h2_style2} mb-4`}>{t.techFinVsFinTech.title}</h2>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.subtitle}</span>
          </div>
          <div className="flex aspect-square w-full translate-y-12 flex-col items-center justify-center rounded-full bg-arta-eggshell-100 p-12 text-center">
            <h3 className={textClass.h2_style2}>{t.techFinVsFinTech.finTechTitle}</h3>
            <span className={textClass.body_regular}>{t.techFinVsFinTech.finTechBody}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

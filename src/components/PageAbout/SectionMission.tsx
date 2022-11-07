import Image from 'next/image'
import mission_bg from './images/mission_bg.png'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionMission = () => {
  return (
    <div className="group/bg relative overflow-hidden" id="mission">
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={mission_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container mx-auto relative flex flex-col items-center justify-center py-36">
        <h2 className={`${textClass.title_style2} mb-4 text-center text-arta-eggshell-100`}>
          {t.mission.title}
        </h2>
        <span className={`${textClass.h2_style2} -translate-x-24 text-arta-snow-100`}>
          {t.mission.subtitle1}
        </span>
        <span className={`${textClass.h2_style2} translate-x-24 text-arta-snow-100`}>
          {t.mission.subtitle2}
        </span>
      </div>
    </div>
  )
}

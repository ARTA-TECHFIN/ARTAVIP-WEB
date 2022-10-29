import Image from 'next/image'
import leadership_bg from './images/leadership_bg.png'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionLeadership = () => {
  return (
    <div className="group/bg relative overflow-hidden" id="leadership">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={leadership_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container relative py-36">
        <h2 className={`${textClass.h2_style2} mb-2`}>{t.leadership.title}</h2>
        <ul className="flex w-full max-w-full flex-nowrap overflow-x-auto">
          {t.leadership.leaderList.map((leader, index) => (
            <li key={index} className="mr-8 flex w-[14rem] min-w-[14rem] flex-col last:mr-0">
              <div className="relative mb-4 aspect-[3/4] h-auto w-full overflow-hidden">
                <Image src={leader.image} alt="" fill className="object-cover" />
              </div>
              <span className={`${textClass.small_text} whitespace-pre`}>{leader.title}</span>
              <span className={textClass.h6}>{leader.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { textClass } from '../Text'

export const SectionWorkWithArta = () => {
  return (
    <div className="group/bg relative overflow-hidden">
      <div className="easeInOutSine absolute h-full w-full scale-150 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image
          src="/images/asset-management/bg-introduction.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="arta-container relative z-1 mx-auto flex flex-col items-center py-12 md:py-[150px] lg:flex-row lg:space-x-[139px]">
        <div className="lg:max-w-[395px]">
          <h2 className={`${textClass.h2_style2}`}>{`Work with ARTA`}</h2>
          <p className={`${textClass.body_regular_verah} mt-4`}>
            {`At ARTA TechFin, our vision is to “Break Barriers for Greatness”. We aim to dismantle conventional financial barriers and consistently create changes. Additionally, we are      committed to putting our customers first, understanding their needs to practically innovate and providing an accessible, friendly and knowledge-driven experience.`}
          </p>
          <p className={`${textClass.body_regular_verah} mt-6`}>
            {` We label ourselves as a TechFin company, which means we deliver financial services and solutions by thinking like a Tech company. But we are more than that. We think Tech, and we think People. Our people are our greatest asset. We believe that brilliant people working in a great culture will produce the best results. We appreciate and treasure talents who are willing to say no to being second or to the norm, who dare to speak up and give constructive criticism, and who can deliver results together with teammates.`}
          </p>
        </div>
        <div className="mt-[25px] max-w-[714px] lg:mt-0">
          <Image
            src="/images/join-us/28531C75-1658-4AFB-8864-C8F6F1AB012A.png"
            alt=""
            width={714}
            height={473}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}


export default SectionWorkWithArta
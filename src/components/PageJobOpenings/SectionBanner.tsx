import Image from 'next/image'
import { textClass } from '../Text'

const SectionBanner = () => {
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
      <div className="arta-container mx-auto h-[480px] py-12 relative z-1 flex flex-col justify-end">
            <p className={textClass.body_regular_verah}>{`Our Businesses`}</p>
            <h1 className={`${textClass.h1_style2} mt-1`}>{`Job Openings`}</h1>
      </div>
    </div>
  )
}

export default SectionBanner

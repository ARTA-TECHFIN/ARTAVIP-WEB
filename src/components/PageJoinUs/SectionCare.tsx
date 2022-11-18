import Image from 'next/image'
import { textClass } from '../Text'

import {
  StartUp,
  FlexiHour,
  Medical,
  LeavePlans,
  Genders,
  Organization,
  Food,
  WorkAttire,
  TechEnable,
  Employee,
} from '../Svg/Icon'

const SectionCare = () => {
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

      <div className="arta-container relative z-1 mx-auto py-12 text-center md:py-[150px]">
        <h2 className={textClass.h2_style2}>{`ARTA Cares`}</h2>
        <p className={`mx-auto mt-4 max-w-[882px] ${textClass.body_regular_verah}`}>
          We value our people. We would love to see you feel engaged together. It is our quest to
          keep up high morale and motivation. The drive of our work should be joy and excitement.
        </p>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-x-8">
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <StartUp />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Start-up environment`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <FlexiHour />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Flexi-hour`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <Medical />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Medical coverage from day one`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <LeavePlans />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Generous leave plans`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <Genders />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Genders inclusive benefits`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <Organization />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Flat organization structue`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <Food />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Healthy food and snacks`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <WorkAttire />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Casual work attire`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <TechEnable />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Tech-enabled work`}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center p-8 text-center">
            <Employee />
            <p className={`mt-4 ${textClass.small_text_style2}`}>{`Employee well-being `}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionCare

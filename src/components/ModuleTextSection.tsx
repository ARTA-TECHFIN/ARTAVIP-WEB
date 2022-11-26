import { FC } from 'react'
import Image from 'next/image'

import { textClass } from 'src/components/Text'
import { FadeUp } from 'src/components/FadeUp'

type propsT = {
  title: string
  description: string
  bgImage: string
}

// TODO: animation
// TODO: responsive
// TODO: bgImage
// TODO: styling
const ModuleTextSection: FC<propsT> = ({ title, description, bgImage }) => {
  return (
    <div className="group/bg relative overflow-hidden" id="mission">
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={bgImage} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container mx-auto max-w-[950px] relative flex flex-col items-center justify-center py-36 text-arta-sand-100">
        <FadeUp>
          <>
            <h2 className={`${textClass.h2_style2} mb-6 text-center `}>{title}</h2>
            <div className={`module-text-section ${textClass.body_regular_verah} tracking-normal`} dangerouslySetInnerHTML={{__html: description}}></div>
          </>
        </FadeUp>
      </div>
    </div>
  )
}

export { ModuleTextSection }

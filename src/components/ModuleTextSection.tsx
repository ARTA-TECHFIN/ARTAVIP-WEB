import { FC } from 'react'
import Image from 'next/image'

import { textClass } from 'src/components/Text'

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
      <div className="arta-container relative flex flex-col items-center justify-center py-36 text-arta-sand-100">
        <h2 className={`${textClass.title_style2} mb-4 text-center `}>{title}</h2>
        <span className={`${textClass.small_text}`}>{description}</span>
      </div>
    </div>
  )
}

export { ModuleTextSection }

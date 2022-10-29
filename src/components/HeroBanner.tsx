import Image from 'next/image'
import { textClass } from 'src/components/Text'

type propsT = {
  title: string
  label?: string
  description: string
  image: string
}

// TODO: add animation
// TODO: use object image, not use it as background
// TODO: bgColor
// TODO: add label
// TODO: responsive
const HeroBanner = ({ title, label, description, image }: propsT) => {
  return (
    <div className="relative aspect-video h-auto w-full">
      <div className="absolute h-full w-full overflow-hidden">
        <Image priority src={image} alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
        <div className="arta-container">
          <div className="w-1/2">
            <h1 className={textClass.h1_style2}>{title}</h1>
            <p className={textClass.body_regular}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroBanner }

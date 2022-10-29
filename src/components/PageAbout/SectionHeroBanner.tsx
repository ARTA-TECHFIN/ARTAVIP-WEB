import Image from 'next/image'
import banner from './images/banner.jpg'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionHeroBanner = () => {
  return (
    <div className="relative aspect-video h-auto w-full">
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={banner} alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
        <div className="arta-container">
          <div className="w-1/2">
            <h1 className={textClass.h1_style2}>{t.heroBanner.title}</h1>
            <p className={textClass.body_regular}>{t.heroBanner.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

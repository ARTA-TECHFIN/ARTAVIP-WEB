import Image from 'next/image'
import tech_fin_bg from './images/tech_fin_bg.png'
import { textClass } from 'src/components/Text'
import { useState } from 'react'
import { IconArrowLeft, IconArrowRight } from 'src/components/Svg/Icon'
import { Hr } from 'src/components/Hr'
import { t } from './PageAbout'
import { ModuleTextColList } from '../ModuleTextColList'

export const SectionTechFin = () => {
  const [selectedIndex, setSelectedIndex] = useState(2)

  return (
    <div className="relative flex flex-col overflow-hidden" id="tech-fin">
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={tech_fin_bg} alt="" fill className="object-cover" />
      </div>

      <ModuleTextColList
        header={t.techFin.title}
        title={t.techFin.subtitle}
        list={[
          { title: t.techFin.section1Title, body: t.techFin.section1Body },
          { title: t.techFin.section2Title, body: t.techFin.section2Body },
        ]}
      />

      {/* SectionEcosystem */}
      <div className="relative flex flex-col items-center pb-36">
        <div className="mb-12 max-w-3xl text-center">
          <h3 className={textClass.h3_style2}>{t.ecosystem.title}</h3>
          <p className={textClass.body_regular}>{t.ecosystem.subtitle}</p>
        </div>
        <div className="relative h-96 w-full max-w-full overflow-hidden">
          {t.ecosystem.itemList.map((item, index) => {
            const isSelected = index === selectedIndex
            const styledIndex = (index - selectedIndex + 7) % 5

            return (
              <div
                key={index}
                className={
                  'absolute left-1/2 flex aspect-square flex-col items-center justify-center rounded-full shadow-2xl transition-all duration-300' +
                  [
                    ' top-[24%] h-[60%] translate-x-[-300%]',
                    ' top-[10%] h-[70%] translate-x-[-164%]',
                    ' top-0 h-[80%] translate-x-[-50%]',
                    ' top-[10%] h-[70%] translate-x-[64%]',
                    ' top-[24%] h-[60%] translate-x-[200%]',
                  ][styledIndex] +
                  (isSelected
                    ? ' bg-arta-eggshell-100 text-arta-sand-100'
                    : ' bg-arta-sand-100/70 text-arta-snow-100')
                }
              >
                <div className="relative mb-4 h-16 w-16">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>
                <span className={`${textClass.body_regular} max-w-[60%] text-center`}>
                  {item.title}
                </span>
              </div>
            )
          })}

          <button
            className="absolute bottom-4 left-1/2 translate-x-[-350%]"
            onClick={() =>
              setSelectedIndex((s) =>
                !t.ecosystem.itemList[s - 1] ? t.ecosystem.itemList.length - 1 : s - 1
              )
            }
          >
            <IconArrowLeft fill="#593725" />
          </button>
          <button
            className="absolute bottom-4 left-1/2 translate-x-[250%]"
            onClick={() => setSelectedIndex((s) => (!t.ecosystem.itemList[s + 1] ? 0 : s + 1))}
          >
            <IconArrowRight fill="#593725" />
          </button>
        </div>
      </div>
    </div>
  )
}

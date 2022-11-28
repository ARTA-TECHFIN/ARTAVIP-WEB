import { Fragment, useRef, useEffect } from 'react'
import parse from 'html-react-parser'
import { Hr } from 'src/components/Hr'
import { textClass } from 'src/components/Text'
import ModuleTextColListHeader from './ModuleTextColListHeader'
import cn from 'classnames'
import { FadeUp } from 'src/components/FadeUp';


import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


type listT = {
  title: string
  body: string
}

type propsT = {
  header: string
  title: string | null
  list: listT[]
  headerPosition?: 'left' | 'right'
}

// TODO: list body support html
// TODO: animation
// TODO: responsive
// TODO: headerPosition
// TODO: Title can be null or empty string, see Web3Media page
const ModuleTextColList = ({ header, title, list, headerPosition }: propsT) => {
  return (
    <div className="arta-container mx-auto relative grid grid-cols-12 md:py-[150px] py-16 lg:py-36">
      <div
        className={cn(
          `relative flex items-center md:col-span-4 col-span-full`,
          headerPosition == 'left' ? 'order-0 pr-10' : 'pl-10 md:order-1 md:justify-end'
        )}
      >
        <ModuleTextColListHeader header={header} headerPosition={headerPosition} />
      </div>
      <div className="col-span-full mt-6 md:col-span-8 md:mt-0">
        <h3 className={`${textClass.h3_style2} mb-6`}>{title}</h3>
        <Hr />
        {list.map((item, index) => (
          <Fragment key={index}>
            <h4 className={`${textClass.h6} mt-8`}>{item.title}</h4>
            <div className={`${textClass.body_regular_verah} mt-4 mb-8 lg:max-w-[80%]`}>
              {parse(item.body)}
            </div>
            <Hr />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export { ModuleTextColList }

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
  list?: listT[]
  content?: string
  headerPosition?: 'left' | 'right'
}

// TODO: list body support html
// TODO: animation
// TODO: responsive
// TODO: headerPosition
// TODO: Title can be null or empty string, see Web3Media page
const ModuleTextColList = ({ header, title, list, content, headerPosition }: propsT) => {
  return (
    <div className="arta-container mx-auto relative grid grid-cols-12 md:py-[150px] py-16 lg:py-36">
      <div
        className={cn(
          `relative flex items-center md:col-span-4 col-span-full`,
          headerPosition == 'left' ? 'order-0 md:pr-10' : 'md:pl-10 md:order-1 md:justify-end'
        )}
      >
        <ModuleTextColListHeader header={header} headerPosition={headerPosition} />
      </div>
      <div className="col-span-full mt-6 border-b border-black pb-2 md:col-span-8 md:mt-0">
        {
          title && title.length && (
            <h3 className={`${textClass.h3_style2} mb-6`}>{title}</h3>
          )
        }
        {
          content && content.length && (
            <div className="module-text-col-list" dangerouslySetInnerHTML={{__html: content || ""}} />
          )
        }

        {
          list && list.length && (
            <div className="module-text-col-list">
              {list.map((item, index) => (
                <Fragment key={index}>
                  <h4 className={`h6-text`}>{item.title}</h4>
                  <div className={`${textClass.body_regular_verah} mt-4 mb-8 lg:max-w-[80%]`}>
                    {parse(item.body)}
                  </div>
                </Fragment>
              ))}
            </div>
          )
        }
        
      </div>
    </div>
  )
}

export { ModuleTextColList }

import {ChevronDownIcon} from '@heroicons/react/outline'
import {IconArrowRightCircle} from '../Svg/Icon'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { textClass } from 'src/components/Text'
import gsap from 'gsap'

type propsT = {
  year: number
  events: {
    date: Date
    title: string
  }[]
}
const CalendarAccordion = ({ year, events }: propsT) => {
  const [showMenu, setShowMenu] = useState(false)
  const togglerIcon = useRef(null)
  const listWrapper = useRef(null)
  const list:any = useRef(null)

  if(showMenu) {
    gsap.to(togglerIcon.current, {rotate: -180, duration: 0.8})
    gsap.to(listWrapper.current, {height: list.current.clientHeight, duration: 0.8})
  }else {
    gsap.to(togglerIcon.current, {rotate: 0,  duration: 0.8})
    gsap.to(listWrapper.current, {height: 0,  duration: 0.8})
  }

  return (
    <div className={cn(`mb-6 bg-white transition-shadow`, showMenu ? 'arta-calendarAccordionSahdow': '')}>
      <div className="flex justify-between items-center p-8 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <span className={`${textClass.h6} text-black`}>{year}</span>
        <ChevronDownIcon ref={togglerIcon} className='h-4 w-4'/>
      </div>
      <div ref={listWrapper} className="overflow-hidden h-0">
        <ul ref={list} className="px-8 pb-8">
          {events.map((event, index) => {
            return (
              <li className="arta-eventItem flex items-center py-6 border-solid	 border-b	 border-arta-sand-200" key={index}>
                <span className="mr-8 w-20">{event.date.toDateString()}</span>
                <span className={`${textClass.title_verah} text-arta-sand-100`}>{event.title}</span>
                <IconArrowRightCircle className='ml-auto'/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export { CalendarAccordion }

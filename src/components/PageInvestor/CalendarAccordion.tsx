import { ChevronDownIcon } from '@heroicons/react/outline'
import { IconArrowRightCircle } from '../Svg/Icon'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { textClass } from 'src/components/Text'
import gsap from 'gsap'

type propsT = {
  year: number
  events: {
    date: Date
    title: string
    url: string
  }[]
}
const CalendarAccordion = ({ year, events }: propsT) => {
  const [showMenu, setShowMenu] = useState(false)
  const togglerIcon = useRef(null)
  const listWrapper = useRef(null)
  const list: any = useRef(null)

  if (showMenu) {
    gsap.to(togglerIcon.current, { rotate: -180, duration: 0.8 })
    gsap.to(listWrapper.current, { height: list.current.clientHeight, duration: 0.8 })
  } else {
    gsap.to(togglerIcon.current, { rotate: 0, duration: 0.8 })
    gsap.to(listWrapper.current, { height: 0, duration: 0.8 })
  }

  return (
    <div
      className={cn(`mb-6 bg-white transition-shadow`, showMenu && 'shadow-calendarAccordion')}
    >
      <div
        className="flex cursor-pointer items-center justify-between p-8"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className={`${textClass.h6} text-black`}>{year}</span>
        <ChevronDownIcon ref={togglerIcon} className="h-4 w-4" />
      </div>
      <div ref={listWrapper} className="h-0 overflow-hidden">
        <ul ref={list} className="px-8 pb-8">
          {events.map((event, index) => {
            return (
              <li
                className="arta-eventItem border-b border-solid	 border-arta-sand-200 py-6"
                key={index}
              >
                <a href={event.url} target="_blank" className="flex items-center" rel="noreferrer">
                  <div className="mr-8 w-20 text-center">
                    <p className={`${textClass.h3_style2} text-[#878095]`}>
                      {event.date.toDateString().slice(7, 10)}
                    </p>
                    <p className={`${textClass.title_style2} text-black`}>
                      {event.date.toDateString().slice(3, 7)}
                    </p>
                  </div>
                  <span className={`${textClass.title_verah} text-arta-sand-100`}>
                    {event.title}
                  </span>
                  <IconArrowRightCircle className="ml-auto flex-[0_0_32px]" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export { CalendarAccordion }

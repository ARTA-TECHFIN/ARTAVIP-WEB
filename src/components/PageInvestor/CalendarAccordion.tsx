import { ChevronDownIcon } from '@heroicons/react/outline'
import { IconArrowRightCircle } from '../Svg/Icon'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { textClass } from 'src/components/Text'
import gsap from 'gsap'
import Router from 'next/router'

type propsT = {
  index: number
  year: number
  events: {
    date: Date
    title: string
    url?: string
    postPageUrl?: string
  }[]
}

gsap.config({
  nullTargetWarn: false,
})

const CalendarAccordion = ({ index, year, events }: propsT) => {
  const [showMenu, setShowMenu] = useState(false)
  const togglerIcon = useRef(null)
  const listWrapper = useRef(null)
  const list = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (index === 0) {
      gsap.set(togglerIcon.current, { rotate: -180 })
      gsap.set(listWrapper.current, { height: list.current?.clientHeight})
      setShowMenu(!showMenu)
    }
  }, [])


  if (showMenu) {
    gsap.to(togglerIcon.current, { rotate: -180, duration: 0.8 })
    gsap.to(listWrapper.current, { height: list.current?.clientHeight, duration: 0.8 })
  } else {
    gsap.to(togglerIcon.current, { rotate: 0, duration: 0.8 })
    gsap.to(listWrapper.current, { height: 0, duration: 0.8 })
  }

  return (
    <div className={cn(`mb-6 bg-white transition-shadow`, showMenu && 'shadow-calendarAccordion')}>
      <div
        className="flex cursor-pointer items-center justify-between p-6 lg:p-8"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className={`${textClass.h6} text-black`}>{year}</span>
        <ChevronDownIcon ref={togglerIcon} className="h-4 w-4" />
      </div>
      <div ref={listWrapper} className="h-0 overflow-hidden">
        <ul ref={list} className="px-6 pb-6 lg:px-8 lg:pb-8">
          {events.map((event, index) => {
            return (
              <li
                className="arta-eventItem cursor-pointer border-b	border-solid border-arta-sand-200 py-6"
                key={index}
                onClick={() => {
                  if (event.postPageUrl) {
                    Router.push(`${event.postPageUrl}`)
                  }
                }}
              >
                <a
                  href={event.url}
                  target="_blank"
                  className="flex md:items-center"
                  rel="noreferrer"
                >
                  <div className="mr-2 flex-[0_0_48px] text-center md:flex-[0_0_80px] lg:mr-8">
                    <p className={`${textClass.h3_style2} text-[#878095]`}>
                      {event.date.toDateString().slice(7, 10)}
                    </p>
                    <p className={`${textClass.title_style2} text-black`}>
                      {event.date.toDateString().slice(3, 7)}
                    </p>
                  </div>
                  <span className={`${textClass.title_verah} mr-4 text-arta-sand-100`}>
                    {event.title}
                  </span>
                  <IconArrowRightCircle className="ml-auto hidden flex-[0_0_32px] sm:block" />
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

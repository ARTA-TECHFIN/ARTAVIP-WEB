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
  openYear: number
  setOpenYear: (year: number) => void
}

gsap.config({
  nullTargetWarn: false,
})

const CalendarAccordion = ({ index, year, events, openYear, setOpenYear }: propsT) => {
  const togglerIcon = useRef(null)
  const listWrapper = useRef(null)
  const list = useRef<HTMLUListElement>(null)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    if (year === openYear) {
      gsap.to(togglerIcon.current, { rotate: -180, duration: 0.7 })
      gsap.to(listWrapper.current, { height: list.current?.clientHeight, duration: 0.7 })
  
      if (!isFirstVisit) {
        setTimeout(() => {
          if (year !== 0) {
            const scrollDiv = (document.getElementById(`year-${openYear}`)?.offsetTop || 0) - 170;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
          }
        }, 800)
      } else {
        setIsFirstVisit(false)
      }
    } else {
      gsap.to(togglerIcon.current, { rotate: 0, duration: 0.7 })
      gsap.to(listWrapper.current, { height: 0, duration: 0.7 })
    }

  }, [openYear])

  if (events.length === 0) return <></>

  return (
    <div id={`year-${year}`} className={cn(`mb-6 bg-white transition-all transition shadow-lg hover:brightness-[98%]`)}>
      <div
        className="flex cursor-pointer items-center justify-between p-6 lg:p-8"
        onClick={() => setOpenYear(year)}
      >
        <span className={`${textClass.h6} text-arta-sand-100`}>{year}</span>
        <svg ref={togglerIcon} className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 16.2632C19.7981 16.2279 19.5831 16.2102 19.3549 16.2102C19.1092 16.2102 18.8941 16.2279 18.7098 16.2632L12.0197 8.53763L5.39393 16.2632C5.26228 16.2279 5.11747 16.2102 4.95949 16.2102C4.79273 16.2102 4.13165 16.2279 4 16.2632C5.89731 14.0032 12.0197 7 12.0197 7C12.0197 7 18.1548 14.0538 20 16.2632Z" fill="#593725"/>
        </svg>

      </div>
      <div ref={listWrapper} className="h-0 overflow-hidden">
        <ul ref={list} className="px-6 pb-6 lg:px-8 lg:pb-8">
          {events.sort((a: any, b: any) => b.date - a.date).map((event, index) => {
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
                  title={event.title}
                  href={event.url}
                  target="_blank"
                  className="flex md:items-center"
                  rel="noreferrer"
                >
                  <div className="mr-2 flex-[0_0_48px] text-center md:flex-[0_0_80px] lg:mr-8">
                    <p className={`${textClass.h3_style2} text-[#878095]`}>
                      {event.date.toDateString().slice(7, 10)}
                    </p>
                    <p className={`${textClass.title_style2} text-[#878095]`}>
                      {event.date.toDateString().slice(3, 7)}
                    </p>
                  </div>
                  <span className={`${textClass.title} mr-4 font-Neue text-arta-sand-100`}>
                    {event.title}
                  </span>
                  {
                    (event.postPageUrl || event.url) && <IconArrowRightCircle className="ml-auto hidden flex-[0_0_32px] sm:block" />
                  }
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

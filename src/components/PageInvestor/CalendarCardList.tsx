/**
 * This component is very similar to the CalendarAccordion component.
 * User insisted on having two separate components.
 * The only differences are that
 *    1. This component does not have the accordion feature.
 *    2. This component does not have the icon for the link.
 *    3. Mobile view alignments are different.
 */

import {textClass} from 'src/components/Text'

type propsT = {
  year: number
  events: {
    date: Date
    title: string
    url: string
  }[]
}

const CalendarCardList = (props: propsT) => {
  const { year, events } = props
  return (
    <div className="transition hover:brightness-[98%]">
      <p className={`${textClass.h6} text-black mb-4`}>{year}</p>
      {events.map((event, index) => (
        <div title={event.title} key={index} className='bg-white px-6 md:pt-8 pt-6 !pb-6 arta-eventItem border-b border-solid'>
          <a href={event.url} target='_blank' className='ml-auto flex items-center' rel="noreferrer">
            <div className="lg:mr-8 mr-2 md:flex-[0_0_80px] flex-[0_0_48px] text-center">
              <p className={`${textClass.h3_style2} text-[#878095]`}>
                {event.date.toDateString().slice(7, 10)}
              </p>
              <p className={`${textClass.title_style2} text-black`}>
                {event.date.toDateString().slice(3, 7)}
              </p>
            </div>
            <p className={`${textClass.title_verah} text-arta-sand-100`}>{event.title}</p>
          </a>
        </div>
      ))}
    </div>
  )
}

export { CalendarCardList }

/**
 * This component is very similar to the CalendarAccordion component.
 * User insisted on having two separate components.
 * The only differences are that
 *    1. This component does not have the accordion feature.
 *    2. This component does not have the icon for the link.
 *    3. Mobile view alignments are different.
 */

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
    <div>
      <p>{year}</p>
      {events.map((event, index) => (
        <div key={index}>
          <p>{event.date.toLocaleDateString()}</p>
          <p>{event.title}</p>
          <a href={event.url}>Link</a>
        </div>
      ))}
    </div>
  )
}

export { CalendarCardList }

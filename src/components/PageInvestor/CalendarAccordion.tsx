type propsT = {
  year: number
  events: {
    date: Date
    title: string
  }[]
}
const CalendarAccordion = ({ year, events }: propsT) => {
  return (
    <div>
      <span>{year}</span>
      <ul>
        {events.map((event, index) => {
          return (
            <li key={index}>
              <span>{event.date.toDateString()}</span>
              <span>{event.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { CalendarAccordion }

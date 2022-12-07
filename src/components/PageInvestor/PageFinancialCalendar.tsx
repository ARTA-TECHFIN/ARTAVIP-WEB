import { FC } from 'react'
import { CalendarAccordion } from 'src/components/PageInvestor/CalendarAccordion'
import { useState } from 'react'

type propsT = {
  fc: any
}

const PageFinancialCalendar: FC<propsT>  = ( {fc} ) => {
  const [openYear, setOpenYear] = useState(fc && fc.sort((a:any, b:any) => b.year - a.year)[0].year || 2022)

  const setOpenYearFunc = (year: number) => {
    if (year == openYear) {
      setOpenYear(0)
    } else {
      setOpenYear(year)
    }
  }

  return (
    <div className="mt-8 flex flex-col">
      <div className="arta-container mx-auto">
        {fc.sort((a:any, b:any) => b.year - a.year).map((yearly:any, index:any) => (
          <CalendarAccordion
            index={index}
            key={yearly.year}
            year={yearly.year}
            events={yearly.posts.map((r: any) => ({
              date: new Date(r.date),
              title: r.title
            }))}
            openYear={openYear}
            setOpenYear={setOpenYearFunc}
          />
        ))}
      </div>
    </div>
  )
}

export default PageFinancialCalendar

import { reportItemT } from 'src/domains/investor'
import { ReportCard } from './ReportCard'

type propsT = {
  year: number
  reports: reportItemT[]
}
const ReportSection = (props: propsT) => {
  return (
    <div className='grid grid-cols-12 gap-x-8  mb-12'>
      <span className='col-span-2 pt-4 border-t-2 border-arta-sand-300 text-black'>{props.year}</span>
      <ul className='col-span-10 grid grid-cols-12 gap-8'>
        {props.reports.map((report, index) => {
          return (
            <li key={index} className="col-span-6">
              <ReportCard title={report.headline} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ReportSection }

import { reportItemT } from 'src/domains/investor'
import { ReportCard } from './ReportCard'
import { textClass } from 'src/components/Text'

type propsT = {
  year: number
  reports: reportItemT[]
}
const ReportSection = (props: propsT) => {
  return (
    <div className='grid grid-cols-12 gap-x-8  mb-12'>
      <span className={`col-span-2 pt-4 border-t-2 border-arta-sand-300 text-black ${textClass.h6}`}>{props.year}</span>
      <ul className='col-span-10 grid grid-cols-12 gap-8'>
        {props.reports.map((report, index) => {
          return (
            <li key={index} className="col-span-6">
              <a href={report.url} target='_blank'>
                <ReportCard title={report.headline} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ReportSection }

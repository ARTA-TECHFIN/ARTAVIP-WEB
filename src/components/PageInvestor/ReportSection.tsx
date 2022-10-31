import { reportItemT } from 'src/domains/investor'
import { ReportCard } from './ReportCard'

type propsT = {
  year: number
  reports: reportItemT[]
}
const ReportSection = (props: propsT) => {
  return (
    <div>
      <span>{props.year}</span>
      <ul>
        {props.reports.map((report, index) => {
          return (
            <li key={index}>
              <ReportCard title={report.headline} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ReportSection }

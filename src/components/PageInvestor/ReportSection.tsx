import { reportItemT } from 'src/domains/investor'
import { ReportCard } from './ReportCard'
import { textClass } from 'src/components/Text'

type propsT = {
  year: number
  reports: reportItemT[]
}
const ReportSection = (props: propsT) => {
  return (
    <div className="mb-12 grid sm:grid-cols-12 col-span-full gap-x-8">
      <span
        className={`sm:col-span-2 col-span-full border-t-2 border-arta-sand-300 pt-4 text-black ${textClass.h6}`}
      >
        {props.year}
      </span>
      <ul className="sm:col-span-10 col-span-full grid grid-cols-12 sm:gap-8 gap-4 sm:mt-0 mt-4">
        {props.reports.map((report, index) => {
          return (
            <li key={index} className="md:col-span-6 col-span-12">
              <a href={report.url} target="_blank" rel="noreferrer">
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

import { reportItemT } from 'src/domains/investor'
import { ReportCard } from './ReportCard'
import { textClass } from 'src/components/Text'
import { report } from 'process'
import { Console } from 'console'

type propsT = {
  year: number
  lang: any
  reports: reportItemT[]
}
const ReportSection = (props: propsT) => {
  return (
    <div className="col-span-full mb-12 grid gap-x-8 sm:grid-cols-12">
      <span
        className={`col-span-full border-t-2 border-arta-sand-300 pt-4 text-black sm:col-span-2 ${textClass.h6}`}
      >
        {props.year}
      </span>
      <ul className="col-span-full mt-4 grid grid-cols-12 gap-4 sm:col-span-10 sm:mt-0 sm:gap-8">
        {props.reports.map((report, index) => {
          const pdf_en= report.attributes.pdf_en;
          const pdf_tc= report.attributes.pdf_tc;
          const pdf_sc= report.attributes.pdf_sc;

          const file = props.lang === 'en'? pdf_en: props.lang === 'tc'? pdf_tc: pdf_sc
          const headline = props.lang === 'en'? report.attributes.headline_en: props.lang === 'tc'? report.attributes.headline_tc: report.attributes.headline_sc
          return (
            <li key={index} className="col-span-12 md:col-span-6">
              <a title={headline} href={file} target="_blank" rel="noreferrer">
                <ReportCard title={headline} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ReportSection }

import { reportItemT2 } from 'src/domains/investor'
import { textClass } from 'src/components/Text'
import { report } from 'process'
import { Console } from 'console'

type propsT = {
  lang: any
  reports: reportItemT2[]
}
const ReportContent = (props: propsT) => {
  return (
    <div className="col-span-full mb-12 grid gap-x-8 sm:grid-cols-12">
      
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
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ReportContent }

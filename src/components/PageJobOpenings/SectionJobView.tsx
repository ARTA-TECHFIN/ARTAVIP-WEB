import { Pin } from '../Svg/Icon'
import { textClass } from '../Text'
import Applyform from './ApplyForm'

const SectionJobView = () => {
  return (
    <div className="mx-auto bg-white shadow-blogPost">
      <div className="border-b-2 p-8 ">
        <h2 className="text-[2rem] text-arta-secondary">Analyst</h2>
        <p className={`${textClass.body_regular_verah}`}>Investment Banking Division</p>
        <div className={`${textClass.caption} mt-2 flex items-center`}>
          <div className="flex items-center border-r pr-6">
            <Pin />
            <div className="ml-1">Quarry Bay, Hong Kong</div>
          </div>
          <div className="pl-6">Seniority: Junior level</div>
        </div>
      </div>
      <div className="space-y-12 border-b-2 px-12 py-8">
        <div>
          <h3 className={`text-arta-secondary ${textClass.h6}`}>Role And Responsibilities</h3>
          <ul
            className={`${textClass.body_regular_verah} mt-4 list-disc space-y-2 pl-8 text-black`}
          >
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`text-arta-secondary ${textClass.h6}`}>Role And Responsibilities</h3>
          <ul
            className={`${textClass.body_regular_verah} mt-4 list-disc space-y-2 pl-8 text-black`}
          >
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
            <li>
              Assist on management to define the Group Technology initiative priority & directions
              with management. Also conduct communication and alignments with all Technology
              Corporate Services teams and BU ITBP to formulate the detail Technology Strategic
              focus
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base text-arta-secondary">
            We are looking for the below positions. If you think this is the right place for you to
            be your true self, click on the links today. Join us. For further information, please
            contact our HRBP via{' '}
            <a href="mailto:recruit@artatechfin.com">recruit@artatechfin.com</a> or apply directly.
          </p>
        </div>
      </div>
      <div className="p-12">
        <div className="max-w-[756px]">
          <Applyform />
        </div>
      </div>
    </div>
  )
}

export default SectionJobView

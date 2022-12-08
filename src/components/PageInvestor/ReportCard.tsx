import { IconArrowRightCircle } from '../Svg/Icon'
import { textClass } from 'src/components/Text'

type propsT = {
  title: string
  Icon?: any
}
const ReportCard = (props: propsT) => {
  return (
    <div className="relative flex items-center justify-between bg-white py-8 px-8 transition shadow-lg hover:brightness-[98%]">
      <div className="absolute top-0 bottom-0 left-0 w-2 bg-reportCard-gradient"></div>
      <div className="flex">
        {props.Icon && <props.Icon className="self-center" />}
        <span className={`mx-3 mt-2 ${textClass.title_verah}`}>{props.title}</span>
      </div>
      <IconArrowRightCircle className="hidden lg:block flex-[0_0_32px]" />
    </div>
  )
}

export { ReportCard }

import { IconArrowRightCircle } from '../Svg/Icon'
import { textClass } from 'src/components/Text'

type propsT = {
  title: string
}
const ReportCard = (props: propsT) => {
  return (
    <div className="relative flex items-center justify-between bg-white py-8 px-6 transition hover:brightness-95">
      <div className="absolute top-0 bottom-0 left-0 w-2 bg-reportCard-gradient"></div>
      <span className={`mx-2 ${textClass.title_verah}`}>{props.title}</span>
      <IconArrowRightCircle />
    </div>
  )
}

export { ReportCard }

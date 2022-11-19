import { textClass } from 'src/components/Text'
import { Pin } from 'src/components/Svg/Icon'

type propsT = {
  title: string
  subTitle: string
  seniority: string
  location: string
}

const JobCard = ({ title, subTitle, seniority, location }: propsT) => {
  return (
    <div className="bg-white p-6 shadow-postCard">
      <div className="flex justify-between">
        <div className={`${textClass.caption} flex items-center`}>
          <Pin className="mr-1"/> {location}
        </div>
      </div>
      <h3 className={`mt-8 ${textClass.h6}`}>{title}</h3>
      <h4 className={textClass.body_regular_verah}>{subTitle}</h4>
      <p className={textClass.caption}>Seniority: {seniority}</p>
    </div>
  )
}

export default JobCard

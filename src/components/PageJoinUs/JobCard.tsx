import { textClass } from 'src/components/Text'
import { Pin, IconArrowRight } from 'src/components/Svg/Icon'
import Link from 'next/link'

type propsT = {
  id: number
  title: string
  subTitle: string
  seniority: string
  location: string
}

const JobCard = ({ id, title, subTitle, seniority, location }: propsT) => {
  return (
    <Link href={`/job/${id}`}>
      <div className="h-full bg-white p-6 shadow-postCard">
        <div className="flex h-full flex-col justify-between">
          <div className="flex justify-between">
            <div className={`${textClass.caption} flex items-center`}>
              <Pin className="mr-1" /> {location}
            </div>
            <IconArrowRight fill="#593725" className="h-[9.26px] w-4" />
          </div>
          <div className="mt-8">
            <h3 className={`${textClass.h6}`}>{title}</h3>
            <h4 className={textClass.body_regular_verah}>{subTitle}</h4>
            <p className={textClass.caption}>Seniority: {seniority}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard

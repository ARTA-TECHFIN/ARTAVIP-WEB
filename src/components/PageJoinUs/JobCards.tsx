import { getJobsCmsT } from '../../domains/jobs'
import JobCard from './JobCard'
import { useRouter } from 'next/router'

const JobCards = ({ jobs }: getJobsCmsT) => {
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>
    `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <div className="grid grid-cols-none gap-8 sm:grid-cols-2 md:grid-cols-3">
      {jobs.map((job: any, index: number) => (
        <div className="col-span-1" key={index}>
          <JobCard
            id={job.attributes.slug}
            title={g(job, 'job_title')}
            subTitle={g(job, 'department')}
            location={g(job, 'work_location')}
            seniority={job.attributes.seniority}
          />
        </div>
      ))}
    </div>
  )
}

export default JobCards

import { getJobsCmsT } from '../../domains/jobs'

import JobCard from './JobCard'

const JobCards = ({ jobs }: getJobsCmsT) => {
  return (
    <div className="grid grid-cols-none lg:gap-8 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {jobs.map((job, index) => (
        <div className="col-span-1" key={index}>
          <JobCard
            title={job.title}
            subTitle={job.subTitle}
            location={job.location}
            seniority={job.Seniority}
          />
        </div>
      ))}
    </div>
  )
}

export default JobCards

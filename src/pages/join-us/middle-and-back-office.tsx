import JoinUsLayout from 'src/components/PageJoinUs/JoinUsLayout'
import { JobTabs } from '../../components/PageJoinUs/SectionJobOpenings'
import JobCards from 'src/components/PageJoinUs/JobCards'

import { getJobsCms, getJobsCmsT } from '../../domains/jobs'

export const getStaticProps = async () => {
  const cms = await getJobsCms({ lang: 'en' })

  return {
    props: { cms },
  }
}

const PageJoinUs = (props: { cms: getJobsCmsT }) => {
  const { cms } = props
  const jobs = cms.jobs

  const filterJobs = jobs.filter(job => {
    return job.tag === 'middleAndBackOffice'
  })

  return (
    <JoinUsLayout tabType={JobTabs.Middle_and_Back_Office}>
      <JobCards jobs={filterJobs} />
    </JoinUsLayout>
  )
}

export default PageJoinUs

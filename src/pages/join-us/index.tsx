import JoinUsLayout from 'src/components/PageJoinUs/JoinUsLayout'

import { getJobsCms, getJobsCmsT } from 'src/domains/jobs'

export const getStaticProps = async () => {
  const cms = await getJobsCms({ lang: 'en' })

  return {
    props: { cms },
  }
}

const PageJoinUs = (props: { cms: getJobsCmsT }) => {
  const { cms } = props
  const jobs = cms.jobs

  return (
    <JoinUsLayout jobs={jobs} />
  )
}

export default PageJoinUs

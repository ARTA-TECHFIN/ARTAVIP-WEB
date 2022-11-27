import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { HeroBanner } from '../HeroBanner'
import { SectionWorkWithArta } from './SectionWorkWithArta'
import SectionOurValues from './SectionOurValues'
import SectionCare from './SectionCare'
import SectionJobOpenings from './SectionJobOpenings'
import { FC } from 'react'
import { getJobsCmsT } from '../../domains/jobs'

type propsT = {
  t: any
  jobs: getJobsCmsT
}

const JoinUsLayout: FC<propsT> = ({ t, jobs }) => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t.heroBanner.title}
          description={t.heroBanner.description}
          image={t.heroBanner.image}
          mobileImage={t.heroBanner.mobileImage}
        />
        <SectionWorkWithArta />
        <SectionOurValues />
        <SectionCare />
        <SectionJobOpenings jobs={jobs}></SectionJobOpenings>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default JoinUsLayout

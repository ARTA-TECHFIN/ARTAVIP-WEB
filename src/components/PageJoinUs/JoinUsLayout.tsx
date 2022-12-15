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
import { useTranslation } from 'next-i18next'

type propsT = {
  k: any
  jobs: any
}

const JoinUsLayout: FC<propsT> = ({ k, jobs }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.join_us')} | Arta TechFin`}
        description={t('page_description.join_us')}
        keywords={t('page_keywords.join_us')}
        ga="Join Us"
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t('page_title.join_us')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
        <SectionWorkWithArta k={k} />
        <SectionOurValues k={k} />
        <SectionCare k={k} />
        <SectionJobOpenings k={k} jobs={jobs}></SectionJobOpenings>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default JoinUsLayout

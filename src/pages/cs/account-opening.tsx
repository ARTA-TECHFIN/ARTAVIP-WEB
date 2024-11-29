import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { Seo } from 'src/components/Seo'
import { textClass } from 'src/components/Text'
import AccountOpening, { TABS } from 'src/components/PageHome/AccountOpening'
import MSFPersonalFile from 'src/components/PageHome/MSFPersonalFile'

const Home = (props: { cms: any }) => {

  const { t } = useTranslation('common')

  return (
    <AccountOpening
      tabType={TABS.person}
      gaLog={true}
    >
      <MSFPersonalFile/>
    </AccountOpening>
  )
}

export default Home

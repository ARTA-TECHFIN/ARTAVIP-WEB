import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'

import { Slides } from 'src/components/PageHome/PageHome'
import { Seo } from 'src/components/Seo'

const Home: NextPage = () => {
  const { t, i18n } = useTranslation('common')
  // console.log(t)
  // console.log(i18n)
  return (
    <>
      <Seo title={t('site_title', { ns: 'common' })} />
      <Header fontSize={'1em'} />
      <main>
        <Slides />
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
})

export default Home

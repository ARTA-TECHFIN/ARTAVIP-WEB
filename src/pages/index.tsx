import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { Seo } from 'src/components/Seo'
import { textClass } from 'src/components/Text'
import HomeLayout, { TABS } from 'src/components/PageHome/HomeLayout'
import IndividualFile from 'src/components/PageHome/IndividualFile'

// 获取开个人户基本数据
const fetchIndividualData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/onboarding-individual-pi?populate=*`)
  const data = await res.json()
  return data
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const individualData = await fetchIndividualData()
  return {
    props: {
      s: individualData,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
const Home = (props: { s: any }) => {

  return (
    <HomeLayout
      tabType={TABS.person}
      gaLog={true}
    >
    <IndividualFile
      data={props.s} />
    </HomeLayout>
  )
}

export default Home

import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { Seo } from 'src/components/Seo'
import { textClass } from 'src/components/Text'
import Onboarding, { TABS } from 'src/components/PageHome/Onboarding'
import CorporateFile from 'src/components/PageHome/CorporateFile'

// 获取开户基本数据
const fetchHeader = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/onboarding`)
  const data = await res.json()
  return data
}

// 获取公司专业户基本数据
const fetchCorporateData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/onboarding-corporate-pi?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    title: {
      header: g('title') !== null ? g('title') : '',
      sub_title_1: g('sub_title_1'),
      link_1: pageData.data.attributes.link_1,
      sub_title_2: g('sub_title_2'),
      link_2: pageData.data.attributes.link_2,
      sub_title_3: g('sub_title_3'),
      link_3: pageData.data.attributes.link_3,
      remark: g('remark'),
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchHeader()
  const individualData = await fetchCorporateData()
  return {
    props: {
      k: massageData(pageData, locale),
      s: individualData,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Home = (props: {k: any ,s: any }) => {

  return (
    <Onboarding
      tabType={TABS.company}
      gaLog={true}
      data={props.k}
    >
    <CorporateFile
      data={props.s}
    />
    </Onboarding>
  )
}

export default Home

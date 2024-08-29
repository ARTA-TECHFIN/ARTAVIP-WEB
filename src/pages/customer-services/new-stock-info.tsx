import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageNewStockInfo from 'src/components/PageCustomerServices/PageNewStockInfo'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/new-stock-info?populate=*`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}


const massageData = (pageData: any,titleData: any, locale: string | undefined = 'en') => {
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.productTitle[`${keyWithoutLang}_${locale}`]}`
  return {
    data: pageData.data,
    sub_d_1_link:pageData.data.attributes.sub_d_1_link,
    title:t('ipo'),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchData()
  const titleData = await fetchTitle()

  return {
    props: {
      k: massageData(pageData,titleData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageNewStockInfo
export type PageAboutCmsT = ReturnType<typeof massageData>

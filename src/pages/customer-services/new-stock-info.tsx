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

interface responseT {
  content: string
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const { convert } = require('html-to-text');
  return {
    data: pageData.data,
    sub_d_1_link:pageData.data.attributes.sub_d_1_link,
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchData()

  return {
    props: {
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageNewStockInfo
export type PageAboutCmsT = ReturnType<typeof massageData>

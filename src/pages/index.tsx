import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import homepageJson from 'apidata/homepage.json'
import contactpageJson from 'apidata/contact.json'

import { Slides } from 'src/components/PageHome/PageHome'
import { Seo } from 'src/components/Seo'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/homepage`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    what_is_techfin_description: g("what_is_techfin_description"),
    our_business_description: g("our_business_description"),
    our_business_product_description_1: g("our_business_product_description_1"),
    our_business_product_description_2: g("our_business_product_description_2"),
    our_business_product_description_3: g("our_business_product_description_3"),
    our_business_product_description_4: g("our_business_product_description_4"),
    our_business_product_description_5: g("our_business_product_description_5"),
    about_us_description: g("about_us_description")
  }
}

const Home: NextPage = ({k}: any) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo title={t('site_title')} />
      <Header fontSize={'1em'} />
      <main>
        <Slides k={k} />
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? homepageJson : await fetchCmsData()

  return {
    props: {
      k: massageData(pageData, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default Home

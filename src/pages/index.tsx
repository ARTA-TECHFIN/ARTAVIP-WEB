import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { Seo } from 'src/components/Seo'
import { textClass } from 'src/components/Text'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/homepage`)
  const data = await res.json()
  return data
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cms = await fetchCmsData()

  return {
    props: {
      cms: cms.data,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Home= (props: { cms: any }) => {
  
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('page_title.home')} | Arta TechFin`}
        description={t('page_description.home')}
        keywords={t('page_keywords.home')}
        ga="Homepage"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[220px]" />
      <div className={`${textClass.small_text} statement-style`} dangerouslySetInnerHTML={{ __html: g(props.cms, 'statement') }}></div>
      <div id="homepage-bd">
        <h1 className={`${textClass.h3_style2}`}>{g(props.cms, 'title')}</h1>
        <h1 className={`${textClass.h3_style2}`}>{g(props.cms, 'sub_title')}</h1>
        <h1 className={`${textClass.h6}  p-2`}>{g(props.cms, 'sub_title2')}</h1>
        <ButtonAnimated
          as="a"
          href={`${g(props.cms, 'link')}`}
          className="mt-4 border-arta-snow-100 text-arta-snow-100 fund_deposits_textbutton">
          {g(props.cms, 'button')}
        </ButtonAnimated>
      </div>
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[50px]" />
      <Footer textColor="white" />
    </>
  )
}

export default Home

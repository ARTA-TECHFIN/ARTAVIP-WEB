import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import homepageJson from 'apidata/homepage.json'
import { WechatPopup } from 'src/components/WechatPopup'
import contactJson from 'apidata/contact.json'
import { Slides } from 'src/components/PageHome/PageHome'
import { Seo } from 'src/components/Seo'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/homepage`)
  const data = await res.json()
  return data
}

const fetchFooterData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/contact-us`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  return {
    what_is_techfin_description: g('what_is_techfin_description'),
    our_business_description: g('our_business_description'),
    our_business_product_description_1: g('our_business_product_description_1'),
    our_business_product_description_2: g('our_business_product_description_2'),
    our_business_product_description_3: g('our_business_product_description_3'),
    our_business_product_description_4: g('our_business_product_description_4'),
    our_business_product_description_5: g('our_business_product_description_5'),
    our_business_product_description_6: g('our_business_product_description_6'),
    about_us_description: g('about_us_description'),
  }
}

const Home: NextPage = ({ k }: any) => {
  const { t } = useTranslation('common')
  const [showWechatPopup, setShowWechatPopup] = useState(false)
  const [qrCode, setQrCode] = useState('')

  const togglePopup = () => {
    setShowWechatPopup(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const useLocalCms = process.env.NEXT_PUBLIC_USE_LOCAL_CMS_DATA === 'true'
      const result = useLocalCms ? contactJson : await fetchFooterData()
      setQrCode(result.data.attributes.social_media_link_wechat.data.attributes.url)
    }

    fetchData()
  }, [])

  return (
    <>
      <Seo
        title={`${t('page_title.home')} | Arta TechFin`}
        description={t('page_description.home')}
        keywords={t('page_keywords.home')}
        ga="Homepage"
      />
      <Header fontSize={'1em'} src="homepage" />
      <main>
        <Slides k={k} setShowWechatPopup={setShowWechatPopup} />
      </main>
      {showWechatPopup && <WechatPopup togglePopup={togglePopup} qrCode={qrCode} />}
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

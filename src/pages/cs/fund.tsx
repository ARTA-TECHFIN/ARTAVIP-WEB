import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { InputDropdown } from 'src/components/InputDropdown'
import { InputField } from 'src/components/InputField'
import { InputText } from 'src/components/InputText'
import { InputTextArea } from 'src/components/InputTextArea'
import headerJson from 'apidata/header.json'
import Fund, { TABS } from 'src/components/PageHome/Fund'
import IndividualFile from 'src/components/PageHome/IndividualFile'
import AspiringFund from 'src/components/PageHome/Fund/AspiringFund'
const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    title: {
      header: g('title') !== null ? g('title') : '',
      sub_title_1: g('sub_f_1'),
      show_1: true,
      link_1: pageData.data.attributes.sub_f_1_link,
      sub_title_2: g('sub_f_2'),
      show_2: false,
      link_2: pageData.data.attributes.sub_f_2_link,
      sub_title_3: g('sub_f_3'),
      show_3: false,
      link_3: pageData.data.attributes.sub_f_3_link,
      sub_title_4: g('sub_f_4'),
      show_4: false,
      link_4: pageData.data.attributes.sub_f_4_link,
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const pageData = await fetchHeader()
  const product1Data = await fetchProduct1()
  const fetchLabel = await fetchLabel2()
  return {
    props: {
      s:  massageData(pageData, locale),
      v:  product1Data,
      k:  fetchLabel,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
// 获取基金基本数据
const fetchHeader = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/fund?populate=*`)
  const data = await res.json()
  return data
}

// 获取第一个基金的基础数据
const fetchProduct1 = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/fund-aspiring?populate=*`)
  const data = await res.json()
  return data
}

// 获取基金Label数据
const fetchLabel2 = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/fund-detail-label?populate=*`)
  const data = await res.json()
  return data
}

const Home = (props: {k: any ,s: any ,v: any }) => {

  return (
    <Fund
      tabType={TABS.aspiring}
      gaLog={true}
      data={props.s}
    >
    <AspiringFund data={props.v} label={props.k}
    >
    </AspiringFund>
    </Fund>
  )
}

export default Home
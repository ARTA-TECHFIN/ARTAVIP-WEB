import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Fund, { TABS } from 'src/components/PageHome/Fund'
import RiverChain from 'src/components/PageHome/Fund/Riverchain'
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

// 获取基金Label数据
const fetchLabel2 = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/fund-detail-label?populate=*`)
  const data = await res.json()
  return data
}


// 获取第二个基金的基础数据
const fetchProduct1 = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/fund-riverchain?populate=*`)
  const data = await res.json()
  return data
}

const Home = (props: {k: any ,s: any ,v: any }) => {

  return (
    <Fund
      tabType={TABS.riverchain}
      gaLog={true}
      data={props.s}
    >
    <RiverChain data={props.v} label={props.k}
    >
    </RiverChain>
    </Fund>
  )
}

export default Home
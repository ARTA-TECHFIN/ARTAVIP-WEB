import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageAssetManagementPage from 'src/components/PageBusinesses/PageAssetManagement'
import ourBusinessAssetManagementJson from 'apidata/our-business-asset-management.json'

const fetchCmsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-asset-management`
  )
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      description: g('description') !== null ? g('description') : '',
      image: '/images/our-businesses/banner.jpg',
      mobileImage: '/images/our-businesses/mobile-banner.jpg',
      label: 'Our Businesses',
    },
    components: pageData.data?.attributes?.components || [],
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = useLocalCms ? ourBusinessAssetManagementJson : await fetchCmsData()

  return {
    props: {
      k: massageData(pageData, locale),
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageAssetManagementPage

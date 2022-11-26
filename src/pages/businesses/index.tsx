import type { GetServerSideProps } from 'next'
import PageBusinessesPage from 'src/components/PageBusinesses/PageBusinesses'
import ourBusinessAssetManagementJson from 'apidata/our-business-asset-management.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-asset-management`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  console.log("123s")
  console.log(pageData)

  return {
    heroBanner: {
      title: 'Asset Management',
      description: g('description'),
      image: '/images/asset-management/banner.png',
      mobileImage: '/images/asset-management/mobile-banner.png',
      label: 'Our Businesses',
    },
    components: pageData.data?.attributes?.components || []
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  const pageData = useLocalCms ? ourBusinessAssetManagementJson : await fetchCmsData()

  return {
    props: {
      t: massageData(pageData, locale),
      locale,
    },
  }
}

export default PageBusinessesPage

import type { GetServerSideProps } from 'next'
import PageSecurities from 'src/components/PageBusinesses/PageSecurities'
import ourBusinessSecurityJson from 'apidata/our-business-securities-brokerage.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/our-business-securities-brokerage`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    heroBanner: {
      title: 'Securities Banking',
      description: g('description') == null ? g('description') : '',
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

  const pageData = useLocalCms ? ourBusinessSecurityJson : await fetchCmsData()

  return {
    props: {
      t: massageData(pageData, locale),
      locale,
    },
  }
}

export default PageSecurities

import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageArtazine from 'src/components/PageBusinesses/PageArtazine'
import ourBusinessWealthManagementJson from 'apidata/our-business-wealth-management.json'


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
  const pageData = ourBusinessWealthManagementJson

  return {
    props: {
      k: massageData(pageData,locale),
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default PageArtazine

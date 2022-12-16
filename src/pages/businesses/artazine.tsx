import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageArtazine from 'src/components/PageBusinesses/PageArtazine'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common', 'download'])),
    },
  }
}

export default PageArtazine

import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PageJobOpenings from 'src/components/PageJobOpenings/PageJobOpenings'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    }
  }
}

export default PageJobOpenings
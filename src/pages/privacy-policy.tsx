import { GetServerSideProps } from 'next'
import { StaticLayout } from 'src/components/PageStatic/Layout'
import { textClass } from 'src/components/Text'
import parse from 'html-react-parser'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/privacy-policy`)
  const data = await res.json()
  return data
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cms = await fetchCmsData()

  return {
    props: {
      cms: {
        heroBanner: {
          title: 'Privacy Policy',
          description: '',
          image: '/images/bg-static.jpg',
          mobileImage: '/images/mobile-bg-static.jpg',
        },
        content: cms.data.attributes[`content_${locale}`],
      },
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const PrivacyPolicy = (props: { cms: any }) => {
  const { cms } = props
  const { t } = useTranslation('common')

  return (
    <StaticLayout
      cms={cms}
      seo={{
        title: `${t('page_title.privacy_policy')} | Arta TechFin`,
        description: t('page_description.privacy_policy'),
        keywords: t('page_keywords.privacy_policy'),
      }}
      title={t('page_title.privacy_policy')}
    >
      <div className="arta-container mx-auto mt-8">
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <div className={`blog-content mt-6 ${textClass.body_regular_verah} text-black`}>
            {parse(cms.content)}
          </div>
        </div>
      </div>
    </StaticLayout>
  )
}

export default PrivacyPolicy

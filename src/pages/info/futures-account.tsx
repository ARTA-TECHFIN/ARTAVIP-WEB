import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { HeroBanner } from 'src/components/HeroBanner'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/futures-account?populate=*`)
  const data = await res.json()
  return data
}


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cms = await fetchCmsData()
  return {
    props: {
      cms: cms.data,
      heroBanner: {
        description: '',
        image: '/images/customers-services/211025_image_service_fee_banner.png',
        mobileImage: '/images/customers-services/211025_image_service_fee_banner.png',
      },
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


const HKMarginableStock = (props: { cms: any, heroBanner: any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('products_info.futures-account')} | Arta TechFin`}
        description={t('products_info.futures-account')}
        keywords={t('products_info.futures-account')}
        ga="HK Trade Tips"
      />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('products_info.futures-account')}
          description={props.heroBanner.description}
          image={props.heroBanner.image}
          mobileImage={props.heroBanner.mobileImage}
        />

        <div style={{ backgroundColor: 'white', paddingLeft: '10%', paddingTop: '30px' }}>
          <table style={{ fontSize: '15px', backgroundColor: 'white', width: '90%' }}
            dangerouslySetInnerHTML={{ __html: g(props.cms, 'info') }}></table>
          <p style={{ fontSize: '15px', paddingTop: '30px' }} dangerouslySetInnerHTML={{ __html: g(props.cms, 'tips') }}></p>
        </div>
        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full white-pic" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default HKMarginableStock

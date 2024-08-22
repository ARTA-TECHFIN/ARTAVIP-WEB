import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import { HeroBanner } from 'src/components/HeroBanner'
import { textClass } from 'src/components/Text'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/leaning-ratio?populate=*`)
  const data = await res.json()
  return data
}


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cms = await fetchCmsData()
  return {
    props: {
      cms: cms.data,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


const BussinessOverview = (props: { cms: any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('customer_service.loan_ratio')} | Arta TechFin`}
        description={t('customer_service.loan_ratio')}
        keywords={t('customer_service.loan_ratio')}
        ga="Loan Ratio"
      />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('customer_service.loan_ratio')}
          description=''
          image='/images/info/211025_image_service_ratio_banner.png'
          mobileImage='/images/info/211025_image_service_ratio_banner.png'
        />

        <div className='bg-white'>
          <div className="arta-container relative z-1 mx-auto py-8  lg:space-x-[50px] md:py-[15px] md:text-center bg-white">
            <div className="mt-8 grid grid-cols-3 gap-x-12 md:grid-cols-3 lg:grid-cols-3  place-items-center px-10 bg-white">
              <div className='col-span-8 md:col-span-1 flex items-center text-center flex-col p-4 w-max'>
                <img src='/images/info/211025_image_service_ratio_icon_01.png' style={{ width: '150px', height: '150px' }} onClick={() => {
                  router.push(`${links.hkMarginableStock}`)
                }}></img>
                <button style={{ color: 'black', fontSize: '20px' }} onClick={() => {
                  router.push(`${links.hkMarginableStock}`)
                }}>{g(props.cms, 'hk')}
                </button>
              </div>
              <div className='col-span-8 md:col-span-1 flex items-center text-center flex-col p-4 w-max'>
                <img src='/images/info/211025_image_service_ratio_icon_02.png' style={{ width: '150px', height: '150px' }} onClick={() => {
                  router.push(`${links.sseMarginableStock}`)
                }}></img>
                <button style={{ color: 'black', fontSize: '20px' }} onClick={() => {
                  router.push(`${links.sseMarginableStock}`)
                }}>{g(props.cms, 'sse')}
                </button>
              </div>
              <div className='col-span-8 md:col-span-1 flex items-center text-center flex-col p-4 w-max'>
                <img src='/images/info/211025_image_service_ratio_icon_03.png' style={{ width: '150px', height: '150px', paddingRight: '5%' }} onClick={() => {
                  router.push(`${links.szseMarginableStock}`)
                }}></img>
                <button style={{ color: 'black', fontSize: '20px' }} onClick={() => {
                  router.push(`${links.szseMarginableStock}`)
                }}>{g(props.cms, 'szse')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', paddingRight: '20%' }} className={`small-text bg-white`}>{g(props.cms, 'ps')}</div>
        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default BussinessOverview

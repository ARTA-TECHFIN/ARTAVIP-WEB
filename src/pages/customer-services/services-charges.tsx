import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { HeroBanner } from 'src/components/HeroBanner'
import { textClass } from 'src/components/Text'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/services-charges?populate=*`)
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
      files:cms.data.attributes.fee_files,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


const BussinessOverview = (props: { cms: any,files: any,heroBanner:any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  const u = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
    <Seo
      title={`${t('customer_service.service_charges')} | Arta TechFin`}
      description={t('customer_service.service_charges')}
      keywords={t('customer_service.service_charges')}
      ga="Service Charges"
    />
    <Header textColor="brown" />
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
    <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={g(props.cms, 'title')}
          description={props.heroBanner.description}
          image={props.heroBanner.image}
          mobileImage={props.heroBanner.mobileImage}
        />
    </main>
    <div id="services-charges-list">
        <h1 className={`${textClass.title}`}>{g(props.cms, 'title_sub')}</h1>
        <h1 style={{color:'gray'}} className={`${textClass.small_text}`}>{g(props.cms, 'description')}</h1>
        {
              props.files.map((j:any, i:any) => {
                return (
                    <div className=""  key={i}>
                      <hr className='securities-hr'></hr>
                      <div className='wrap'>
                        <button style={{color:'black'}}  className={`${textClass.small_text}`}  onClick={() => {
                            router.push(`${u(j, 'link')}`)}}>{u(j, 'title')}</button>
                      </div>
                    </div>
                )
              })
            }
        
    </div>
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
    <Footer textColor="white" />
    </>
  )
}

export default BussinessOverview

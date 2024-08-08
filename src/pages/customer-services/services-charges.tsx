import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

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
      files:cms.data.attributes.fee_files,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}


const BussinessOverview = (props: { cms: any,files: any }) => {
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
    <div id="services-charges-bd">{g(props.cms, 'title')}
    </div>
    <div id="services-charges-list">
        <h1>{g(props.cms, 'title_sub')}</h1>
        <h1 style={{color:'gray',fontSize:'20px'}}>{g(props.cms, 'description')}</h1>
        {
              props.files.map((j:any, i:any) => {
                return (
                    <div className=""  key={i}>
                      <hr className='securities-hr'></hr>
                      <div className='wrap'>
                        <div style={{color:'gray',fontSize:'17px', textIndent:'1em'}}>{u(j, 'title')}</div>
                        <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                            router.push(`${u(j, 'link')}`)}}>{t('product_info.download')}</button>
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

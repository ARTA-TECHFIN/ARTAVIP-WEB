import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/loan_ratios?populate=*`)
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


const BussinessOverview = (props: { cms: any}) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
    <Seo
      title={`${t('customer_service.loan_ratio')} | Arta TechFin`}
      description={t('customer_service.loan_ratio')}
      keywords={t('customer_service.loan_ratio')}
      ga="Loan Ratio"
    />
    <Header textColor="brown" />
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
    <div id="loan-ratio-bd">{t('customer_service.loan_ratio')}</div>
    <div style={{backgroundColor:'white',paddingLeft:'20%',paddingRight:'20%',paddingTop:'80px',display:'flex'}}>
        <div style={{width:'300px',height:'300px',display:'flex',alignItems:'center',flexDirection:'column',paddingRight:'5%'}}>
            <img src='/images/info/211025_image_service_ratio_icon_01.png' style={{width:'150px',height:'150px'}}></img>
            <button style={{color:'black',fontSize:'20px'}} onClick={() => {
                            router.push(`${links.hkMarginableStock}`)}}>{t('products_info.hk_marginable_stock')}
            </button>
           </div>
           <div style={{width:'300px',height:'300px',display:'flex',alignItems:'center',flexDirection:'column',paddingRight:'5%'}}>
             <img src='/images/info/211025_image_service_ratio_icon_02.png' style={{width:'150px',height:'150px'}}></img>
             <button style={{color:'black',fontSize:'20px'}} onClick={() => {
                            router.push(`${links.sseMarginableStock}`)}}>{t('products_info.sse_marginable_stock')}
             </button>
           </div>
           <div style={{width:'300px',height:'300px',display:'flex',alignItems:'center',flexDirection:'column'}}>
             <img src='/images/info/211025_image_service_ratio_icon_03.png' style={{width:'150px',height:'150px',paddingRight:'5%'}}></img>
             <button style={{color:'black',fontSize:'20px'}} onClick={() => {
                            router.push(`${links.szseMarginableStock}`)}}>{t('products_info.szse_marginable_stock')}
             </button>
           </div>
           <div style={{width:'300px',height:'300px',display:'flex',alignItems:'center',flexDirection:'column'}}>
             <img src='/images/info/211025_image_service_ratio_icon_05.png' style={{width:'150px',height:'150px',paddingRight:'5%'}}></img>
             <button style={{color:'black',fontSize:'20px'}} onClick={() => {
                            router.push(`${links.hkTradeTips}`)}}>{t('products_info.stock_open')}
             </button>
           </div>
           <div style={{width:'300px',height:'300px',display:'flex',alignItems:'center',flexDirection:'column'}}>
             <img src='/images/info/211025_image_service_ratio_icon_06_tc.png' style={{width:'150px',height:'150px',paddingRight:'5%'}}></img>
             <button style={{color:'black',fontSize:'20px'}} onClick={() => {
                            router.push(`${links.futuresAccount}`)}}>{t('products_info.futures_open')}
             </button>
           </div>
    </div>
    <div style={{backgroundColor:'white',textAlign:'right',paddingRight:'20%',fontSize:'15px'}}>{t('products_info.loan_ratio_ps')}</div>
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
    <Footer textColor="white" />
    </>
  )
}

export default BussinessOverview

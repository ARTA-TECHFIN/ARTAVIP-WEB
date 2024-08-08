import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/hk-marginable-stock?populate=*`)
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


const HKMarginableStock = (props: { cms: any}) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
    <Seo
      title={`${t('products_info.hk_marginable_stock')} | Arta TechFin`}
      description={t('products_info.hk_marginable_stock')}
      keywords={t('products_info.hk_marginable_stock')}
      ga="HK Trade Tips"
    />
    <Header textColor="white" />
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
    <div id="services-charges-bd">{t('products_info.hk_marginable_stock')}
    </div>
    <div style={{alignItems:'center', justifyContent:'center',paddingTop:'30px',backgroundColor:'white'}} 
        dangerouslySetInnerHTML={{__html: g(props.cms, 'headline')}}></div>
    <div style={{backgroundColor:'white'}}>
    <table style={{fontSize:'15px',paddingTop:'30px',backgroundColor:'white',marginLeft:'auto',marginRight:'auto'}} 
        dangerouslySetInnerHTML={{__html: g(props.cms, 'info')}}></table>
    </div>
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
    <Footer textColor="white" />
    </>
  )
}

export default HKMarginableStock

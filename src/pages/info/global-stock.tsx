import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/global-trade-tips?populate=*`)
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


const GlobalStockTips = (props: { cms: any}) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
    <Seo
      title={`${t('products_info.global_trade_tips')} | Arta TechFin`}
      description={t('products_info.global_trade_tips')}
      keywords={t('products_info.global_trade_tips')}
      ga="HK Trade Tips"
    />
    <Header textColor="brown" />
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
    <div id="services-charges-bd">{t('products_info.global_trade_tips')}
    </div>
    <div style={{ paddingLeft:'5%', paddingRight:'5%',fontSize:'15px',alignItems:'center', justifyContent:'center',paddingTop:'30px',backgroundColor:'white'}} 
        dangerouslySetInnerHTML={{__html: g(props.cms, 'tips')}}></div>
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
    <Footer textColor="white" />
    </>
  )
}

export default GlobalStockTips

import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/hk-trade-tips?populate=*`)
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


const InfoTips = (props: { cms: any}) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
    <Seo
      title={`${t('page_title.products_info')} | Arta TechFin`}
      description={t('page_title.products_info')}
      keywords={t('page_title.products_info')}
      ga="HK Trade Tips"
    />
    <Header textColor="brown" />
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
    <div id="products-info-bd">{t('page_title.products_info')}
    </div>
    <div className="arta-about-clearfix x-column x-sm x-1-2">
        <div className="product-info-box1">
           <p style={{fontSize:'32px',fontWeight:'700', textIndent:'0'}}>{t('products_info.stock')}</p>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.hk_trade_tips')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.hkTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.black')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.hkTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.us_trade_tips')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.usTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.ss_trade_tips')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.ssTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.us_trade_tips')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.usTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.global_trade_tips')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.globalTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
        </div>
        <div className="product-info-box">
        <p style={{fontSize:'32px',fontWeight:'700'}}>{t('products_info.futures')}</p>
        <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.contract')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.hkTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.global_contract')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.hkTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
           <hr className='securities-hr'></hr>
           <div className='info_wrap'>
                <div style={{color:'gray',fontSize:'17px'}}>{t('products_info.futures_expiration')}</div>
                 <button style={{color:'black',fontSize:'17px'}} onClick={() => {
                      router.push(`${links.usTradeTips}`)}}>{t('page_title.details')}</button>
           </div>
        </div>
      </div>
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
    <Footer textColor="white" />
    </>
  )
}

export default InfoTips

import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/form-download'
import { useTranslation } from 'next-i18next'
import { ButtonAnimated } from '../ButtonAnimated'
import { links } from 'src/domains/links'
import { link } from 'fs'

const PageFormDownloads: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('customer_service.form_download')} | Arta TechFin`}
        description={t('customer_service.form_download')}
        keywords={t('customer_service.form_download')}
        ga="Futures"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="form-download-bd">
            <h1 style={{ fontSize: '60px',color:"white" ,display:'flex', alignItems:'center', justifyContent:'left',fontWeight:'700px'}}>{t('customer_service.form_download')}</h1>
     </div>
     <div style={{paddingTop:'50px',paddingLeft:'5%',paddingRight:'5%',backgroundColor:'white'}}>
        <hr className='securities-hr'></hr>
        <h1 style={{fontSize:'35px',fontWeight:'700px',paddingTop:'40px',paddingBottom:'40px'}}>{k.title_1}</h1>
        <hr className='securities-hr'></hr>
        {
              k.form_1.map((j:any, i:any) => {
                return (
                    <div className="securities-trade-box"  key={i}>
                      <div className='form-wrap'>
                        <button style={{color:'black',fontSize:'18px',fontWeight:'700px'}} onClick={() => {
                            router.push(`${g(j, 'link')}`)}}>{g(j, 'title')}</button>
                      </div>
                      <hr className='securities-hr'></hr>
                    </div>
                )
              })
            }
        <h1 style={{fontSize:'35px',fontWeight:'700px',paddingTop:'40px',paddingBottom:'40px'}}>{k.title_2}</h1>
        <hr className='securities-hr'></hr>
        {
              k.form_2.map((j:any, i:any) => {
                return (
                    <div className="securities-trade-box"  key={i}>
                      <div className='form-wrap'>
                        <button style={{color:'black',fontSize:'18px',fontWeight:'700px'}} onClick={() => {
                            router.push(`${g(j, 'link')}`)}}>{g(j, 'title')}</button>
                      </div>
                      <hr className='securities-hr'></hr>
                    </div>
                )
              })
            }
        
        <div style={{paddingTop:'40px',backgroundColor:'white',fontSize:'18px'}} 
        dangerouslySetInnerHTML={{__html: k.tips}}></div>
        <img style={{width:'50px',height:'50px'}} src="/images/customers-services/Adobe_icon.png" onClick={() => {
                            router.push(`https://get.adobe.com/tw/reader/`)}} />
     </div>


{/* 
     <div id="futures_text_1">
            <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'left',paddingTop:'20px',paddingBottom:'20px',fontWeight:'700px'}}>{k.ex_des_1}</h1>
            <div className="fur-wrap">
              <img src='/images/products/icon_2.png' style={{backgroundColor:'none'}}></img>
              <div className="fur-wrap-text">
                  <div className='first' style={{fontSize:'20px'}}>{k.ex_des_2}</div>
                  <div className='second' style={{fontSize:'15px'}}>{k.ex_des_2_d}</div>
              </div>
          </div>
     </div> */}

     {/* <div id="futures_adv_1">
            <h1 style={{alignItems:'center', justifyContent:'center'}} dangerouslySetInnerHTML={{__html: k.ex_des_3}}></h1>
            <div style={{alignItems:'center', justifyContent:'center',display:'flex',paddingTop:'20px'}}>
            <ButtonAnimated
            as="a"
            href={`${links.productInfo}`}
            className="fur-button">
            {t('product_info.button')}
            </ButtonAnimated>
            </div>
     </div> */}
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageFormDownloads

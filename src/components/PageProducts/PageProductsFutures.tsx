import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/products/products-futures'
import { useTranslation } from 'next-i18next'
import { ButtonAnimated } from '../ButtonAnimated'
import { links } from 'src/domains/links'
import { link } from 'fs'

const PageProductsFutures: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('page_title.futures')} | Arta TechFin`}
        description={t('page_title.futures')}
        keywords={t('page_title.futures')}
        ga="Futures"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="container_futures">
            <h1 style={{ fontSize: '60px',color:"white" ,display:'flex', alignItems:'center', justifyContent:'right',paddingTop:'50px',paddingBottom:'20px',fontWeight:'700px'}}>{k.title}</h1>
            <h1 style={{ fontSize: '30px',color:"white" ,display:'flex', alignItems:'center', justifyContent:'right',paddingTop:'20px',paddingBottom:'30px',fontWeight:'700px'}}>{k.description}</h1>
     </div>

     <div id="futures_text_1">
            <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'left',paddingTop:'20px',paddingBottom:'20px',fontWeight:'700px'}}>{k.ex_des_1}</h1>
            <div className="fur-wrap">
              <img src='/images/products/icon_2.png' style={{backgroundColor:'none'}}></img>
              <div className="fur-wrap-text">
                  <div className='first' style={{fontSize:'20px'}}>{k.ex_des_2}</div>
                  <div className='second' style={{fontSize:'15px'}}>{k.ex_des_2_d}</div>
              </div>
          </div>
     </div>

     <div id="futures_adv_1">
            <h1 style={{alignItems:'center', justifyContent:'center'}} dangerouslySetInnerHTML={{__html: k.ex_des_3}}></h1>
            <div style={{alignItems:'center', justifyContent:'center',display:'flex',paddingTop:'20px'}}>
            <ButtonAnimated
            as="a"
            href={`${links.productInfo}`}
            className="fur-button">
            {t('product_info.button')}
            </ButtonAnimated>
            </div>


     </div>
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageProductsFutures

import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/qa'
import { useTranslation } from 'next-i18next'
import { ButtonAnimated } from '../ButtonAnimated'
import { links } from 'src/domains/links'
import { link } from 'fs'
import { json } from 'stream/consumers'

const PageQa: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('customer_service.qa')} | Arta TechFin`}
        description={t('customer_service.qa')}
        keywords={t('customer_service.qa')}
        ga="Futures"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="qna-bd">
            <h1 style={{ fontSize: '60px',color:"white" ,display:'flex', alignItems:'center', justifyContent:'left',fontWeight:'700px'}}>{t('customer_service.qa')}</h1>
     </div>
     <div className='business-overview-clearfix' >
            {
              k.data.map((j:any, i:any) => {
                return (
                  
                    <div className="qa-box"  style={{backgroundColor:'white'}} key={i}>
                      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={j.attributes.adv_icon_url} style={{width:'40px',height:'40px'}} alt=""/>
                        <button className='text-[25px]' style={{color:'gray',fontWeight:'700px'}} onClick={() => {
                            router.push(`${g(j, 'link')}`)}}>{g(j, 'title')}</button>
                      </div>
                      <p style={{fontSize:'15px'}} dangerouslySetInnerHTML={{__html: g(j, 'description')}}></p>
                    </div>
                )
              })
            }
      </div>
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageQa

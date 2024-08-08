import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/qa-fatca-crs'
import { useTranslation } from 'next-i18next'
import { ButtonAnimated } from '../ButtonAnimated'
import { links } from 'src/domains/links'
import Link from 'next/link'
import { textClass } from 'src/components/Text'
import { link } from 'fs'
import { json } from 'stream/consumers'

const showQaValue = (index: any) => () => {
  const qa=document.getElementById('qa-open-account-right-id');
  if (qa != null){
    qa.innerHTML=index
  }
  
}
const PageQaFatcaCRD: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('customer_service.qa_crs')} | Arta TechFin`}
        description={t('customer_service.qa_crs')}
        keywords={t('customer_service.qa_crs')}
        ga="QA Open Accounts"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="services-charges-bd">
            <h1 style={{ fontSize: '60px',color:"white" ,display:'flex', alignItems:'center', justifyContent:'left',fontWeight:'700px'}}>{t('customer_service.qa_crs')}</h1>
     </div>
     <div style={{backgroundColor:'white',paddingLeft:'5%',paddingTop:'40px'}}>
        <Link href={links.qa} style={{backgroundColor:'white'}}>
         <p className={`${textClass.body_regular} mb-12 flex gap-4`}>
           <svg className="mt-[6px]" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M8 0C7.96953 0.174335 7.9543 0.36004 7.9543 0.557115C7.9543 0.769349 7.96953 0.955054 8 1.11423L1.32795 6.89204L8 12.6143C7.96953 12.728 7.9543 12.8531 7.9543 12.9895C7.9543 13.1335 7.96953 13.7045 8 13.8182C6.04821 12.1796 -3.01261e-07 6.89204 -3.01261e-07 6.89204C-3.01261e-07 6.89204 6.09188 1.59358 8 0Z" fill="#593725"/>
             </svg>
            <span className="underline">{t("customer_service.back")}</span>
         </p>
        </Link>
        <div style={{paddingRight:'10%'}}>
          <div className='qa-open-account-left'>
          {
              k.data.map((j:any, i:any) => {
                return (
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}} key={i}>
                        <button className='text-[15px]' style={{color:'gray',fontWeight:'700px',border:'0.5px solid black',width:'100%',boxSizing:'content-box',margin:'0 auto'}} 
                        onClick={showQaValue(g(j, 'description'))}>{g(j, 'title')}</button>
                    </div>
                )
              })
            }
          </div>
          <div id='qa-open-account-right-id' className='qa-open-account-right' dangerouslySetInnerHTML={{__html: g(k.data[0], 'description')}}></div>
        </div>
     </div>

      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageQaFatcaCRD

import { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header/Header'
import { Seo } from 'src/components/Seo'
import { PageAboutCmsT } from 'src/pages/customer-services/services-charges'
import { HeroBanner } from '../HeroBanner'
import { textClass } from '../Text'

const PageServiceCharges: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  const u = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('customer_service.service_charges')} | Arta TechFin`}
        description={t('customer_service.service_charges')}
        keywords={t('customer_service.service_charges')}
        ga="Service Charges"
      />
      <Header textColor="brown" />
      <main className="flex flex-col">
        <HeroBanner
          title={`${t('customer_service.service_charges')} | Arta TechFin`}
          description=''
          image='/images/customers-services/211025_image_service_fee_banner.png'
          mobileImage='/images/customers-services/211025_image_service_fee_banner.png'
        />
        <div id="services-charges-list">
        <h1 className={`${textClass.title}`}>{g(k.cms, 'title_sub')}</h1>
        <h1 style={{color:'gray'}} className={`${textClass.small_text}`}>{g(k.cms, 'description')}</h1>
        {
              k.files.map((j:any, i:any) => {
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
        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full white-pic" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageServiceCharges

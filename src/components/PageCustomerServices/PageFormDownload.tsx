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
import { HeroBanner } from '../HeroBanner'
import { textClass } from '../Text'

const PageFormDownloads: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('customer_service.form_download')} | Arta TechFin`}
        description={t('customer_service.form_download')}
        keywords={t('customer_service.form_download')}
        ga="Form"
      />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={k.title}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
        <div style={{ paddingTop: '50px', paddingLeft: '5%', paddingRight: '5%', backgroundColor: 'white' }}>
          <hr className='securities-hr'></hr>
          <h1 style={{ fontWeight: '700px' }} className={`bg-white ${textClass.h3_style2} py-4`}>{k.title_1}</h1>
          <hr className='securities-hr'></hr>
          {
            k.form_1.map((j: any, i: any) => {
              return (
                <div className="securities-trade-box" key={i}>
                  <div className='form-wrap'>
                    <button style={{ fontWeight: '700px' }} className={`small-text text-black`} onClick={() => {
                      router.push(`${g(j, 'link')}`)
                    }}>{g(j, 'title')}</button>
                  </div>
                  <hr className='securities-hr'></hr>
                </div>
              )
            })
          }
          <h1 style={{ fontWeight: '700px' }} className={`bg-white ${textClass.h3_style2} py-4`}>{k.title_2}</h1>
          <hr className='securities-hr'></hr>
          {
            k.form_2.map((j: any, i: any) => {
              return (
                <div className="securities-trade-box" key={i}>
                  <div className='form-wrap'>
                    <button style={{ fontWeight: '700px' }} className={`small-text text-black`} onClick={() => {
                      router.push(`${g(j, 'link')}`)
                    }}>{g(j, 'title')}</button>
                  </div>
                  <hr className='securities-hr'></hr>
                </div>
              )
            })
          }

          <div className={`small-text bg-white pt-4`}
            dangerouslySetInnerHTML={{ __html: k.tips }}></div>
          <img style={{ width: '50px', height: '50px' }} src="/images/customers-services/Adobe_icon.png" onClick={() => {
            router.push(`https://get.adobe.com/tw/reader/`)
          }} />
        </div>
        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full white-pic" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageFormDownloads

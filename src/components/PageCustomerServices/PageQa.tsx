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
import { HeroBanner } from '../HeroBanner'
import { textClass } from '../Text'

const PageQa: FC<{ k: PageAboutCmsT }> = ({ k}) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${k.title} | Arta TechFin`}
        description={k.title}
        keywords={k.title}
        ga="Futures"
      />
      <Header textColor="brown" />
      <main className="flex flex-col">
        <HeroBanner
          title={k.title}
          description=''
          image='/images/customers-services/211025_image_service_qna_banner.png'
          mobileImage='/images/customers-services/211025_image_service_qna_banner.png'
        />
        <div className='px-8 bg-white'>
          <div className="mt-8 grid grid-cols-3 gap-x-12 md:grid-cols-4 lg:grid-cols-3 place-items-baseline bg-white">
            {
              k.data.map((j: any, i: any) => {
                return (

                  <div key={i} className='col-span-2 md:col-span-1 flex flex-col p-4 qa-min-box'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <img src={j.attributes.adv_icon_url} style={{ width: '40px', height: '40px' }} alt="" />
                      <button className={`mt-4 h6-text`} style={{ color: 'gray', fontWeight: '700px' }} onClick={() => {
                        router.push(`${g(j, 'link')}`)
                      }}>{g(j, 'title')}</button>
                    </div>
                    <p className={`small-text`} dangerouslySetInnerHTML={{ __html: g(j, 'description') }}></p>
                  </div>
                )
              })
            }
          </div>
        </div>

        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full white-pic" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageQa

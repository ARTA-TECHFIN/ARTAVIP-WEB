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
import { HeroBanner } from 'src/components/HeroBanner'
import { textClass } from '../Text'

const PageProductsFutures: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`
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
        <h1 style={{fontWeight: '700px' }} className={`${textClass.h3_style2} pt-5 pb-3 text-white flex items-center justify-end`}>{k.title}</h1>
        <h1 style={{fontWeight: '700px' }} className={`${textClass.h6} pt-2 pb-3 text-white flex items-center justify-end`}>{k.description}</h1>
      </div>

      <div id="futures_text_1">
        <h1 style={{alignItems: 'center', justifyContent: 'left', fontWeight: '700px' }} className={`${textClass.h6} py-2 flex`}>{k.ex_des_1}</h1>
        <div className="fur-wrap">
          <img src='/images/products/icon_2.png' style={{ backgroundColor: 'none' }}></img>
          <div className="fur-wrap-text">
            <div className={`${textClass.small_text} first`}>{k.ex_des_2}</div>
            <div className={`${textClass.small_text} second`}>{k.ex_des_2_d}</div>
          </div>
        </div>
      </div>

      <div id="futures_adv_1">
        <h1 style={{ alignItems: 'center', justifyContent: 'center' }}  className={`${textClass.h6}`} dangerouslySetInnerHTML={{ __html: k.ex_des_3 }}></h1>
        <div style={{ alignItems: 'center', justifyContent: 'center'}} className={` pt-2 flex`}>
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

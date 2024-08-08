import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/fund-deposits'
import { useTranslation } from 'next-i18next'
import { links } from 'src/domains/links'
import { ButtonAnimated } from '../ButtonAnimated'

const PageFundDeposits: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('customer_service.bank_detail')} | Arta TechFin`}
        description={t('customer_service.bank_detail')}
        keywords={t('customer_service.bank_detail')}
        ga="Fund deposits"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="fund_deposits-bd">
        <h1 style={{ fontSize: '60px', color: "white", display: 'flex', alignItems: 'center', justifyContent: 'left', paddingTop: '50px', paddingBottom: '20px', fontWeight: '700px' }}>{t('customer_service.bank_detail')}</h1>
      </div>
      {/* 存款途徑 */}
      <div style={{ backgroundColor: 'white' }}>
        <h1 style={{ fontSize: '42px', color: 'black', paddingLeft: '50px', paddingTop: '40px' }}>{g(k.data, 'title_1')}</h1>
      </div>
      <div className="arta-about-clearfix x-column x-sm x-1-2" style={{ backgroundColor: 'white' }}>
        <div className="fund_deposits-box1">
          <img src='/images/customers-services/211025_image_service_deposit_method_icon_02.png' style={{display:'block',margin:'0 auto'}}></img>
          <ButtonAnimated
            as="a"
            href={`${g(k.data, 'sub_button_1_link')}`}
            className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
            {g(k.data, 'sub_button_1')}
          </ButtonAnimated>
        </div>
        <div className="fund_deposits-box">
          <img src='/images/customers-services/211025_image_service_deposit_method_icon_03.png' style={{display:'block',margin:'0 auto'}}></img>
          <ButtonAnimated
            as="a"
            href={`${g(k.data, 'sub_button_2_link')}`}
            className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
            {g(k.data, 'sub_button_2')}
          </ButtonAnimated>
        </div>
      </div>

      {/* 注意事项 */}
      <div style={{ backgroundColor: 'white', fontSize: '15px', paddingLeft: '50px' }} dangerouslySetInnerHTML={{ __html: k.notice }}></div>
      <div style={{ backgroundColor: 'white' }}>
        <h1 style={{ fontSize: '42px', color: 'black', paddingLeft: '50px', paddingTop: '40px' }}>{g(k.data, 'title_2')}</h1>
      </div>
      <div className="arta-about-clearfix x-column x-sm x-1-2" style={{ backgroundColor: 'white' }}>
        <div className="fund_deposits-box1">
          <img src='/images/customers-services/211025_image_service_deposit_icon_02.png' style={{display:'block',margin:'0 auto'}}></img>
          <h1 style={{ fontSize: '30px', color: 'black'}}>{g(k.data, 'sub_msg_1')}</h1>
          <div style={{ backgroundColor: 'white', fontSize: '15px'}} dangerouslySetInnerHTML={{ __html: k.notice_ps }}></div>
        </div>
        <div className="fund_deposits-box">
          <img src='/images/customers-services/211025_image_service_deposit_icon_05.png' style={{display:'block',margin:'0 auto'}}></img>
          <h1 style={{ fontSize: '30px', color: 'black'}}>{g(k.data, 'sub_msg_2')}</h1>
          <div style={{ backgroundColor: 'white', fontSize: '15px'}} dangerouslySetInnerHTML={{ __html: k.notice_ph }}></div>
        </div>
      </div>

      {/* 備注 */}
      <div style={{ backgroundColor: 'white' , paddingLeft: '50px',fontSize:'20px' }}>
        <div dangerouslySetInnerHTML={{ __html: k.remark_1 }}></div>
        <div dangerouslySetInnerHTML={{ __html: k.remark_2 }}></div>
        <ButtonAnimated
            as="a"
            href={`${links.qa}`}
            className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
            {t('customer_service.qa')}
          </ButtonAnimated>
      </div>

      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageFundDeposits

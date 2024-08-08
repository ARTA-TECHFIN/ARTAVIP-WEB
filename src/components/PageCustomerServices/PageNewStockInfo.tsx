import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/new-stock-info'
import { useTranslation } from 'next-i18next'
import { ButtonAnimated } from '../ButtonAnimated'

const showIpoValue = () => () => {
  const qa=document.getElementById('ipolist');
  const qaCalendar=document.getElementById('ipoCalender');
  if (qa != null){
    qa.style.display="block";
    qaCalendar!.style.display="none";
  }
}

const showCalendarValue = () => () => {
  const qa=document.getElementById('ipolist');
  const qaCalendar=document.getElementById('ipoCalender');
  if (qa != null){
    qa.style.display="none";
    qaCalendar!.style.display="block";
  }
}

const PageNewStockInfo: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('customer_service.new_stock_info')} | Arta TechFin`}
        description={t('customer_service.new_stock_info')}
        keywords={t('customer_service.new_stock_info')}
        ga="Futures"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="new-stock-bd">
        <h1 style={{ fontSize: '60px', color: "white", display: 'flex', alignItems: 'center', justifyContent: 'left', fontWeight: '700px' }}>{t('customer_service.new_stock_info')}</h1>
      </div>
      <div style={{ backgroundColor: 'white', paddingLeft: '5%', paddingRight: '5%', paddingTop: '40px' }}>
        <h1 style={{ fontSize: '40px', color: 'grey' }}>{g(k.data, 'title')}</h1>
        <div className="arta-about-clearfix x-column x-sm x-1-2">
          <div className="fund_deposits-box1">
            <img src='/images/customers-services/211025_image_service_deposit_icon_01.png' style={{ display: 'block', margin: '0 auto' }}></img>
            <h1 style={{ fontSize: '30px', color: 'black' }}>{g(k.data, 'sub_t_1')}</h1>
            <ButtonAnimated
              as="a"
              href={`${k.data.sub_d_1_link}`}
              className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
              {g(k.data, 'sub_d_1')}
            </ButtonAnimated>
          </div>
          <div className="fund_deposits-box">
            <img src='/images/customers-services/211025_image_service_deposit_icon_05.png' style={{ display: 'block', margin: '0 auto' }}></img>
            <h1 style={{ fontSize: '30px', color: 'black' }}>{g(k.data, 'sub_t_2')}</h1>
            <h1 style={{ fontSize: '15px', color: 'black' }}>{g(k.data, 'sub_d_2')}</h1>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '0 auto', border: '0.5px solid black', width: '80%' }}>
          <button style={{ border: '0.5px solid black', width: '50%' }} onClick={showIpoValue()}>{g(k.data, 'button_1')}</button>
          <button style={{ border: '0.5px solid black', width: '50%' }} onClick={showCalendarValue()}>{g(k.data, 'button_2')}</button>
        </div>
        <div style={{ display: 'block', margin: '0 auto', border: '0.5px solid black', width: '80%'}}>
          <iframe id="ipolist" src={g(k.data, 'button_1_link')} width="99%" height="800px"></iframe>
          <iframe id="ipoCalender" style={{display:'none'}} src={g(k.data, 'button_2_link')} width="99%" height="800px"></iframe>
        </div>
      </div>

      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageNewStockInfo

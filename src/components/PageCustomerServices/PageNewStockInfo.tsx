import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/new-stock-info'
import { useTranslation } from 'next-i18next'
import { ButtonAnimated } from '../ButtonAnimated'
import { HeroBanner } from '../HeroBanner'
import { textClass } from '../Text'

const showIpoValue = () => () => {
  const qa = document.getElementById('ipolist');
  const qaCalendar = document.getElementById('ipoCalender');
  if (qa != null) {
    qa.style.display = "block";
    qaCalendar!.style.display = "none";
  }
}

const showCalendarValue = () => () => {
  const qa = document.getElementById('ipolist');
  const qaCalendar = document.getElementById('ipoCalender');
  if (qa != null) {
    qa.style.display = "none";
    qaCalendar!.style.display = "block";
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
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('customer_service.new_stock_info')}
          description=''
          image='/images/customers-services/211025_image_service_stock_banner.png'
          mobileImage='/images/customers-services/211025_image_service_stock_banner.png'
        />

        <div style={{ backgroundColor: 'white', paddingLeft: '5%', paddingRight: '5%', paddingTop: '40px' }}>
          <h1 style={{ color: 'grey' }} className={`${textClass.h2_style2} `}>{g(k.data, 'title')}</h1>

          <div className={`bg-white`}>
            <div className="bg-white arta-container relative z-1 mx-auto flex flex-col-reverse items-center pb-12 lg:flex-row lg:space-x-[40px] lg:py-[150px]">
              <div className="flex-1 text-center">
                <img src='/images/customers-services/211025_image_service_deposit_icon_01.png' style={{ display: 'block', margin: '0 auto' }}></img>
                <h1 className={`${textClass.title_verah} text-black`}>{g(k.data, 'sub_t_1')}</h1>
                <ButtonAnimated
                  as="a"
                  href={`${k.data.sub_d_1_link}`}
                  className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
                  {g(k.data, 'sub_d_1')}
                </ButtonAnimated>
              </div>
              <div className="mt-[25px] mb-4 flex-1 lg:mt-0 text-center">
                <img src='/images/customers-services/211025_image_service_deposit_icon_05.png' style={{ display: 'block', margin: '0 auto' }}></img>
                <h1 className={`${textClass.title_verah} text-black`}>{g(k.data, 'sub_t_2')}</h1>
                <h1 className={`small-text text-black pt-2`}>{g(k.data, 'sub_d_2')}</h1>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', margin: '0 auto', border: '0.5px solid black', width: '80%' }}>
            <button style={{ border: '0.5px solid black', width: '50%' }} onClick={showIpoValue()}>{g(k.data, 'button_1')}</button>
            <button style={{ border: '0.5px solid black', width: '50%' }} onClick={showCalendarValue()}>{g(k.data, 'button_2')}</button>
          </div>
          <div style={{ display: 'block', margin: '0 auto', border: '0.5px solid black', width: '80%' }}>
            <iframe id="ipolist" src={g(k.data, 'button_1_link')} width="99%" height="800px"></iframe>
            <iframe id="ipoCalender" style={{ display: 'none' }} src={g(k.data, 'button_2_link')} width="99%" height="800px"></iframe>
          </div>
        </div>

        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full white-pic" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageNewStockInfo

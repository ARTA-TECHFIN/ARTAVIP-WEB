import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/deposit-fps'
import { useTranslation } from 'next-i18next'
import { links } from 'src/domains/links'
import Link from 'next/link'
import { textClass } from 'src/components/Text'
import { ButtonAnimated } from '../ButtonAnimated'
import { HeroBanner } from '../HeroBanner'

const showQaValue = (index: any) => () => {
  const qa = document.getElementById('qa-open-account-right-id');
  if (qa != null) {
    qa.innerHTML = index
  }
}
const PageDepositFPS: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  const z = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('customer_service.fps')} | Arta TechFin`}
        description={t('customer_service.fps')}
        keywords={t('customer_service.fps')}
        ga="QA Open Accounts"
      />
      <Header textColor="brown" />
      {/* <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="fund-deposits-bank-bd">
        <h1 style={{ fontSize: '60px', color: "white", display: 'flex', alignItems: 'center', justifyContent: 'left', fontWeight: '700px' }}>{t('customer_service.fps')}</h1>
      </div> */}
      <main className="flex flex-col">
        <HeroBanner
          title={t('customer_service.fps')}
          description=''
          image='/images/customers-services/211025_image_service_deposit_insidepages_banner.png'
          mobileImage='/images/customers-services/211025_image_service_deposit_insidepages_banner.png'
        />
        <div style={{ backgroundColor: 'white', paddingLeft: '5%', paddingRight: '5%', paddingTop: '40px' }}>
          <Link href={links.fundDeposites} style={{ backgroundColor: 'white' }}>
            <p className={`${textClass.body_regular} mb-12 flex gap-4`}>
              <svg className="mt-[6px]" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C7.96953 0.174335 7.9543 0.36004 7.9543 0.557115C7.9543 0.769349 7.96953 0.955054 8 1.11423L1.32795 6.89204L8 12.6143C7.96953 12.728 7.9543 12.8531 7.9543 12.9895C7.9543 13.1335 7.96953 13.7045 8 13.8182C6.04821 12.1796 -3.01261e-07 6.89204 -3.01261e-07 6.89204C-3.01261e-07 6.89204 6.09188 1.59358 8 0Z" fill="#593725" />
              </svg>
              <span className="underline">{t("customer_service.back")}</span>
            </p>
          </Link>
          <div style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '30px', backgroundColor: 'white' }} dangerouslySetInnerHTML={{ __html: g(k.data, 'fps') }}></div>
          <h1 style={{color: 'grey' }} className={`h6-text `}>{g(k.data, 'text_1')}</h1>
          {
            k.procedure.map((j: any, i: any) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} key={i}>
                  <img src={j.icon} style={{ height: '3%', width: '3%', paddingBottom: '10px' }}></img>
                  <p className={`small-text `}>{z(j, 'title')}</p>
                </div>
              )
            })
          }
          <ButtonAnimated
            as="a"
            href={`${links.qa}`}
            className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
            {t('customer_service.qa')}
          </ButtonAnimated>
          <h1 style={{ fontSize: '40px', color: 'grey', paddingTop: '40px' }}>{g(k.data, 'text_2')}</h1>
          <div className={`bg-white`}>
            <div className="bg-white arta-container relative z-1 mx-auto flex flex-col-reverse items-center pb-12 lg:flex-row lg:space-x-[40px] lg:py-[150px]">
              <div className="flex-1 text-center">
                <img src='/images/customers-services/211025_image_service_deposit_icon_03.png' style={{ display: 'block', margin: '0 auto' }}></img>
                <h1 className={`small-text text-black`}>{g(k.data, 'sub_msg_1')}</h1>
                <h1 className={`small-text text-black`}>{g(k.data, 'sub_d_1')}</h1>
              </div>
              <div className="mt-[25px] mb-4 flex-1 lg:mt-0 text-center">
              <img src='/images/customers-services/211025_image_service_deposit_icon_02.png' style={{ display: 'block', margin: '0 auto' }}></img>
              <h1 className={`small-text text-black`}>{g(k.data, 'sub_msg_2')}</h1>
              <h1 className={`small-text text-black`}>{g(k.data, 'sub_d_2')}</h1>
              </div>
            </div>
          </div>
          <h1 style={{color: 'grey', paddingTop: '40px' }} className={`small-text`} dangerouslySetInnerHTML={{ __html: g(k.data, 'note') }}></h1>
        </div >

        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageDepositFPS

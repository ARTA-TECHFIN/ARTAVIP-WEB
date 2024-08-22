import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { PageAboutCmsT } from 'src/pages/customer-services/fund-deposits'
import { useTranslation } from 'next-i18next'
import { links } from 'src/domains/links'
import { ButtonAnimated } from '../ButtonAnimated'
import { HeroBanner } from '../HeroBanner'
import { textClass } from '../Text'
import Image from 'next/image'

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
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('customer_service.bank_detail')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
        {/* 存款途徑 */}
        <div className={`bg-white`}>
          <h1 className={`${textClass.h2_style2} text-black pl-8 py-4`} >{g(k.data, 'title_1')}</h1>
        </div>
        <div className={`bg-white`}>
          <div className="bg-white arta-container relative z-1 mx-auto flex flex-col-reverse items-center pb-2 lg:flex-row lg:space-x-[20px] lg:py-[30px]">
            <div className="flex-1 text-center">
              <img src='/images/customers-services/211025_image_service_deposit_method_icon_02.png' style={{ display: 'block', margin: '0 auto' }}></img>
              <ButtonAnimated
                as="a"
                href={`${g(k.data, 'sub_button_1_link')}`}
                className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
                {g(k.data, 'sub_button_1')}
              </ButtonAnimated>
            </div>
            <div className="mt-[25px] mb-4 flex-1 lg:mt-0 text-center">
              <img src='/images/customers-services/211025_image_service_deposit_method_icon_03.png' style={{ display: 'block', margin: '0 auto' }}></img>
              <ButtonAnimated
                as="a"
                href={`${g(k.data, 'sub_button_2_link')}`}
                className="mt-4 border-arta-sand-100 text-arta-sand-100 fund_deposits_textbutton">
                {g(k.data, 'sub_button_2')}
              </ButtonAnimated>
            </div>
          </div>
        </div>


        {/* 注意事项 */}
        <div className={`bg-white small-text pl-8 py-4`} dangerouslySetInnerHTML={{ __html: k.notice }}></div>
        <div className={`bg-white`}>
          <h1 className={`${textClass.h2_style2} text-black pl-8 py-4`}>{g(k.data, 'title_2')}</h1>
        </div>
        <div className={`bg-white`}>
          <div className="bg-white arta-container relative z-1 mx-auto flex flex-col-reverse items-center pb-2 lg:flex-row lg:space-x-[20px] lg:py-[30px]">
            <div className="flex-1 text-center">
              <img src='/images/customers-services/211025_image_service_deposit_icon_02.png' style={{ display: 'block', margin: '0 auto' }}></img>
              <h1 className={`small-text text-black`}>{g(k.data, 'sub_msg_1')}</h1>
              <div className={`small-text bg-white`} dangerouslySetInnerHTML={{ __html: k.notice_ps }}></div>
            </div>
            <div className="mt-[25px] mb-4 flex-1 lg:mt-0 text-center">
              <img src='/images/customers-services/211025_image_service_deposit_icon_05.png' style={{ display: 'block', margin: '0 auto' }}></img>
              <h1 className={`small-text text-black`}>{g(k.data, 'sub_msg_2')}</h1>
              <div className={`small-text bg-white`} dangerouslySetInnerHTML={{ __html: k.notice_ph }}></div>
            </div>
          </div>
        </div>

        {/* 備注 */}
        <div className={`bg-white pl-8 py-4 small-text`}>
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
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageFundDeposits

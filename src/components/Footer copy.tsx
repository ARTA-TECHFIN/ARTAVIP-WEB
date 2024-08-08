import React, { FC, useEffect, useState } from 'react'
import { Hr } from './Hr'
import { IconFacebook, IconLinkedIn, IconTwitter, IconWeChat } from './Svg/Icon'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import contactJson from 'apidata/contact.json'
import { WechatPopup } from './WechatPopup'
import { links } from 'src/domains/links'
import Link from 'next/link'
import cn from 'classnames'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/contact-us`)
  const data = await res.json()
  return data
}

const Footer: FC<{
  textColor?: 'white' | 'brown' | 'black'
  setShowWechatPopup?: (f: boolean) => void
}> = (props) => {
  const { t } = useTranslation('common')
  const { textColor = 'white', setShowWechatPopup } = props
  const router = useRouter()
  const { locale } = router
  const [openWeChatPopup, setOpenWeChatPopup] = useState(false)

  const [footerData, setFooterData] = useState<any>({})

  const textClass =
    textColor === 'white'
      ? 'text-arta-eggshell-100 decoration-arta-snow-100'
      : textColor === 'black'
        ? 'text-arta-black decoration-arta-black'
        : 'text-arta-sand-100 decoration-arta-sand-100'
  const bgClass =
    textColor === 'white'
      ? 'arta-gm-footer{'
      : textColor === 'black'
        ? 'bg-white'
        : 'bg-arta-eggshell-100'
  const borderClass =
    textColor === 'white'
      ? 'border-[#878095]'
      : textColor === 'black'
        ? 'border-[#AAAAAA]'
        : 'border-arta-sand-100/50'

  useEffect(() => {
    const fetchData = async () => {
      const useLocalCms = process.env.NEXT_PUBLIC_USE_LOCAL_CMS_DATA === 'true'
      const result = contactJson

      setFooterData(result.data.attributes)
    }

    fetchData()
  }, [])

  const g = (keyWithoutLang: string) => `${footerData[`${keyWithoutLang}_${locale}`]}`

  const k = {
    address: `Units 1-2, Level 9, \nK11 ATELIER King’s Road, \n728 King’s Road,Quarry Bay,\nHong Kong`,
    socialMediaList: [
      { href: footerData.social_media_link_linkedin, Component: IconLinkedIn },
      { href: footerData.social_media_link_twitter, Component: IconTwitter },
      { href: footerData.social_media_link_facebook, Component: IconFacebook },
    ],
  }

  return (
    <>
      <footer
        className={`relative z-2 h-full w-full ${bgClass} ${textClass} will-change-transform`}
      >
        <div className='business-overview-clearfix'>
          {/* <div className="order-1 flex flex-col space-y-3 text-[16px] md:flex-row md:space-x-60 md:space-y-0 lg:order-1"> */}
          <div className="footer-box">
            {/* <div className="flex flex-col items-start justify-start space-y-4"> */}
            <div style={{ display: 'flex' }}>
              <h6 className="font-Verah text-[16px] leading-[24px]">{t('page_title.about_us')}</h6>
              <ul className="list-none font-Neue text-[12px] leading-[20px]">
                <li>
                  <a title={t('about_us.about_us_profile')} href={`tel: ${footerData.about_us_profile}`}>
                    <span>
                      {t('about_us.about_us_profile')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.about_us_profile}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('about_us.business_overview')} href={`tel: ${footerData.business_overview}`}>
                    <span>
                      {t('about_us.business_overview')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.business_overview}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('about_us.contact_us')} href={`tel: ${footerData.contact_us}`}>
                    <span>
                      {t('about_us.contact_us')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.contact_us}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex' }}>
              <h6 className="font-Verah text-[16px] leading-[24px]">
                {t('page_title.products')}
              </h6>
              <ul className="list-none font-Neue text-[12px] leading-[20px]">
                <li>
                  <a title={t('page_title.securities')} href={`tel: ${footerData.securities}`}>
                    <span>
                      {t('page_title.securities')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.securities}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a title={t('page_title.futures')} href="fax:+852 2507 2009">
                    <span>
                      {t('page_title.futures')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.futures}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex' }}>
              <h6 className=" text-[16px] leading-[24px]">{t('page_title.customer_service')} </h6>
              <ul className="list-none font-Neue text-[12px] leading-[20px]">
                <li>
                  <a title={t('customer_service.service_charges')} href={`tel: ${footerData.service_charges}`}>
                    <span>
                      {t('customer_service.service_charges')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.service_charges}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a title={t('customer_service.important_notice')} href="fax:+852 2507 2009">
                    <span>
                      {t('customer_service.important_notice')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.important_notice}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('customer_service.fund_withdrawals_and_deposits')} href="fax:+852 2507 2009">
                    <span>
                      {t('customer_service.fund_withdrawals_and_deposits')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.fund_withdrawals_and_deposits}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('customer_service.loan_ratio')} href="fax:+852 2507 2009">
                    <span>
                      {t('customer_service.loan_ratio')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.loan_ratio}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('customer_service.form_download')} href="fax:+852 2507 2009">
                    <span>
                      {t('customer_service.form_download')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.form_download}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('customer_service.terms_of_service')} href="fax:+852 2507 2009">
                    <span>
                      {t('customer_service.terms_of_service')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.terms_of_service}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a title={t('customer_service.qa')} href="fax:+852 2507 2009">
                    <span>
                      {t('customer_service.qa')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.qa}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ display: 'flex' }}>
              <h6 className="font-Verah text-[16px] leading-[24px]">
                {t('page_title.website_trade')}
              </h6>
              <ul className="list-none font-Neue text-[12px] leading-[20px]">
                <li>
                  <a title={t('page_title.securities')} href={`tel: ${footerData.securities}`}>
                    <span>
                      {t('page_title.securities')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.securities}
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a title={t('page_title.futures')} href="fax:+852 2507 2009">
                    <span>
                      {t('page_title.futures')}{' '}
                      <span className="cursor-pointer hover:underline">
                        {footerData.futures}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Hr borderColorClass={borderClass} />
          <div className="flex  flex-col items-start justify-start space-y-5 font-Neue lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-around space-x-3 text-[12px] leading-[20px] sm:space-x-6">
              <Link
                title={t('page_title.disclaimer')}
                href={links.disclaimer}
                className="cursor-pointer hover:underline"
              >
                {t('page_title.disclaimer')}
              </Link>
              <p>|</p>
              <Link
                title={t('page_title.privacy_policy')}
                href={links.privacy_policy}
                className="cursor-pointer hover:underline"
              >
                {t('page_title.privacy_policy')}
              </Link>
              <p>|</p>
              <LanguageSwitcher />
            </div>
            <div className="text-xs leading-[20px]">
              <p>{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </footer>
      {openWeChatPopup && (
        <WechatPopup
          togglePopup={setOpenWeChatPopup}
          qrCode={footerData.social_media_link_wechat.data.attributes.url}
        />
      )}
    </>
  )
}

export default Footer

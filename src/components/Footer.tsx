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
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/contact-us`)
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
      ? 'bg-arta-bistre-100'
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
      const result = useLocalCms ? contactJson : await fetchCmsData()

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
        <div className="flex max-w-main-contain py-6 px-6 md:px-20 md:py-12 xl:mx-auto">
          <div className="flex w-full flex-col space-y-9">
            <div className="flex flex-col justify-between lg:flex-row lg:space-x-9">
              <div className="order-2 flex flex-col space-y-5 text-[16px] md:flex-row md:space-x-5 md:space-y-0 lg:order-1">
                <div className="flex flex-col items-start justify-start space-y-4">
                  <h6 className="font-Verah text-[16px] leading-[24px]">{t('footer.address')}</h6>
                  <p className="whitespace-pre font-Neue text-[12px] leading-[20px]">
                    {g('address')}
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <h6 className="font-Verah text-[16px] leading-[24px]">
                    {t('footer.contact_us')}
                  </h6>
                  <ul className="list-none font-Neue text-[12px] leading-[20px]">
                    <li>
                      <a title={'Phone number'} href={`tel: ${footerData.footer_tel}`}>
                        <span>
                          {t('footer.tel')}{' '}
                          <span className="cursor-pointer hover:underline">
                            {footerData.footer_tel}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a title={'Fax'} href="fax:+852 2507 2009">
                        <span>
                          {t('footer.fax')}{' '}
                          <span className="cursor-pointer hover:underline">
                            {footerData.footer_fax}
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a title={'Email Arta'} href={`mailto:${footerData.footer_email}`}>
                        <span>
                          {t('footer.email')}{' '}
                          <span className="cursor-pointer hover:underline">
                            {footerData.footer_email}
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <h6 className=" text-[16px] leading-[24px]">{t('footer.social_media')} </h6>
                  <div className="flex space-x-2">
                    {k.socialMediaList.map(({ href, Component }, i: number) => (
                      <a className={cn(
                        textColor == 'white' && `text-[#878095] hover:text-white`,
                        textColor == 'black' && `text-[#aaa9ab] hover:text-black`,
                        textColor == "brown" && `text-[#878095] hover:text-arta-sand-100`
                      )} href={href} key={i} target="_blank" rel="noreferrer">
                        <Component className="h-6 w-6 pr-1 last:pr-0" fill="currentColor" />
                      </a>
                    ))}
                    <div
                      className={cn(
                        `cursor-pointer`,
                        textColor == 'white' && `text-[#878095] hover:text-white`,
                        textColor == 'black' && `text-[#aaa9ab] hover:text-black`,
                        textColor == "brown" && `text-[#878095] hover:text-arta-sand-100`
                      )}
                      onClick={() => {
                        setOpenWeChatPopup(true)
                        if (setShowWechatPopup) setShowWechatPopup(true)
                      }}
                    >
                      <IconWeChat className="h-6 w-6 pr-1 last:pr-0" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-4 flex items-start justify-start space-y-3 lg:order-2 lg:mb-0 lg:space-y-0">
                <h3 className="text-left text-[32px] font-bold leading-[40px] lg:text-right lg:text-[36px] lg:leading-[45px]">
                  {t('footer.tagline')}
                </h3>
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

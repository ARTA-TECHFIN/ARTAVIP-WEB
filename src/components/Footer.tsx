import React, { FC, useEffect, useState } from 'react'
import { Hr } from './Hr'
import { IconFacebook, IconLinkedIn, IconTwitter, IconWeChat } from './Svg/Icon'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import Link from 'next/link'
import cn from 'classnames'
import headerJson from 'apidata/header.json'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AM_HOSTING_PATH}/api/cms/home-footer?populate=*`)
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

  const [footerData, setFooterData] = useState<any>({})

  const textClass =
    textColor === 'white'
      ? 'text-arta-eggshell-100 decoration-arta-snow-100'
      : textColor === 'black'
        ? 'text-arta-black decoration-arta-black'
        : 'text-arta-sand-100 decoration-arta-sand-100'
  const bgClass =
    textColor === 'white'
      ? 'arta-am-footer{'
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
      const result = await fetchCmsData()
      setFooterData(result.data.attributes)
    }

    fetchData()
  }, [])

  const g = (keyWithoutLang: string) => `${footerData[`${keyWithoutLang}_${locale}`]}`
  const z = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <footer
        className={`relative z-2 h-full w-full ${bgClass} ${textClass} will-change-transform`}
      >
        <div className="mt-8 grid grid-cols-4 gap-x-12 lg:grid-cols-4 justify-items-center place-items-start px-10">
        </div>
        <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <Hr borderColorClass={borderClass} />
          <div className="flex  flex-col items-start justify-start space-y-5 font-Neue lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-around space-x-3 text-[12px] leading-[20px] sm:space-x-6">
              <Link
                title={z(headerJson,'disclaimer')}
                href={links.disclaimer}
                className="cursor-pointer hover:underline"
              >
                {z(headerJson,'disclaimer')}
              </Link>
              <p>|</p>
              <Link
                title={z(headerJson,'privacy_policy')}
                href={links.privacy_policy}
                className="cursor-pointer hover:underline"
              >
                {z(headerJson,'privacy_policy')}
              </Link>
              <p>|</p>
              <LanguageSwitcher />
            </div>
            <div className="text-xs leading-[20px]">
              <p>{g('copyright')}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

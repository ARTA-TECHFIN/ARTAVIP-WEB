import React, { FC, useEffect, useState } from 'react'
import { Hr } from './Hr'
import { IconFacebook, IconLinkedIn, IconTwitter, IconWeChat } from './Svg/Icon'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import Link from 'next/link'
import cn from 'classnames'


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

    }

    fetchData()
  }, [])

  const g = (keyWithoutLang: string) => `${footerData[`${keyWithoutLang}_${locale}`]}`

  const k = {
    address: `Units 1-2, Level 9, \nK11 ATELIER King’s Road, \n728 King’s Road,Quarry Bay,\nHong Kong`,
  }

  return (
    <>
      <footer
        className={`relative z-2 h-full w-full ${bgClass} ${textClass} will-change-transform`}
      >
        <div className="mt-8 grid grid-cols-4 gap-x-12 lg:grid-cols-4 justify-items-center place-items-start px-10">
        </div>
        <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <div className="flex  flex-col items-start justify-start space-y-5 font-Neue lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-around space-x-3 text-[12px] leading-[20px] sm:space-x-6">
              <LanguageSwitcher />
            </div>

          </div>
          <Hr borderColorClass={borderClass} />

        </div>
      </footer>
    </>
  )
}

export default Footer

import { ComponentProps, forwardRef } from 'react'
import { textClass } from './Text'
import { Upload } from './Svg/Icon'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import headerJson from 'apidata/header.json'

// type propsT = ComponentProps<'input'>

const InputFile = forwardRef<HTMLInputElement, {}>((props, ref) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <div className="relative mt-2 flex h-[150px] w-full items-center justify-center rounded-lg bg-[#F3F2F4]">
      <div className="flex flex-col items-center text-center">
        <Upload />
        <p className="text-sm text-black">
          <span className="font-bold text-arta-secondary underline">{g(headerJson,'upload_box')}</span>
        </p>
        <p className="mt-4 text-xs">{g(headerJson,'upload_limitation')}</p>
      </div>
    </div>
  )
})

InputFile.displayName = 'InputFile'

export { InputFile }

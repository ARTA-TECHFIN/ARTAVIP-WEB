import { ComponentProps, forwardRef } from 'react'
import { textClass } from './Text'
import { Upload } from './Svg/Icon'
import { useTranslation } from 'next-i18next'

// type propsT = ComponentProps<'input'>

const InputFile = forwardRef<HTMLInputElement, {}>((props, ref) => {
  const { t } = useTranslation('common')
  return (
    <div className="relative mt-2 flex h-[150px] w-full items-center justify-center rounded-lg bg-[#F3F2F4]">
      <div className="flex flex-col items-center text-center">
        <Upload />
        <p className="text-sm text-black">
          <span className="font-bold text-arta-secondary underline">{t('join_us.upload_box')}</span>
        </p>
        <p className="mt-4 text-xs">{t('join_us.upload_limitation')}</p>
      </div>
      {/* <input
        ref={ref}
        type="file"
        className={`${textClass.body_regular} absolute inset-0 opacity-0 focus:outline-none`}
        {...props}
      /> */}
    </div>
  )
})

InputFile.displayName = 'InputFile'

export { InputFile }

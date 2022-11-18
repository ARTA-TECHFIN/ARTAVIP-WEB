import { ComponentProps, forwardRef } from 'react'
import { textClass } from './Text'
import { Upload } from './Svg/Icon'

type propsT = ComponentProps<'input'>

const InputFile = forwardRef<HTMLInputElement, propsT>((props, ref) => {
  return (
    <div className="relative mt-2 flex h-[150px] w-full items-center justify-center rounded-lg bg-[#F3F2F4]">
      <div className="flex flex-col items-center text-center">
        <Upload />
        <p className="text-sm text-black">
          Drag & drop filies or{' '}
          <span className="font-bold text-arta-secondary underline">Browse</span>
        </p>
        <p className="mt-4 text-xs">(Max. 5MB PDF/DOC)</p>
      </div>
      <input
        ref={ref}
        type="file"
        className={`${textClass.body_regular} absolute inset-0 opacity-0 focus:outline-none`}
        {...props}
      />
    </div>
  )
})

InputFile.displayName = 'InputFile'

export { InputFile }

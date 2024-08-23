import { ComponentProps, forwardRef } from 'react'
import { textClass } from './Text'

type propsT = ComponentProps<'input'>

const InputText = forwardRef<HTMLInputElement, propsT>((props, ref) => {
  return (
    <input
      ref={ref}
      className={`body-regular-text border-b border-arta-indigo-100 py-3 text-arta-sand-100 focus:outline-none`}
      {...props}
    />
  )
})

InputText.displayName = 'InputText'

export { InputText }

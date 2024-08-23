import { ComponentProps, forwardRef } from 'react'
import { textClass } from './Text'

type propsT = ComponentProps<'textarea'>

const InputTextArea = forwardRef<HTMLTextAreaElement, propsT>((props, ref) => {
  return (
    <textarea
      ref={ref}
      className={`body-regular-text resize-none border border-arta-indigo-100 py-2 px-2 text-arta-sand-100 focus:outline-none`}
      rows={4}
      {...props}
    />
  )
})

InputTextArea.displayName = 'InputTextArea'

export { InputTextArea }

import { ComponentProps } from 'react'
import { textClass } from './Text'

type propsT = ComponentProps<'textarea'>

const InputTextArea = (props: propsT) => {
  return (
    <textarea
      className={`${textClass.body_regular} resize-none border border-arta-indigo-100 py-2 px-2 text-arta-sand-100 focus:outline-none`}
      rows={4}
      {...props}
    />
  )
}

export { InputTextArea }

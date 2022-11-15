import { ComponentProps } from 'react'
import { textClass } from './Text'

type propsT = ComponentProps<'input'>

const InputText = (props: propsT) => {
  return (
    <input
      className={`${textClass.body_regular} border-b border-arta-indigo-100 py-3 text-arta-sand-100 focus:outline-none`}
      {...props}
    />
  )
}

export { InputText }

import { textClass } from './Text'

type propsT = {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}
const InputField = (props: propsT) => {
  return (
    <label
      className={
        'flex flex-col text-arta-sand-100' + (props.className ? ` ${props.className}` : '')
      }
    >
      <span className={`mb-1 ${textClass.small_text}`}>{props.label}</span>
      {props.children}
      {props.error && <span className="mt-1 text-xs ">{props.error}</span>}
    </label>
  )
}

export { InputField }

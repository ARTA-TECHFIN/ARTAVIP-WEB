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
      <span className={`mb-1 font-bold tracking-widest text-arta-sand-100 small-text`}>
        {props.label}
      </span>
      {props.children}
      {props.error && (
        <p role="alert" className="mt-1 text-xs text-red-400">
          {props.error}
        </p>
      )}
    </label>
  )
}

export { InputField }

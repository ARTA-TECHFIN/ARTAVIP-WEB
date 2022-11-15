import { ComponentProps } from 'react'

type propsT = ComponentProps<'select'> & {
  options: Array<{ label: string; value: string }>
}

const InputDropdown = ({ options, ...rest }: propsT) => {
  return (
    <select
      className="w-full border-b border-solid border-arta-indigo-100 bg-transparent py-3 text-base focus:outline-none"
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export { InputDropdown }

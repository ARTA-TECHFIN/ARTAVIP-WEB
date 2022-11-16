import { ComponentProps, forwardRef } from 'react'

type propsT = ComponentProps<'select'> & {
  options: Array<{ label: string; value: string }>
}

const InputDropdown = forwardRef<HTMLSelectElement, propsT>(
  ({ options, className, ...rest }, ref) => {
    return (
      <select
        ref={ref}
        className={
          'w-full border-b border-solid border-arta-indigo-100 bg-transparent py-3 text-base focus:outline-none' +
          (className ? ` ${className}` : '')
        }
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
)

InputDropdown.displayName = 'InputDropdown'

export { InputDropdown }

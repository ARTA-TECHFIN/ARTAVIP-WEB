import { ChangeEvent } from 'react'

type propsT = {
  options: Array<{ label: string; value: string }>
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>, value: string) => void
}

const InputDropdown = (props: propsT) => {
  return (
    <select value={props.value} onChange={(e) => props.onChange(e, e.target.value)} 
      className='bg-transparent w-full py-3 border-b border-solid border-arta-indigo-100 focus:outline-none text-base'
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export { InputDropdown }

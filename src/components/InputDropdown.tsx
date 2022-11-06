import { ChangeEvent } from 'react'

type propsT = {
  options: Array<{ label: string; value: string }>
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>, value: string) => void
}

const InputDropdown = (props: propsT) => {
  return (
    <select value={props.value} onChange={(e) => props.onChange(e, e.target.value)}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export { InputDropdown }

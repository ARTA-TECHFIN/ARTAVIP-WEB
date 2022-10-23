type propsT = {
  className?: string
  borderColorClass?: string
}
const Hr = (props: propsT) => {
  const borderColor = props.borderColorClass || 'border-arta-sand-100'
  return (
    <hr className={`my-4 w-full ${borderColor}` + (props.className ? ` ${props.className}` : '')} />
  )
}

export { Hr }

type propsT = {
  className?: string
}
const Hr = (props: propsT) => {
  return (
    <hr
      className={
        'my-4 w-full border-arta-sand-100' + (props.className ? ` ${props.className}` : '')
      }
    />
  )
}

export { Hr }

type propsT = {
  fill?: string
  className?: string
}
const IconArrowRight = (props: propsT) => {
  const fill = props.fill || '#F4F1E1'
  return (
    <svg
      width="18"
      height="5"
      viewBox="0 0 18 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M13.9492 4.05L13.9492 1.81066L16.1886 4.05H13.9492Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 3.6001H15V4.8001H0V3.6001Z" fill={fill} />
    </svg>
  )
}

export { IconArrowRight }

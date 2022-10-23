type propsT = {
  fill?: string
  className?: string
}
const IconListItemArrow = (props: propsT) => {
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

const IconArrowLeft = (props: propsT) => {
  const fill = props.fill || '#F4F1E1'
  return (
    <svg
      width="16"
      height="27"
      viewBox="0 0 16 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M0.789062 12.6875C0.28125 13.1953 0.28125 13.9062 0.789062 14.4141L12.6719 26.1953C13.1797 26.7031 13.9922 26.7031 14.3984 26.1953L15.1094 25.4844C15.6172 24.9766 15.6172 24.2656 15.1094 23.7578L4.75 13.5L15.2109 3.34375C15.6172 2.83594 15.6172 2.125 15.2109 1.61719L14.3984 0.90625C13.9922 0.398438 13.1797 0.398438 12.6719 0.90625L0.789062 12.6875Z"
        fill={fill}
      />
    </svg>
  )
}

const IconArrowRight = (props: propsT) => {
  const fill = props.fill || '#F4F1E1'
  return (
    <svg
      width="16"
      height="27"
      viewBox="0 0 16 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M15.2109 12.6875C15.7188 13.1953 15.7188 13.9062 15.2109 14.4141L3.32812 26.1953C2.82031 26.7031 2.00781 26.7031 1.60156 26.1953L0.890625 25.4844C0.382812 24.9766 0.382812 24.2656 0.890625 23.7578L11.25 13.5L0.789062 3.34375C0.382812 2.83594 0.382812 2.125 0.789062 1.61719L1.60156 0.90625C2.00781 0.398438 2.82031 0.398438 3.32812 0.90625L15.2109 12.6875Z"
        fill={fill}
      />
    </svg>
  )
}

export { IconListItemArrow, IconArrowLeft, IconArrowRight }

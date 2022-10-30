type propsT = {
  title: string
}
const ReportCard = (props: propsT) => {
  return <div>{props.title}</div>
}

export { ReportCard }

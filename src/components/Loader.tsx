type propsT = {
  isLoading?: boolean
}

const Loader = ({ isLoading = true }: propsT) => {
  if (!isLoading) return null

  return <div>Loading</div>
}

export { Loader }

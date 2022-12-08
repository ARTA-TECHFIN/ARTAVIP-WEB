type propsT = {
  isLoading?: boolean
}

const Loader = ({ isLoading = true }: propsT) => {
  if (!isLoading) return null

  return <div className="my-16"><img className="w-6 h-6" src="/images/loading.svg" /></div>
}

export { Loader }

type propsT = {
  error: unknown
}

const ErrorMessage = ({ error }: propsT) => {
  if (!error) return null

  if (error instanceof Error) return <div>{error.message}</div>

  if (typeof error === 'string') return <div>{error}</div>

  console.error('Unknown error type', error)
  return <div>Unknown error</div>
}

export { ErrorMessage }

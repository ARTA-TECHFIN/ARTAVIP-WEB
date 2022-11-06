import { useMemo } from 'react'

type propsT = {
  page: number
  totalPage: number
  onChange: (page: number) => void
  disabled?: boolean
}

// TODO: Add style
// TODO: Add support for mobile
// TODO: Add support for totalPage < MAX_PAGE_SHOW

const Pagination = (props: propsT) => {
  const MAX_PAGE_SHOW = 10
  const { page, totalPage, onChange, disabled } = props
  const pageList = useMemo(() => {
    // For performance, use for loop instead of Array.from
    const list = []
    let minPage = 1
    let maxPage = totalPage
    if (totalPage > MAX_PAGE_SHOW) {
      minPage = Math.max(1, page - 2)
      maxPage = Math.min(totalPage, minPage + MAX_PAGE_SHOW - 1)
      if (maxPage - minPage + 1 < MAX_PAGE_SHOW) minPage = Math.max(1, maxPage - MAX_PAGE_SHOW + 1)
    }

    for (let i = minPage; i <= maxPage; i++) list.push(i)
    return list
  }, [page, totalPage])

  if (totalPage <= 1) return null

  return (
    <ol className="grid grid-cols-12">
      <li>
        <button
          className={'w-6' + (page === 1 ? ' pointer-events-none opacity-0' : '')}
          onClick={() => onChange(page - 1)}
          disabled={disabled}
        >
          {`<`}
        </button>
      </li>
      {pageList.map((p) => (
        <li key={p}>
          <button
            className={'w-6' + (p === page ? ' bg-red-700' : ' bg-gray-200')}
            onClick={() => onChange(p)}
            disabled={disabled}
          >
            {p}
          </button>
        </li>
      ))}
      <li>
        <button
          className={'w-6' + (page >= totalPage ? ' pointer-events-none opacity-0' : '')}
          onClick={() => onChange(page + 1)}
          disabled={disabled}
        >
          {`>`}
        </button>
      </li>
    </ol>
  )
}

export { Pagination }

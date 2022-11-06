import { useMemo } from 'react'
import {IconArrowLeft, IconArrowRight} from './Svg/Icon'

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
    <ol className="grid grid-cols-12 gap-[2px] max-w-[406px] mx-auto">
      <li className='col-span-1 flex items-center'>
        <button
          className={'w-full !h-8 bg-white flex items-center justify-center' + (page === 1 ? ' pointer-events-none opacity-0' : '')}
          onClick={() => onChange(page - 1)}
          disabled={disabled}
        >
          <IconArrowLeft className='w-4 h-4' fill='#593725'/>
        </button>
      </li>
      {pageList.map((p) => (
        <li key={p} className="col-span-1 flex items-center">
          <button
            className={'w-full h-8 text-base font-Verah tracking-wide transition' + (p === page ? ' bg-arta-sand-100 text-white' : ' bg-white')}
            onClick={() => onChange(p)}
            disabled={disabled}
          >
            {p}
          </button>
        </li>
      ))}
      <li className='className="col-span-1 flex items-center'>
        <button
          className={'w-full h-8 text-base bg-white  flex items-center justify-center' + (page >= totalPage ? ' pointer-events-none opacity-0' : '')}
          onClick={() => onChange(page + 1)}
          disabled={disabled}
        >
          <IconArrowRight className='w-4 h-4' fill='#593725'/>
        </button>
      </li>
    </ol>
  )
}

export { Pagination }

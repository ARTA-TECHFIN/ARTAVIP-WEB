import { useEffect, useRef } from 'react'
import cn from 'classnames'

type propsT = {
  tabs: {label: string, value: string}[]
  selectedTab: string
  setSelectedTab: (tab: string, index: number) => void
}

const TabBar = (props: propsT) => {
  const { tabs, selectedTab, setSelectedTab } = props
  const ulRef = useRef(null)

  return (
    <ul ref={ulRef} className="flex md:justify-center justify-start mt-4 lg:mt-0 lg:pl-0 pl-6 lg:gap-16 gap-8 border-solid border-b border-arta-sand-200 text-arta-sand-200 min-w-[750px] lg:min-w-[650px]">
      {tabs.map((tab, index) => {
        const isSelected = tab.value === selectedTab
        return (
          <li
            key={index}
            onClick={() => setSelectedTab(tab.value, index)}
          >
            <button className={cn('pb-2 transition-all md:text-xl text-lg whitespace-pre', isSelected && 'text-arta-sand-100  border-solid border-b-2 border-arta-sand-100')}>{tab.label}</button>
          </li>
        )
      })}
    </ul>
  )
}

export { TabBar }

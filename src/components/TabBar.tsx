import { useEffect, useRef } from 'react'
import cn from 'classnames'
import classNames from 'classnames'

type propsT = {
  className?: string
  tabs: {label: string, value: string}[]
  selectedTab: string
  setSelectedTab: (tab: string, index: number) => void
}

const TabBar = (props: propsT) => {
  const { tabs, selectedTab, setSelectedTab, className } = props
  const ulRef = useRef(null)

  return (
    <ul ref={ulRef} className={`flex md:justify-center justify-start mt-4 lg:mt-0 pl-6 border-solid border-b border-arta-sand-200 text-arta-sand-200 ${className}`}>
      {tabs.map((tab, index) => {
        const isSelected = tab.value === selectedTab
        return (
          <li
            key={index}
            onClick={() => setSelectedTab(tab.value, index)}
          >
            <button className={cn('pb-2 transition-all md:text-xl text-lg whitespace-pre mr-8 lg:mr-16', isSelected && 'text-arta-sand-100  border-solid border-b-2 border-arta-sand-100')}>{tab.label}</button>
          </li>
        )
      })}
    </ul>
  )
}

export { TabBar }

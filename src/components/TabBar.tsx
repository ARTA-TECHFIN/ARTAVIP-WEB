import cn from 'classnames'

type propsT = {
  tabs: string[]
  selectedTab: string
  setSelectedTab: (tab: string, index: number) => void
}

const TabBar = (props: propsT) => {
  const { tabs, selectedTab, setSelectedTab } = props

  return (
    <ul className="flex justify-center gap-16 border-solid border-b border-arta-sand-200 text-arta-sand-200">
      {tabs.map((tab, index) => {
        const isSelected = tab === selectedTab
        return (
          <li
            key={index}
            onClick={() => setSelectedTab(tab, index)}
          >
            <button className={cn('pb-2 transition-all', isSelected && 'text-arta-sand-100  border-solid border-b-2 border-arta-sand-100')}>{tab}</button>
          </li>
        )
      })}
    </ul>
  )
}

export { TabBar }

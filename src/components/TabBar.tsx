import cn from 'classnames'

type propsT = {
  tabs: string[]
  selectedTab: string
  setSelectedTab: (tab: string, index: number) => void
}

const TabBar = (props: propsT) => {
  const { tabs, selectedTab, setSelectedTab } = props

  return (
    <ul className="flex justify-center gap-8">
      {tabs.map((tab, index) => {
        const isSelected = tab === selectedTab
        return (
          <li
            key={index}
            onClick={() => setSelectedTab(tab, index)}
            className={cn('', isSelected && 'bg-blue-500')}
          >
            <button>{tab}</button>
          </li>
        )
      })}
    </ul>
  )
}

export { TabBar }

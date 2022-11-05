import cn from 'classnames'

type propsT = {
  tabs: string[]
  selectedTab: string
  setSelectedTab: (tab: string, index: number) => void
}

const TabBar = (props: propsT) => {
  const { tabs, selectedTab, setSelectedTab } = props

  return (
    <ul className="flex md:justify-center justify-start lg:pl-0 pl-8 lg:gap-16 gap-8 border-solid border-b border-arta-sand-200 text-arta-sand-200 min-w-[650px]">
      {tabs.map((tab, index) => {
        const isSelected = tab === selectedTab
        return (
          <li
            key={index}
            onClick={() => setSelectedTab(tab, index)}
          >
            <button className={cn('pb-2 transition-all md:text-xl text-lg', isSelected && 'text-arta-sand-100  border-solid border-b-2 border-arta-sand-100')}>{tab}</button>
          </li>
        )
      })}
    </ul>
  )
}

export { TabBar }

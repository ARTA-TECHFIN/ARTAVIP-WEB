import { textClass } from '../Text'

import { TabBar } from '../TabBar'
import { links } from 'src/domains/links'
import Router from 'next/router'
import { FC } from 'react'

const TABS = {
  All: 'All',
  Front_office: 'Front_office',
  Middle_and_Back_Office: 'Middle_and_Back_Office',
} as const

type tabsT = keyof typeof TABS

const tabInfoMap = {
  [TABS.All]: { title: 'All', link: links.joinUs },
  [TABS.Front_office]: { title: 'Front Office', link: links.joinUsFrontOffice },
  [TABS.Middle_and_Back_Office]: {
    title: 'Middle and Back Office',
    link: links.joinUsMiddleAndBackOffice,
  },
}

const tabList = Object.values(tabInfoMap)

type propsT = {
  tabType: tabsT
  children: React.ReactNode
}

const SectionJobOpenings: FC<propsT> = ({ tabType, children }) => {
  const tabInfo = tabInfoMap[tabType]

  return (
    <div className="bg-arta-eggshell-100 py-12 md:py-[150px]" id="job-opening">
      <div className="arta-container mx-auto">
        <div className="text-center">
          <h3 className={textClass.h2_style2}>Job Openings</h3>
          <p className={`${textClass.body_regular_verah} mt-4`}>
            For further information, please contact our HRBP via{' '}
            <a href="mailto:recruit@artatechfin.com"></a> or apply directly.
          </p>
        </div>
        <div className="arta-hide-scrollbar -mx-6 overflow-auto py-16 md:mx-0 ">
          <TabBar
            tabs={tabList.map((t) => t.title)}
            selectedTab={tabInfo.title}
            setSelectedTab={(_, index) =>
              Router.push(tabList[index].link, undefined, { scroll: false })
            }
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export { TABS as JobTabs }
export default SectionJobOpenings

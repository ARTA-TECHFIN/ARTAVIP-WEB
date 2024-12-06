/* eslint-disable react/jsx-key */
import { useEffect, useRef } from 'react'
import cn from 'classnames'
import classNames from 'classnames'
import { useRouter } from 'next/router'

type propsT = {
  className?: string
  tabs: {label: string, value: string, show: boolean, sub:any}[]
  // subtabs: {label: string, value: string}[]
  selectedTab: string
  setSelectedTab: (tab: string, index: number) => void
}

const TabBar2 = (props: propsT) => {
  const { tabs, selectedTab, setSelectedTab, className } = props
  const ulRef = useRef(null)
  const { locale } = useRouter() 
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`
  return (
    <><ul ref={ulRef} className={`flex md:justify-center justify-start mt-4 lg:mt-0 pl-6 border-solid border-b border-arta-sand-200 text-arta-sand-200 ${className}`}>
      {tabs.map((tab, index) => {
        const isSelected = tab.value === selectedTab
        console.log("sub:"+JSON.stringify(tab.sub))
        return (
          <li className='dropdown'
            key={index}
            onClick={() => setSelectedTab(tab.value, index)}
          >
            <button className={cn('pb-2 transition-all md:text-xl text-lg whitespace-pre mr-8 lg:mr-16', isSelected && 'text-arta-sand-100  border-solid border-b-2 border-arta-sand-100')}>{tab.label}</button>
            {tab.sub.map((k:any, index:any) => {
              if (tab.show){
                return (<li>{g(k,'name')}</li>)
              }else{
                return (<li style={{ display: 'none'}}>{g(k,'name')}</li>)
              }
          
            })} </li>
          )
        })}

    </ul></>
  )
}

export { TabBar2 }

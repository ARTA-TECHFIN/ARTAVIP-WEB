import React, { FC } from 'react'
import { ModuleTextSection } from './ModuleTextSection'
import { ModuleTextColList } from './ModuleTextColList'
import { ModuleIconList } from './ModuleIconList'

const BusinessPageModules: FC<{ components: any[], locale: string }> = ({components, locale}) => {
  const g = (compData: any, keyWithoutLang: string) => typeof(`${compData[`${keyWithoutLang}_${locale}`]}`) === null ? "" : compData[`${keyWithoutLang}_${locale}`] 

  return (
    <>
      {
        components.map((component: any, i: number) => {
          switch (component.__component) {
            case "our-business.component-1":
              return (
                <ModuleTextSection
                  key={i}
                  title={g(component, 'title')}
                  description={g(component, 'content')}
                  bgImage={"/images/asset-management/bg-introduction.png"}
                />
              )
            case "our-business.component-2":
              return (
                <ModuleIconList
                  padding={component.padding}
                  iconList={[
                    {
                      icon: component.icon_left?.data?.attributes?.url || "",
                      title: g(component, 'title_left') || "",
                      body: g(component, 'content_left') || "",
                    },
                    {
                      icon: component.icon_right?.data?.attributes?.url || "",
                      title: g(component, 'title_right') ?? "",
                      body: g(component, 'content_right') ?? "",
                    }]
                  }
                />
              )
            case "our-business.component-3":
              return (
                <div key={i} className='overflow-hidden bg-arta-eggshell-100'>
                  <ModuleTextColList
                    headerPosition={'right'}
                    header={g(component, 'title')}
                    title={g(component, 'subtitle')}
                    content={g(component, 'content')}
                  />
                </div>
              )
            case "our-business.component-4":
              return (
                <div key={i} className='overflow-hidden bg-arta-eggshell-100'>
                  <ModuleTextColList
                    headerPosition={'left'}
                    header={g(component, 'title')}
                    title={g(component, 'subtitle')}
                    content={g(component, 'content')}
                  />
                </div>
              )
            default:
              return <div key={i}>5</div>
          }
        })
      }
    </>
  )
}

export default BusinessPageModules

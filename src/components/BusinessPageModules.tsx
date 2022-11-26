import React, { FC } from 'react'
import { ModuleTextSection } from './ModuleTextSection'
import { ModuleTextColList } from './ModuleTextColList'

const BusinessPageModules: FC<{ components: any[], locale: string }> = ({components, locale}) => {
  const g = (compData: any, keyWithoutLang: string) => `${compData[`${keyWithoutLang}_${locale}`]}`

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
              return <div key={i}>234</div>
            case "our-business.component-3":
              return (
                <div key={i} className='overflow-hidden bg-arta-eggshell-100'>
                  <ModuleTextColList
                    headerPosition={component.headerPosition || 'right'}
                    header={g(component, 'title')}
                    title={g(component, 'subtitle')}
                    list={[
                      {
                        title: "Title",
                        body: "Body"
                      },
                      {
                        title: "Title",
                        body: "Body"
                      },
                    ]}
                  />
                </div>
              )
            default:
              return <div key={i}></div>
          }
        })
      }
    </>
  )
}

export default BusinessPageModules

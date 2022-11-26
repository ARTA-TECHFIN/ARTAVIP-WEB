import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { ModuleTextSection } from '../ModuleTextSection'
import { ModuleTextColList } from '../ModuleTextColList'

const PageBusinessesPage: FC<{ t: any, locale: string }> = ({ t, locale }) => {
  const g = (data: any,keyWithoutLang: string) => `${data[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t.heroBanner.title}
          description={t.heroBanner.description}
          image={t.heroBanner.image}
          mobileImage={t.heroBanner.mobileImage}
          label={t.heroBanner.label}
        />
        {
          t.components.map((component: any, i: number) => {
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
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageBusinessesPage

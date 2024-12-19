import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { BreakBarriers } from 'src/components/PageHome/breakBarriers'

export const Slides = () => {
  const [firstLoad, setFirstLoad] = useState(true)
  const [disableScroll, setDisableScroll] = useState(false)
  const [currentSectionId, setCurrentSectionId] = useState<number>(0)

  const slideLeaveEvent = (origin: any, destination: any, direction: any) => {
    if (origin.index === 2 && destination.index === 1) {
      setCurrentSectionById(1.5)
    } else {
      setCurrentSectionById(destination.index)
    }
    setDisableScroll(destination.index === 1)

    const myElement: HTMLElement | null = document.getElementById('break-barriers-video')
    if (myElement != null)
      if (destination.index === 0 && direction == 'up') {
        myElement.style.opacity = '1'
      }
  }

  const setCurrentSectionById = (id: number) => {
    setCurrentSectionId(id)
  }

  const afterLoadEvent = (origin: any, destination: any, direction: any) => {
    const myElement: HTMLElement | null = document.getElementById('break-barriers-video')
    if (myElement != null)
      if (destination.index === 1 && direction == 'down') {
        myElement.style.opacity = '0'
      }
  }

  useEffect(() => {
    setFirstLoad(false)
  }, [])

  return (
    <ReactFullpage
      //fullpage options
      licenseKey="KEO76-3R4A7-1FJ48-SVJ58-YVOFN"
      scrollingSpeed={800}
      onLeave={slideLeaveEvent}
      afterLoad={afterLoadEvent}
      keyboardScrolling={true}
      verticalCentered={false}
      sectionsColor={['#543317', '#000000', '#653711']}
      render={({ state, fullpageApi }) => {
        fullpageApi?.setAllowScrolling(!disableScroll)
        if (firstLoad) {
          fullpageApi?.silentMoveTo(1)
        }

        return (
          <>
            <ReactFullpage.Wrapper>
              <section className="section fixing section home relative box-border flex h-full w-full items-center justify-center text-center">
                <BreakBarriers/>
              </section>
            </ReactFullpage.Wrapper>
          </>
        )
      }}
    />
  )
}

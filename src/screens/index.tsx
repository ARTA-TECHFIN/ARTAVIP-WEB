import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import { gsap } from 'gsap'

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import About from '../components/About'
import { BreakBarriers } from './breakBarriers'
import TechFin from '../components/TechFin'
import { updateSectionScroll, scrolling } from '../helpers/updateSection'

export const Screens = () => {

  const [disableScroll, setDisableScroll] = useState(false)
  const [currentSectionId, setCurrentSectionId] = useState<number>(0)

  const slideLeaveEvent = (origin:any, destination:any, direction:any) => {
    if (origin.index === 2 && destination.index === 1) {
      setCurrentSectionById(1.5)
    } else {
      setCurrentSectionById(destination.index)
    }

    setDisableScroll(destination.index === 1)
  }

  const setCurrentSectionById = (id:number) => {
    console.log(id)
    setCurrentSectionId(id)
  }

  return (
    <ReactFullpage
      //fullpage options
      licenseKey="KEO76-3R4A7-1FJ48-SVJ58-YVOFN"
      scrollingSpeed = {1000} /* Options here */
      onLeave={slideLeaveEvent}
      render={({ state, fullpageApi }) => {
        if (disableScroll) fullpageApi.setAllowScrolling(false)

        return (
          <>
            <ReactFullpage.Wrapper>
              <section className="section fixing section home w-full h-full flex justify-center items-center text-center relative box-border">
                <BreakBarriers />
              </section>
              <section className="section section double w-full h-full flex justify-center items-center text-center relative box-border">
                <TechFin
                  isEntered={disableScroll}
                  currentSectionId={currentSectionId}
                  setCurrentSectionById={setCurrentSectionById}
                  setTriggerSection={async(id:number) => {
                    setDisableScroll(false)
                    fullpageApi.setAllowScrolling(true)
                    fullpageApi.moveTo(id, 0)
                  }}
                />
              </section>
              <section className="section section double w-full h-full flex justify-center items-center text-center relative box-border">
                <About />
              </section>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  )
}

import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import About from '../components/About'
import { BreakBarriers } from './breakBarriers'
import TechFin from '../components/TechFin'
import Footer from 'src/components/Footer';

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
      scrollingSpeed = {800}
      onLeave={slideLeaveEvent}
      keyboardScrolling={true}
      sectionsColor={['#543317', '#000000', '#653711']}
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
              <div className="section fp-auto-height" id="section3"> 
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  )
}

import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import About from './about'
import { BreakBarriers } from './breakBarriers'
import TechFin from './techFin'
import Footer from 'src/components/Footer';

export const Slides = () => {

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
    setCurrentSectionId(id)
  }

  return (
    <ReactFullpage
      //fullpage options
      licenseKey="KEO76-3R4A7-1FJ48-SVJ58-YVOFN"
      scrollingSpeed = {800}
      onLeave={slideLeaveEvent}
      keyboardScrolling={true}
      verticalCentered= {false}
      sectionsColor={['#543317', '#000000', '#653711']}
      render={({ state, fullpageApi }) => {
        if (disableScroll) fullpageApi.setAllowScrolling(false)

        return (
          <>
            <ReactFullpage.Wrapper>
              <section className="section fixing section home w-full h-full flex justify-center items-center text-center relative box-border">
                <BreakBarriers currentSectionId={currentSectionId} />
              </section>
              <section className="section section double w-full h-full flex justify-center items-center relative box-border will-change-transform">
                <TechFin
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

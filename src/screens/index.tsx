import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { gsap } from 'gsap'

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import About from '../components/About'
import { BreakBarriers } from './breakBarriers'
import TechFin from '../components/TechFin'
import { updateSectionScroll } from '../helpers/updateSection'

export const Screens = () => {
  const sectionList = [
    {
      id: 1,
      name: 'break-barriers',
    },
    {
      id: 2,
      name: 'techfin',
    },
    {
      id: 4,
      name: 'our-business',
    },
    {
      id: 5,
      name: 'about'
    }
  ]

  const slideLeaveEvent = (origin:any, destination:any, direction:any) => {
    console.log(destination.index)
    if (destination.index == 1) {
      console.log("fire")
    }
  }

  return (
    // <>
    //   <div className="w-full flex flex-wrap">
    //     <section className="fixing section home w-full h-full flex justify-center items-center text-center relative box-border">
    //       <BreakBarriers />
    //     </section>
    //     <section className="fixing section double w-full h-full flex justify-center items-center text-center relative box-border">
    //       <TechFin newSection={newSection} setNewSection={setNewSection} />
    //     </section>
    //     <section className="fixing section lastone w-full h-full flex justify-center items-center text-center relative box-border">
    //       <About />
    //     </section>
    //   </div>
    // </>
    <ReactFullpage
      //fullpage options
      licenseKey="KEO76-3R4A7-1FJ48-SVJ58-YVOFN"
      scrollingSpeed = {1000} /* Options here */
      onLeave={slideLeaveEvent}

      render={({ state, fullpageApi }) => {
        return (
          <>
            <ReactFullpage.Wrapper>
              <section className="section fixing section home w-full h-full flex justify-center items-center text-center relative box-border">
                <BreakBarriers />
              </section>
              <section className="section section double w-full h-full flex justify-center items-center text-center relative box-border">
                <TechFin />
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

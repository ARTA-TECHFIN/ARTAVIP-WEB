import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styled from 'styled-components'
import About from '../components/About'
import OurBusiness from '../components/OurBusiness'
import { BreakBarriers } from './breakBarriers'
import TechFin from '../components/TechFin'

const SectionContainer = styled.div`
  width: 100%;
  height: 400%;
  display: flex;
  flex-wrap: wrap;
`

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  box-sizing: border-box;
`

export const Screens = () => {
  function updateSection(i: any, anim?: any) {
    gsap.to(window, {
      scrollTo: { y: i * innerHeight, autoKill: true },
      duration: 1,
    })

    if (anim) {
      anim.restart()
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)
    ScrollTrigger.refresh()

    if (typeof window !== 'undefined') {
      const instances = []

      gsap.utils.toArray('.section').forEach((panel: any, i) => {
        instances.push(
          ScrollTrigger.create({
            trigger: panel,
            onEnter: () => updateSection(i),
          })
        )

        instances.push(
          ScrollTrigger.create({
            trigger: panel,
            start: 'bottom bottom',
            onEnterBack: () => updateSection(i),
          })
        )
      })

      const panel = gsap.utils.toArray('.panel')
    }
  }, [])

  return (
    <>
      <SectionContainer className="slider-container">
        <Section className="section">
          <BreakBarriers />
        </Section>
        <Section className="section ">
          <TechFin />
        </Section>
        <Section className="section ">
          <OurBusiness />
        </Section>
        <Section className="section ">
          <About />
        </Section>
      </SectionContainer>
    </>
  )
}

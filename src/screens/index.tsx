import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// TODO: Remove styled-components
import styled from 'styled-components'
import About from '../components/About'
import { BreakBarriers } from './breakBarriers'
import TechFin from '../components/TechFin'
import { updateSection } from '../helpers/updateSection'

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
  const [newSection, setNewSection] = React.useState(false)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)
    ScrollTrigger.refresh()

    if (typeof window !== 'undefined') {
      const sections = document.querySelectorAll('.fixing')

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom-=1',
          end: 'bottom top+=1',
          onEnter: () => updateSection(section, i),
          onEnterBack: () => updateSection(section),
        })
      })
    }
  }, [])

  return (
    <>
      <SectionContainer className="slider-container">
        <Section className="fixing section home">
          <BreakBarriers />
        </Section>
        <Section className="fixing section double">
          <TechFin newSection={newSection} setNewSection={setNewSection} />
        </Section>
        <Section className="fixing section lastone">
          <About />
        </Section>
      </SectionContainer>
    </>
  )
}

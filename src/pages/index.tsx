import type { NextPage } from 'next'
import React from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'

import { Screens } from '../screens'
import { Seo } from 'src/components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Screens />
      </main>
      <footer className="relative z-2 h-full w-full bg-[#402414]">
        <Footer />
      </footer>
    </>
  )
}

export default Home

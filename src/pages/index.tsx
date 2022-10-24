import type { NextPage } from 'next'
import React from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'

import { Slides } from '../views/home'
import { Seo } from 'src/components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Slides />
      </main>
      <Footer />
    </>
  )
}

export default Home

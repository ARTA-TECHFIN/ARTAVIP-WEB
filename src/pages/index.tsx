import type { NextPage } from 'next'
import React from 'react'
import Header from 'src/components/Header/Header'
import Head from 'next/head'
import Footer from 'src/components/Footer'

// import Image from 'next/image'

//new code

import { Screens } from '../screens'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ARTA WEB</title>
        <meta name="description" content="Arta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Screens />
      </main>
      <footer className="h-full w-full bg-[#402414]">
        <Footer />
      </footer>
    </>
  )
}

export default Home

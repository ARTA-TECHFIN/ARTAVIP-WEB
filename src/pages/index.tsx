import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState, useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { Seo } from 'src/components/Seo'
import { FC } from 'react'
import Footer from 'src/components/Footer'
import { Slides } from 'src/components/PageHome/PageHomeSlide'
import { useRouter } from 'next/router'

// 获取首页基本数据
const fetchHomeData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AM_HOSTING_PATH}/api/cms/home?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    title: {
      header: g('title') !== null ? g('title') : '',
      sub_title_1: g('sub_title_1'),
    },
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const homeDate = await fetchHomeData()
  return {
    props: {
      s: massageData(homeDate, locale),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Home = (props: { s: any }) => {
  const { locale } = useRouter()

  // return (
  //   <HomeLayout
  //     tabType={TABS.person}
  //     gaLog={true}
  //   >
  //   <IndividualFile
  //     data={props.s} />
  //   </HomeLayout>
  // )
  return (
    <>
      <Seo
        title={`Home | Arta AM`}
        description=''
        keywords=''
        ga="Homepage"
      />
      <Header textColor="brown" />
      <main>
        <section
          id="break-barriers"
          className="tigger-01 relative relative z-3 flex h-app-height w-screen flex-col overflow-hidden bg-[#351e0e] will-change-transform lg:h-screen"
        >
          <div className="absolute w-full h-full object-cover">
            <img className="w-full h-full object-cover" src="/images/K11_ARTUS_exterior_facade.jpg" />
          </div>
          <div className=" movable-elements-wrapper z-1 flex max-w-main-contain items-start justify-center px-6 xl:mx-auto">
            <div className="absolute bottom-[10em] left-[0em] md:left-[5em]">
              <h1
                id="animation"
                className="movable z-[200] text-left font-Verah text-[10em] leading-[1.02em] text-arta-sunray-100 will-change-transform sm:text-[7em] md:text-[3em]"
              >
                {props.s.title.header}
                <br />
                <span className="flex space-x-2">
                  <span className="pr-3 text-[30px] sm:text-[0.6em]">{props.s.title.sub_title_1}</span>
                </span>
              </h1>
            </div>
          </div>
        </section>
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default Home

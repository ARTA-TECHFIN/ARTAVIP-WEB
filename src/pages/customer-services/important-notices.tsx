import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { CalendarAccordion } from 'src/components/PageCustomerServices/CalendarAccordion'
import { HeroBanner } from 'src/components/HeroBanner'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/media-centre-press-releases?populate=*`)
  const data = await res.json()
  return data
}

const massageData = (pageData: any, locale: string | undefined = 'en') => {
  return {
    k: {
      data: pageData.data,
    },
    heroBanner: {
      description: '',
      image: '/images/customers-services/important_notices.jpg',
      mobileImage: '/images/customers-services/important_notices.jpg',
    },
  }
}
interface responseT {
  year: number
  results: any
  lang: any
}
// Add get report here if seo is needed
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = await fetchCmsData()

  return {
    props: {
      k: pageData.data,
      heroBanner: {
        description: '',
        image: '/images/customers-services/important_notices.jpg',
        mobileImage: '/images/customers-services/important_notices.jpg',
      },
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
const useGetData = (locale: string) => {
  const lang = locale === 'en' ? 'en' : locale === 'tc' ? 'tc' : 'sc'
  const year = new Date().getFullYear()
  const yearList = [year, year - 1, year - 2]

  return useQuery([], async () => {
    const result = await fetchCmsData();

    let yearList: string[] = []
    let response: responseT[] = []
    if (result) {
      result.data.map((item: any) => {
        if (yearList.indexOf(item.attributes.year) == -1 && parseInt(item.attributes.year) >= 2018)
          yearList.push(item.attributes.year);
      })

      yearList.map((year) => {
        response.push({
          year: parseInt(year),
          results: result.data.filter((item: any) => item.attributes.year == year),
          lang: locale
        })
      })
      return response
    }
  })
}
const NoticePage = (props: { k: any,heroBanner:any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const { status, data, error } = useGetData(locale || "en")
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  const u = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`
  const [openYear, setOpenYear] = useState(data && data[0].year || 2024)

  const setOpenYearFunc = (year: number) => {
    if (year == openYear) {
      setOpenYear(0)
    } else {
      setOpenYear(year)
    }
  }
  return (
    <>
      <Seo
        title={`${t('customer_service.important_notice')} | Arta TechFin`}
        description={t('customer_service.important_notice')}
        keywords={t('customer_service.important_notice')}
        ga="Service Charges"
      />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('customer_service.important_notice')}
          description={props.heroBanner.description}
          image={props.heroBanner.image}
          mobileImage={props.heroBanner.mobileImage}
        />
        <div id="notice-bd">
          {data?.map((yearly, index) => (
            <CalendarAccordion
              index={index}
              key={yearly.year}
              year={yearly.year}
              events={yearly.results.map((r: any) => ({
                date: new Date(r.attributes.date),
                title: locale === 'en' ? r.attributes.content_en : locale === 'tc' ? r.attributes.content_tc : r.attributes.content_sc,
                url: locale === 'en' ? r.attributes.pdf_en.data.attributes.url : locale === 'tc' ? r.attributes.pdf_tc.data.attributes.url : r.attributes.pdf_sc.data.attributes.url,
              }))}
              openYear={openYear}
              setOpenYear={setOpenYearFunc}
            />
          ))}
        </div>
        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[100px]" />
      </main>
      <Footer textColor="white" />
    </>
  )
}


export default NoticePage
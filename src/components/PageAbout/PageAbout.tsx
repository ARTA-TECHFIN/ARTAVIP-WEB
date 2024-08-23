import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'

import { PageAboutCmsT } from 'src/pages/about-us-profile'
import { useTranslation } from 'next-i18next'
import { HeroBanner } from '../HeroBanner'
import { textClass } from '../Text'

const PageAbout: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <Seo
        title={`${t('page_title.about_us')} | Arta TechFin`}
        description={t('page_description.about_us')}
        keywords={t('page_keywords.about_us')}
        ga="About Us"
      />
      <Header textColor="brown" />
      <main className="flex flex-col">
        <HeroBanner
          title={t('page_title.about_us')}
          description=''
          image='/images/about/211025_image_aboutus_contactus_banner.png'
          mobileImage='/images/about/211025_image_aboutus_contactus_banner.png'
        />

        {/* 加入我们*/}
        <div className='join_us_backgroud w-full '>
          <div className="flex flex-col w-full h-fit">
            <div className="flex-1 company-des">
              <p className='arta-about-box1-font'>{k.profile.description}</p>
            </div>
            
            {/* 事件*/}
            <div className="mt-[25px] mb-4 flex-1 lg:mt-0 grow" style={{ backgroundColor: 'rgb(20, 41, 77)', padding: '20px 5% 5%', color: 'white' }}>
              {k.joinUs.timeLine.map((p: any, index: any) => (

                // eslint-disable-next-line react/jsx-key
                <div key={index} style={{ paddingTop: '20px' }}>
                  <h3 className={`h6-text`}>{p.title}</h3>
                  <p className={`small-text`}>{p.des}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='join_us_backgroud-1'>
            {/* <p>{t('page_title.join_us')}</p> */}
            <h1 className='join_us_backgroud-1-h1'>{t('page_title.join_us')}</h1>
            <p className='arta-about-box1-font'>{k.joinUs.description}</p>
            <div className='join_us_sub_box'>
              <h1 className='join_us_sub_title-1'>{parse(k.joinUs.advTitle)}</h1>
            </div>
            <p className='join_us_sub_des-1'>{parse(k.joinUs.advDes)}</p>
            <div className='join_us_sub_box'>
              <h1 className='join_us_sub_title-1'>{parse(k.joinUs.dutyTitle)}</h1>
            </div>
            <p className='join_us_sub_des-1 '>{parse(k.joinUs.dutyDes)}</p>
            {/* <h4 className='join_us_backgroud-1-h1'>{k.joinUs.advTitle}</h4> */}
            <p className={`small-text`}>{parse(k.joinUs.workWithArtaDescription)}</p>

          </div>
        </div>

        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[50px]" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageAbout

import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'

import { PageAboutCmsT } from 'src/pages/about-us-profile'
import { useTranslation } from 'next-i18next'

const PageAbout: FC<{ k: PageAboutCmsT }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const a = k.joinUs.timeLineLength
  return (
    <>
      <Seo
        title={`${t('page_title.about_us')} | Arta TechFin`}
        description={t('page_description.about_us')}
        keywords={t('page_keywords.about_us')}
        ga="About Us"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="container">
        <p>{t('page_title.about_us')}</p>
      </div>
      <table id="contact-us-table" style={{ width: '100%',display:'block'}}>
        <td style={{ width: '50%', backgroundColor: 'white', padding: '20px 5% 5%' }}><p className='arta-about-box1-font'>{k.profile.description}</p></td>
        <td style={{ width: '50%', backgroundColor: 'rgb(20, 41, 77)', padding: '20px 5% 5%', color: 'white' }}>
          {k.joinUs.timeLine.map((p: any, index: any) => (

            // eslint-disable-next-line react/jsx-key
            <div key={index} style={{ paddingTop: '20px' }}>
              <h3 style={{ fontSize: '30px' }}>{p.title}</h3>
              <p style={{ fontSize: '15px' }}>{p.des}</p>
            </div>
          ))}
        </td>
      </table>
      {/* 加入我们*/}
      <div className='join_us_backgroud w-full '>
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
          <p className='join_us_sub_des-1'>{parse(k.joinUs.dutyDes)}</p>
          {/* <h4 className='join_us_backgroud-1-h1'>{k.joinUs.advTitle}</h4> */}
          <p className='arta-about-box1-font'>{parse(k.joinUs.workWithArtaDescription)}</p>

        </div>
      </div>

      {/* <div className="about-us-profile-backgroumd">
           <p className="position: absolute; top: 10px; left: 10px; color: red;">{t('page_title.about_us')}</p>
      </div> */}
      {/* <main className="flex flex-col bg-arta-page-background text-arta-sand-100"> */}
      {/* <SectionFullMission
          label={t('page_title.about_us')}
          title='{k.mission.subtitle1}'
          title2='{k.mission.subtitle2}'
          image='{k.heroBanner.image}'
          mobileImage='{k.heroBanner.mobileImage}'
          description="null"
          fullWidth={true}
          k={k}
        /> */}

      {/* <SectionBanner k={k} /> */}
      {/* <SectionLeadership k={k} /> */}
      {/* <SectionTechFin k={k} /> */}
      {/* </main> */}
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[50px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageAbout

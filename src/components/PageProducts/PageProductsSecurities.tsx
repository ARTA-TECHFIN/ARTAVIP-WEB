import { FC } from 'react'
import { textClass } from '../Text'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import { PageAboutCmsT } from 'src/pages/products/products-securities'
import { useTranslation } from 'next-i18next'
import { HeroBanner } from 'src/components/HeroBanner'

const PageProductsSecurities: FC<{ k: PageAboutCmsT; locale: string; u: any }> = ({ k, u }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('page_title.securities')} | Arta TechFin`}
        description={t('page_title.securities')}
        keywords={t('page_title.securities')}
        ga="Securities"
      />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('page_title.securities')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
        <div id="securities-bd-text">
          <div className="arta-container relative z-1 mx-auto py-8 md:py-[150px] md:text-center">
            <h1 className={`${textClass.h6} py-3`}>{k.description}</h1>
            <hr className='securities-hr'></hr>
            <h1 style={{ fontWeight: 'bold', color: 'black' }} className={`${textClass.h6} py-3`}>{k.priority}</h1>
            <div className="mt-8 grid grid-cols-3 gap-x-12 md:grid-cols-4 lg:grid-cols-3  place-items-center">
              {
                k.avg.map((j: any, index: number) => {
                  return (
                    <div key={index} className='col-span-2 md:col-span-1 flex items-center text-center flex-col p-4 w-max'>
                      <h1 className={`mt-4 ${textClass.h6}`} style={{ color: '#20365B' }}>{g(j, 'title')}</h1>
                      <p className={`mt-4 text-xs`}>{g(j, 'description')}</p>
                      <img src={j.adv_icon_url} />
                    </div>
                  )
                })
              }
            </div>
            <div className={`${textClass.h6} pt-3`} dangerouslySetInnerHTML={{ __html: k.link }}></div>
          </div>

        </div>

        <div id='securities-tm'>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }} className={`${textClass.h6} py-5`}>{g(k.hk, 'hk_trade')}</h1>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className={`${textClass.title}`}>{g(k.hk, 'hk_trade_sub_title')}</p>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`${textClass.title} h-10`}>{g(k.hk, 'hk_price')}</h1>
          <div id="securities-trade-box">
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.hk, 'hk_pre_market')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.hk, 'hk_pre_market_tm')}</div>
            </div>
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.hk, 'hk_closing')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.hk, 'hk_closing_tm')}</div>
            </div>
          </div>
          <div style={{ paddingTop: '10px' }}></div>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`${textClass.title} h-10`}>{g(k.hk, 'hk_continuous')}</h1>
          <div id="securities-trade-box">
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.hk, 'hk_morning_mk')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.hk, 'hk_morning_mk_tm')}</div>
            </div>
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.hk, 'hk_continuous_mk')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.hk, 'hk_continuous_mk_tm')}</div>
            </div>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.hk, 'hk_lunch_mk')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.hk, 'hk_lunch_mk_tm')}</div>
            </div>
          </div>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'white', width: '80%', position: "relative", left: '10%' }} className={`${textClass.small_text} h-10`}>{g(k.hk, 'hk_mk_remark')}</h1>
          <hr className='securities-gap-hr'></hr>

          {/* US Stock */}
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }} className={`${textClass.h6} py-5`}>{g(k.us, 'us_trade')}</h1>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`${textClass.title} h-10`}>{g(k.us, 'us_eastern_trade')}</h1>
          <div id="securities-trade-box">
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.us, 'us_eastern_trade')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.us, 'us_eastern_trade_tm')}</div>
            </div>
          </div>
          <div style={{ paddingTop: '10px' }}></div>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`${textClass.title} h-10`}>{g(k.us, 'us_trade_hk')}</h1>
          <div id="securities-trade-box">
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.us, 'us_trade_summer')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.us, 'us_trade_summer_tm')}</div>
            </div>
            <hr className='securities-hr'></hr>
            <div className='wrap'>
              <div className={`left ${textClass.small_text}`}>{g(k.us, 'us_trade_winter')}</div>
              <div className={`right ${textClass.small_text}`}>{g(k.us, 'us_trade_winter_tm')}</div>
            </div>
          </div>
          <div style={{ paddingTop: '30px' }}></div>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'white', width: '80%', position: "relative", left: '10%' }} className={`${textClass.small_text} h-10`} dangerouslySetInnerHTML={{ __html: g(k.us, 'us_trade_remark') }}></h1>

        </div>
        <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      </main>
      <Footer textColor="white" />
    </>
  )
}

export default PageProductsSecurities

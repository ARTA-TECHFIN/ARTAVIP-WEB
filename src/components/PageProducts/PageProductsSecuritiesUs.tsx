import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'

const PageProductsSecuritiesUs: FC<{ k: any, tip: any }> = ({ k, tip }) => {
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm' className='text-arta-sand-100'>
      {/* US Stock */}
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }} className={`h6-text py-5`}>{g(k.us, 'us_trade')}</h1>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', position: "relative" }} className={`h6-text h-10 securities-trade-top-box`}>{g(k.us, 'us_eastern_trade')}</h1>
      <div id="securities-trade-box">
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.us, 'us_eastern_trade')}</div>
          <div className={`right small-text`}>{g(k.us, 'us_eastern_trade_tm')}</div>
        </div>
      </div>
      <div style={{ paddingTop: '10px', backgroundColor: 'white' }}></div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', position: "relative" }} className={`h6-text h-10 securities-trade-top-box`}>{g(k.us, 'us_trade_hk')}</h1>
      <div id="securities-trade-box">
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.us, 'us_trade_summer')}</div>
          <div className={`right small-text`}>{g(k.us, 'us_trade_summer_tm')}</div>
        </div>
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.us, 'us_trade_winter')}</div>
          <div className={`right small-text`}>{g(k.us, 'us_trade_winter_tm')}</div>
        </div>
      </div>
      <div style={{ paddingTop: '30px', backgroundColor: 'white' }}>
        <h1 style={{ position: "relative", paddingBottom: '50px' }} className={`small-text h-10 securities-trade-top-box`} dangerouslySetInnerHTML={{ __html: g(k.us, 'us_trade_remark') }}></h1>
      </div>
      <div style={{ paddingTop: '30px', backgroundColor: 'white' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }} className={`h6-text py-8`}>{tip}</h1>
      </div>
      <div className={`small-text trade-tips-form`} style={{ alignItems: 'center', justifyContent: 'left', paddingTop: '30px', backgroundColor: 'white' }}
        dangerouslySetInnerHTML={{ __html: g(k.tip, 'tips') }}></div>
      <hr className='securities-gap-hr'></hr>
    </div>
  )
}

export default PageProductsSecuritiesUs

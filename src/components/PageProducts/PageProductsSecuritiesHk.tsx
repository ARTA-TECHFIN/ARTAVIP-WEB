import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const PageProductsSecuritiesHk: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm' className='text-arta-sand-100'>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }} className="h6-text py-8">{g(k.hk, 'hk_trade')}</h1>
      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , paddingBottom: '50px'}} className="body-regular-text">{g(k.hk, 'hk_trade_sub_title')}</p>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' , paddingTop: '50px'}} className={`h6-text h-10`}>{g(k.hk, 'hk_price')}</h1>
      <div id="securities-trade-box">
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.hk, 'hk_pre_market')}</div>
          <div className={`right small-text`}>{g(k.hk, 'hk_pre_market_tm')}</div>
        </div>
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.hk, 'hk_closing')}</div>
          <div className={`right small-text`}>{g(k.hk, 'hk_closing_tm')}</div>
        </div>
      </div>
      <div style={{ paddingTop: '10px' }}></div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`h6-text h-10`}>{g(k.hk, 'hk_continuous')}</h1>
      <div id="securities-trade-box">
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.hk, 'hk_morning_mk')}</div>
          <div className={`right small-text`}>{g(k.hk, 'hk_morning_mk_tm')}</div>
        </div>
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.hk, 'hk_continuous_mk')}</div>
          <div className={`right small-text`}>{g(k.hk, 'hk_continuous_mk_tm')}</div>
        </div>
        <div className='wrap'>
          <div className={`left small-text`}>{g(k.hk, 'hk_lunch_mk')}</div>
          <div className={`right small-text`}>{g(k.hk, 'hk_lunch_mk_tm')}</div>
        </div>
      </div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'white', width: '80%', position: "relative", left: '10%' , paddingTop: '50px'}} className={`small-text h-10`}>{g(k.hk, 'hk_mk_remark')}</h1>

      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' , paddingTop: '50px'}} className={`h6-text`}>{t('products_info.hk_trade_tips')}</h1>
      <div className={`small-text trade-tips-form`} style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '50px', backgroundColor: 'white' }}
        dangerouslySetInnerHTML={{ __html: g(k.tip, 'tips') }}></div>
      <hr className='securities-gap-hr'></hr>
    </div>
  )
}

export default PageProductsSecuritiesHk

import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const PageProductsSecuritiesSs: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm'>
      {/* SS Stock */}
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' , paddingTop: '30px'}} className={`${textClass.h6} py-8`}>{t('products_info.ss_trade_tips')}</h1>
      <div className={`${textClass.small_text}`} style={{ paddingLeft: '20%', alignItems: 'center', justifyContent: 'center', paddingTop: '30px', backgroundColor: 'white' ,paddingRight: '20%',}}
        dangerouslySetInnerHTML={{ __html: g(k.tip, 'tips') }}></div>
      <hr className='securities-gap-hr'></hr>
    </div>
  )
}

export default PageProductsSecuritiesSs

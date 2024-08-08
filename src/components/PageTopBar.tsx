import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import contactJson from 'apidata/contact.json'
import Image from 'next/image'

// 拉取页面头部的配置
const fetchTopData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/home-page-top`)
  const data = await res.json()
  return data
}

const PageTopBar: FC<{
  textColor?: 'white' | 'brown' | 'black'
}> = (props) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router

  const [topBarData, setTopBarData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      const useLocalCms = process.env.NEXT_PUBLIC_USE_LOCAL_CMS_DATA === 'true'
      const result = useLocalCms ? contactJson : await fetchTopData()
      
      setTopBarData(result.data.attributes)
    }

    fetchData()
  }, [])
 
  const g = (keyWithoutLang: string) => `${topBarData[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
        <div className="headerTop" style={{height:'30px'}} >
        <p style={{ fontSize: '15px' , color:'white',display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Image src='/images/phone_call.svg' alt="" width ='20' height='15' />{g('description_1')} | <Image src='/images/phone_call.svg' alt="" width ='20' height='15' />{g('description_2')}</p>
        </div>
    </>
  )
}

export default PageTopBar

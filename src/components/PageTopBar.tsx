import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import contactJson from 'apidata/contact.json'
import { Users} from "lucide";
import { createIcons, icons } from 'lucide';
import Image from 'next/image'
import { PhoneForwarded } from 'lucide-react';
import { text } from 'stream/consumers';

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
        <div className="headerTop text-sm pl-4">
          <PhoneForwarded/>{g('description_1')} |  <PhoneForwarded />{g('description_2')}
        </div>
    </>
  )
}

export default PageTopBar

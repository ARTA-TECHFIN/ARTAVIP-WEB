import { FC } from 'react'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import Link from 'next/link'
import { ReportCard } from 'src/components/PageHome/Fund/ReportCard'


export function  FundDetail(data: any){
  const router = useRouter()
  const { locale } = router
  const g = (data:any,keyWithoutLang: string) => `${data[`${keyWithoutLang}_${locale}`]}`

  return (
    <div className="pt-4 md:pt-16">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <ul className="col-span-full col-span-full grid grid-cols-12 sm:mt-0 mt-4">
          1111
        </ul>
      </div>
    </div>
  )
}

export default FundDetail

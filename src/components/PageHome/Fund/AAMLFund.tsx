import { FC } from 'react'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import Link from 'next/link'
import { ReportCard } from 'src/components/PageHome/Fund/ReportCard'
import FundDetail from './FundDetail'


type propsT = {
  data: any,
  label: any
}

// eslint-disable-next-line react/display-name
const showFund = (index: any) => () => {
  var input= document.getElementsByClassName("fund_box")
  Array.from(input).forEach((res:any)=>{
    res.style.display = "block";

    if(res.id == index){
      res.style.display = "block";
    }else{
      res.style.display = "none";
    }
  })
}

const AAMLFund: FC<propsT> = ({
  data,
  label,
}) => {
  const router = useRouter()
  const { locale } = router
  const g = (data:any,keyWithoutLang: string) => `${data[`${keyWithoutLang}_${locale}`]}`
  const d= data.data.attributes.fund_aaml
  const l= label.data.attributes

  return (
    <div className="pt-4 md:pt-16">
      <div className="mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8">
        <ul className="col-span-full col-span-full grid grid-cols-12 sm:mt-0 mt-4">
        {d.map((tab:any, index:any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <li className="md:col-span-6 col-span-12 m-2 sm:m-4">
          <Link href='' onClick={showFund(tab.detail_slug)}>
            <ReportCard title={g(tab,'name')} Icon={''} />
          </Link>
        </li>
          )
        })}
        </ul>
      </div>
      {d.map((tab:any, index:any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="fund_box mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8" style={{display:'none'}} id={tab.detail_slug}>
          <div className="col-span-full lg:col-span-8 lg:col-start-3">
            <h4 className={`mt-8 text-arta-sand-100 h6-text`}>{g(l,'title')}</h4>
            <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'name')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'name')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'highlight')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'product_highlight')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'launch_date')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'launch_date')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'valuation')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'valuation')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'lock_up')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'lock_up')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'target_yield')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'target_yield')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'minimum_subscription')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'minimum_subscription')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'subscription_fee')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'subscription_fee')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'management_fee')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'management_fee')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'performance_fee')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'performance_fee')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'leveraged')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'leveraged')}</div>
            </div>
            </div>
            </div>
            </div>
         </div>
          )
        })}
    </div>
  )
}

export default AAMLFund

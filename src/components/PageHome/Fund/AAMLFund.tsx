import { FC } from 'react'
import { useRouter } from 'next/router'
import { links } from 'src/domains/links'
import Link from 'next/link'
import { ReportCard } from 'src/components/PageHome/Fund/ReportCard'
import { IconArrowLeft } from 'src/components/Svg/Icon'
import { textClass } from 'src/components/Text'
import headerJson from 'apidata/header.json'


type propsT = {
  data: any,
  label: any
}

// eslint-disable-next-line react/display-name
const showFund = (index: any) => () => {
  var funds= document.getElementsByClassName("fund_product")
  Array.from(funds).forEach((res:any)=>{
    if(res.id == index){
      res.style.backgroundColor = "white";
    }else{
      res.style.backgroundColor = "silver";
    }
  })

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

const refreshFunc = () => () => {
  var funds= document.getElementsByClassName("fund_product")
  Array.from(funds).forEach((res:any)=>{
    res.style.display = "block";
  })
  var input= document.getElementsByClassName("fund_box")
  Array.from(input).forEach((res:any)=>{
    res.style.display = "none";
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
          <li className={`md:col-span-4 col-span-12 m-2 sm:m-4 fund_product`} style={index <1 ? {backgroundColor:'white'}:{backgroundColor:'silver'}} id={tab.detail_slug}>
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
          <div className="fund_box mb-12 grid sm:grid-cols-12 col-span-full  gap-x-8" style={index <1 ? {display:'block'}:{display:'none'}} id={tab.detail_slug}>
          <div className="col-span-full lg:col-span-8 lg:col-start-3">
            {/* <Link
              className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
              onClick= {refreshFunc()}
              href=''
            >
              <IconArrowLeft fill="#593725" className="mr-2 h-4" />
              {g(headerJson,'return')}
            </Link> */}
            <h4 className={`mt-8 text-arta-sand-100 h4-text`}>{g(l,'title')}</h4>
            <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 border-b border-black pb-10 sm:gap-y-8">
            <div className="col-span-full sm:col-span-3" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'name')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'type')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'name')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'highlight')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'product_highlight')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-3" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'launch_date')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'launch_date')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-3" >
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
            <div className="col-span-full sm:col-span-3" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'target_yield')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'target_yield')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-3" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'minimum_subscription')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'minimum_subscription')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-6" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'subscription_fee')}</div>
             <div className="whitespace-breakspace font-Neue"dangerouslySetInnerHTML={{__html: g(tab,'subscription_fee')}}></div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-3" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'management_fee')}</div>
             <div className="whitespace-breakspace font-Neue">{g(tab,'management_fee')}</div>
            </div>
            </div>
            <div className="col-span-full sm:col-span-3" >
            <div className="text-base text-arta-sand-100">
             <div className={`font-bold font-Neue`}>{g(l,'performance_fee')}</div>
             <div className="whitespace-breakspace font-Neue" dangerouslySetInnerHTML={{__html: g(tab,'performance_fee')}}></div>
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

import { FC } from 'react'
import { useRouter } from 'next/router'

type propsT = {
  data: any
}
const AspiringFund: FC<propsT> = ({
  data,
}) => {
  const router = useRouter()
  const { locale } = router
  const g = (data:any,keyWithoutLang: string) => `${data[`${keyWithoutLang}_${locale}`]}`


  return (
    
    <div id='securities-tm' className='text-arta-sand-100 person_lf'>

      <div className='h4-light-text pt-8'>
         {g('name')}
        <div className='small-text p-2'>
        {g('name')}
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        456
        <div className='small-text p-2'>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        789
        <div className='small-text p-2'>

        </div>
        <hr className='securities-hr'></hr>

      </div>
    </div>
  )
}

export default AspiringFund

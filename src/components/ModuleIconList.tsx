import Image from 'next/image'
import { textClass } from 'src/components/Text'

type iconT = {
  icon: string
  title: string
  body: string
}

type propsT = {
  iconList: iconT[]
}

const ModuleIconList = (props: propsT) => {
  return (
    <div className='md:py-[150px] py-12 bg-arta-eggshell-100 border-t-[15px] border-[#EFE8CE]'>
      <div className="arta-container mx-auto grid grid-cols-12 gap-x-8 gap-y-12">
        {props.iconList.map((item, index) => (
          <div key={index} className="md:col-span-6 col-span-12 flex">
            <div className='xl:w-[157px] xl:h-[157px] lg:w-[100px] lg:h-[100px] w-[64px] 
              h-[64px] xl:flex-[0_0_157px] lg:flex-[0_0_100px] flex-[0_0_64px] relative
              md:mt-0 -mt-[15px]'
            >
              <Image src={item.icon} alt="" fill className='' />
            </div>
            <div className='xl:ml-[56px] md:ml-6 ml-4'>
              <h4 className={textClass.h6}>{item.title}</h4>
              <p className={`md:mt-4 mt-8 md:ml-0 -ml-[75px] ${textClass.body_regular_verah}`}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ModuleIconList }

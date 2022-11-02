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
    <div className='py-[150px] bg-arta-eggshell-100 border-t-[15px] border-[#EFE8CE]'>
      <div className="arta-container mx-auto grid grid-cols-12 gap-x-8 gap-12">
        {props.iconList.map((item, index) => (
          <div key={index} className="col-span-6  flex">
            <div className='w-[157px] h-[157px] flex-[0_0_157px] relative'>
              <Image src={item.icon} alt="" fill className='' />
            </div>
            <div className='ml-[56px]'>
              <h4 className={textClass.h6}>{item.title}</h4>
              <p className={`mt-4 ${textClass.body_regular_verah}`}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ModuleIconList }

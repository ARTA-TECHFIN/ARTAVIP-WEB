import { textClass } from 'src/components/Text'
import cn from 'classnames'

type iconT = {
  icon: string
  title: string
  body: string
}

type propsT = {
  padding: 'Bottom' | 'Top'
  iconList: iconT[]
}

const ModuleIconList = (props: propsT) => {
  return (
    <div className={cn('bg-arta-eggshell-100', props.padding ==="Bottom" && "pb-14 md:pb-[140px]", props.padding === "Top" && "pt-14 md:pt-[140px]")}>
      <div className="arta-container mx-auto grid grid-cols-12 md:gap-x-12 md:gap-y-12">
        {props.iconList.map((item, index) => (
          <div key={index} className="md:col-span-6 col-span-12 flex my-6">
            <div className='xl:w-[157px] xl:h-[157px] lg:w-[100px] lg:h-[100px] w-[64px] 
              h-[64px] xl:flex-[0_0_157px] lg:flex-[0_0_100px] flex-[0_0_64px] relative
              md:mt-0 -mt-[15px]'
            >
              <img src={item.icon} alt="" className='mx-auto' />
            </div>
            <div className='xl:ml-[40px] ml-4'>
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

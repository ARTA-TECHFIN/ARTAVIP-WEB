import { Fragment, useRef, useEffect } from 'react'
import { Hr } from 'src/components/Hr'
import { textClass } from 'src/components/Text'
import {Circle} from './Svg/Icon'
import { gsap } from 'gsap'
import cn from 'classnames'
import parse from 'html-react-parser';


import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


type listT = {
  title: string
  body: string
}

type propsT = {
  header: string
  title: string | null
  list: listT[]
  headerPosition?: 'left' | 'right'
}

// TODO: list body support html
// TODO: animation
// TODO: responsive
// TODO: headerPosition
// TODO: Title can be null or empty string, see Web3Media page
const ModuleTextColList = ({ header, title, list, headerPosition }: propsT) => {
  const circle = useRef(null)

  useEffect(()=> {
    let x:number = 200

    if(headerPosition == 'left') {
      x = -200
    }

    gsap.set(circle.current, {
      x: x,
      autoAlpha: 0
    })

    const spinTl= gsap.timeline({
      repeat: -1,
    })

    spinTl.pause()

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: circle.current,
            start: 'top center+=200',
            end: 'top center+=200',
            toggleActions: "play play reverse  play",
            onEnter: () => spinTl.play()
        }
    })
    
    tl.to(circle.current, {
      x: 0,
      autoAlpha: 1
    })

    spinTl.to(circle.current, {
      duration: 3,
      rotation: 360
    })

  }, [])

  return (
    <div className="arta-container mx-auto relative grid grid-cols-12 md:py-[150px] py-16 lg:py-12">
      <div className={cn(`md:col-span-4 col-span-full flex items-center relative`,  headerPosition == 'left' ? 'order-0' : 'order-1 justify-end text-right') }>
        <h2 className={`relative z-10 ${textClass.h2_style2}`}>{header}</h2>
        <div className={cn('absolute text-col-circle will-change-transform z-0', headerPosition == 'left' ?  '-left-[250px]' : '-right-[250px]')} ref={circle}>
           <Circle className='xl:scale-100 lg:scale-75 md:scale-[0.70] md:block hidden'/>
        </div>
      </div>
      <div className="md:col-span-8 col-span-full md:mt-0 mt-6">
        <h3 className={`${textClass.h3_style2} mb-6`}>{title}</h3>
        <Hr />
        {list.map((item, index) => (
          <Fragment key={index}>
            <h4 className={`${textClass.h6} mt-8`}>{item.title}</h4>
            <div className={`${textClass.body_regular_verah} lg:max-w-[80%] mt-4 mb-8`}>{parse(item.body)}</div>
            <Hr />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export { ModuleTextColList }

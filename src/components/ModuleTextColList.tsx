import { Fragment, useRef, useEffect } from 'react'
import { Hr } from 'src/components/Hr'
import { textClass } from 'src/components/Text'
import {Circle} from './Svg/Icon'
import { gsap } from 'gsap'
import cn from 'classnames'

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
      rotate: 360
    })

  }, [])

  return (
    <div className="arta-container mx-auto relative grid grid-cols-12 py-36">
      <div className={cn(`col-span-4 flex items-center relative`,  headerPosition == 'left' ? 'order-0' : 'order-1 justify-end text-left') }>
        <h2 className={textClass.h2_style2}>{header}</h2>
        <div className={cn('absolute  will-change-transform', headerPosition == 'left' ?  '-left-[250px]' : '-right-[250px]')} ref={circle}>
           <Circle />
        </div>
      </div>
      <div className="col-span-8">
        <h3 className={`${textClass.h3_style2} mb-6`}>{title}</h3>
        <Hr />
        {list.map((item, index) => (
          <Fragment key={index}>
            <h4 className={`${textClass.h6} mt-8`}>{item.title}</h4>
            <p className={`${textClass.body_regular_verah} max-w-[80%] mt-4 mb-8`}>{item.body}</p>
            <Hr />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export { ModuleTextColList }

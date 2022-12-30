import { useRef, useEffect } from 'react'

import { textClass } from 'src/components/Text'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cn from 'classnames'

import { Circle } from './Svg/Icon'

type propsT = {
  header: string
  headerPosition?: 'left' | 'right'
}

const ModuleTextColListHeader = ({ header, headerPosition }: propsT) => {
  const circle = useRef(null)

  useEffect(() => {
    let x: number = 200

    if (headerPosition == 'left') {
      x = -200
    }

    gsap.set(circle.current, {
      x: x,
      autoAlpha: 0,
    })

    const spinTl = gsap.timeline({
      repeat: -1,
    })

    spinTl.pause()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circle.current,
        start: 'top center+=200',
        end: 'top center+=200',
        toggleActions: 'play play reverse  play',
        onEnter: () => spinTl.play(),
      },
    })

    tl.to(circle.current, {
      x: 0,
      autoAlpha: 1,
    })

    spinTl.to(circle.current, {
      duration: 5,
      rotation: 360,
    })
  }, [])
  return (
    <div
      className={cn(
        `relative flex items-center`,
        headerPosition == 'right' &&  ' justify-end text-right'
      )}
    >
      <h2 className={cn(`relative z-10 ${textClass.h2_style2} pb-4 lg:pb-0 transform`, headerPosition == 'right' ?  ' translate-x-[10px] lg:translate-x-[40px]' : ' translate-x-[-2px] lg:translate-x-[-40px]')}>{header}</h2>
      <div
        className={cn(
          'text-col-circle absolute z-0 will-change-transform',
          headerPosition == 'left' ? '-left-[240px]' : '-right-[240px]'
        )}
        ref={circle}
      >
        <Circle className="hidden md:block mx-auto w-full" />
      </div>
    </div>
  )
}

export default ModuleTextColListHeader

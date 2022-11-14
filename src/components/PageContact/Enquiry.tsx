import { useEffect,useRef } from 'react'
import { gsap } from 'gsap'
import parse from 'html-react-parser';
import { textClass } from 'src/components/Text'

import {Circle} from '../Svg/Icon'
import { Hr } from 'src/components/Hr'
import {IconFacebook, IconWeChat, IconTwitter, IconLinkedIn} from '../Svg/Icon'


const Enquiry = ()=> {

    const circle = useRef(null)

    useEffect(()=> {
        gsap.set(circle.current, {
            x: -200,
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
    return(
        <div className='bg-arta-eggshell-100'>
             <div className="arta-container mx-auto relative grid grid-cols-12 md:py-[150px] py-12">
                <div className={`md:col-span-4 col-span-full flex items-center relative` }>
                    <h2 className={`relative z-10 ${textClass.h2_style2} text-arta-sand-100`}>{`Enquiry`}</h2>
                    <div className="absolute text-col-circle will-change-transform z-0 -left-[250px]" ref={circle}>
                        <Circle className='xl:scale-100 lg:scale-75 md:scale-[0.70] md:block hidden'/>
                    </div>
                </div>
                <div className="md:col-span-8 col-span-full md:mt-0 mt-6">
                    <Hr />
                    <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{`Headquarters`}</h4>
                    <div className={`${textClass.body_regular_verah} lg:max-w-[80%] mt-4 mb-8 text-arta-sand-100`}>{parse(`Units 1-2, Level 9, <br>
                    K11 ATELIER King’s Road,<br>
                    728 King’s Road, Quarry Bay, Hong Kong`)}</div>
                    <Hr />

                    <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{`Enquiry`}</h4>
                    <div className='grid grid-cols-12 sm:gap-y-8 gap-y-5 mt-4 mb-8'>
                        <div className='sm:col-span-6 col-span-full'>
                            <div className='text-base text-black'>
                                <div className="font-bold">Media</div>
                                <a href="mailto:marketing@artatechfin.com" className='underline'>marketing@artatechfin.com</a>
                            </div>
                        </div>
                        <div className='sm:col-span-6 col-span-full'>
                            <div className='text-base text-black'>
                                <div className="font-bold">Investor</div>
                                <a href="mailto:ir@artatechfin.com" className='underline'>ir@artatechfin.com</a>
                            </div>
                        </div>
                        <div className='sm:col-span-6 col-span-full'>
                            <div className='text-base text-black'>
                                <div className="font-bold">Recruitment</div>
                                <a href="mailto:recruit@artatechfin.com" className='underline'>recruit@artatechfin.com</a>
                            </div>
                        </div>
                    </div>
                    <Hr />
                    <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{`Follow Us`}</h4>
                    <div className="flex mt-4">
                        <a href="#" target='_blank' className="mr-6"><IconFacebook className='w-8 h-8' fill='#593725'/></a>
                        <a href="#" target='_blank' className="mr-6"><IconTwitter className='w-8 h-8' fill='#593725'/></a>
                        <a href="#" target='_blank' className="mr-6"><IconLinkedIn className='w-8 h-8' fill='#593725'/></a>
                        <a href="#" target='_blank' className="mr-6"><IconWeChat className='w-8 h-8' fill='#593725'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enquiry
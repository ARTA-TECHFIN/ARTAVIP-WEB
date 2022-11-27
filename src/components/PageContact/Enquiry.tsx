import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import parse from 'html-react-parser'
import { textClass } from 'src/components/Text'

import { Circle } from '../Svg/Icon'
import { Hr } from 'src/components/Hr'
import { IconFacebook, IconWeChat, IconTwitter, IconLinkedIn } from '../Svg/Icon'
import { FadeUp } from 'src/components/FadeUp';

const Enquiry = ({t}: any) => {
  const circle = useRef(null)

  useEffect(() => {
    gsap.set(circle.current, {
      x: -200,
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
      duration: 3,
      rotation: 360,
    })
  }, [])
  return (
    <div className="bg-arta-eggshell-100">
      <div className="arta-container relative mx-auto grid grid-cols-12 py-12 md:py-[150px]">
        <div className={`relative col-span-full flex items-center md:col-span-4`}>
          <FadeUp>
            <h2 className={`relative z-10 ${textClass.h2_style2} text-arta-sand-100`}>{`Enquiry`}</h2>
          </FadeUp>
          <div
            className="text-col-circle absolute -left-[250px] z-0 will-change-transform"
            ref={circle}
          >
            <Circle className="hidden md:block md:scale-[0.70] lg:scale-75 xl:scale-100" />
          </div>
        </div>
        <div className="col-span-full mt-6 md:col-span-8 md:mt-0">
          <Hr />
          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{`Headquarters`}</h4>
          <div
            className={`${textClass.body_regular_verah} mt-4 mb-8 text-arta-sand-100 whitespace-pre lg:max-w-[80%]`}
          >
            {parse(t.address)}
          </div>
          <Hr />

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{`Enquiry`}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 sm:gap-y-8">
            <div className="col-span-full sm:col-span-6">
              <div className="text-base text-black">
                <div className="font-bold">Media</div>
                <a href={`mailto:${t.media_email}`} className="underline">
                  {t.media_email}
                </a>
              </div>
            </div>
            <div className="col-span-full sm:col-span-6">
              <div className="text-base text-black">
                <div className="font-bold">Investor</div>
                <a href={`mailto:${t.investor_email}`} className="underline">
                  {t.investor_email}
                </a>
              </div>
            </div>
            <div className="col-span-full sm:col-span-6">
              <div className="text-base text-black">
                <div className="font-bold">Recruitment</div>
                <a href={`mailto:${t.recruitment_email}`} className="underline">
                  {t.recruitment_email}
                </a>
              </div>
            </div>
          </div>
          <Hr />
          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{`Follow Us`}</h4>
          <div className="mt-4 flex">
            <a href={t.social_media_link_facebook} target="_blank" rel="noreferrer" className="mr-6">
              <IconFacebook className="h-8 w-8" fill="#593725" />
            </a>
            <a href={t.social_media_link_twitter} target="_blank" rel="noreferrer" className="mr-6">
              <IconTwitter className="h-8 w-8" fill="#593725" />
            </a>
            <a href={t.social_media_link_linkedin} target="_blank" rel="noreferrer" className="mr-6">
              <IconLinkedIn className="h-8 w-8" fill="#593725" />
            </a>
            <a href="#" target="_blank" className="mr-6">
              <IconWeChat className="h-8 w-8" fill="#593725" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enquiry

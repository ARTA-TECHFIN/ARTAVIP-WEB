import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import parse from 'html-react-parser'
import { textClass } from 'src/components/Text'

import { Circle } from '../Svg/Icon'
import { Hr } from 'src/components/Hr'
import { IconFacebook, IconWeChat, IconTwitter, IconLinkedIn } from '../Svg/Icon'
import { FadeUp } from 'src/components/FadeUp'
import { useTranslation } from 'next-i18next'
import { WechatPopup } from 'src/components/WechatPopup'

const Enquiry = ({ k }: any) => {
  const { t } = useTranslation('common')
  const circle = useRef(null)
  const [openWeChatPopup, setOpenWeChatPopup] = useState(false)

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
            <h2 className={`relative z-10 ${textClass.h2_style2} text-arta-sand-100`}>
              {t('contact_us.enquiry')}
            </h2>
          </FadeUp>
          <div
            className="text-col-circle absolute -left-[250px] z-0 will-change-transform"
            ref={circle}
          >
            <Circle className="hidden md:block mx-auto w-full" />
          </div>
        </div>
        <div className="col-span-full mt-6 md:col-span-8 md:mt-0">
          <Hr />
          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>
            {t('contact_us.headquarter')}
          </h4>
          <div
            className={`${textClass.body_regular_verah} mt-4 mb-8 whitespace-pre text-arta-sand-100 lg:max-w-[80%]`}
          >
            {parse(k.address)}
          </div>
          <Hr />

          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t('contact_us.enquiry')}</h4>
          <div className="mt-4 mb-8 grid grid-cols-12 gap-y-5 sm:gap-y-8">
            <div className="col-span-full sm:col-span-6">
              <div className="text-base text-black">
                <div className="font-bold">{t('contact_us.media')}</div>
                <a title="Email us" href={`mailto:${k.media_email}`} className="underline">
                  {k.media_email}
                </a>
              </div>
            </div>
            <div className="col-span-full sm:col-span-6">
              <div className="text-base text-black">
                <div className="font-bold">{t('contact_us.investor_relations')}</div>
                <a title="Email us" href={`mailto:${k.investor_email}`} className="underline">
                  {k.investor_email}
                </a>
              </div>
            </div>
            <div className="col-span-full sm:col-span-6">
              <div className="text-base text-black">
                <div className="font-bold">{t('contact_us.recruitment')}</div>
                <a title="Email us" href={`mailto:${k.recruitment_email}`} className="underline">
                  {k.recruitment_email}
                </a>
              </div>
            </div>
          </div>
          <Hr />
          <h4 className={`${textClass.h6} mt-8 text-arta-sand-100`}>{t('contact_us.follow_us')}</h4>
          <div className="mt-4 flex">
            <a
              title="Arta Facebook"
              href={k.social_media_link_facebook}
              target="_blank"
              rel="noreferrer"
              className="mr-6"
            >
              <IconFacebook className="h-8 w-8" fill="#593725" />
            </a>
            <a
              title="Arta Twitter"
              href={k.social_media_link_twitter}
              target="_blank"
              rel="noreferrer"
              className="mr-6"
            >
              <IconTwitter className="h-8 w-8" fill="#593725" />
            </a>
            <a
              title="Arta LinkedIn"
              href={k.social_media_link_linkedin}
              target="_blank"
              rel="noreferrer"
              className="mr-6"
            >
              <IconLinkedIn className="h-8 w-8" fill="#593725" />
            </a>
            <div
              title="Arta WeChat"
              className="mr-6 cursor-pointer"
              onClick={() => setOpenWeChatPopup(true)}
            >
              <IconWeChat className="h-8 w-8" fill="#593725" />
            </div>
          </div>
        </div>
      </div>
      {openWeChatPopup && <WechatPopup togglePopup={setOpenWeChatPopup} />}
    </div>
  )
}

export default Enquiry

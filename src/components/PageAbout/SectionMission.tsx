import React, { useRef, useState } from 'react'
import Image from 'next/image'
import mission_bg from './images/aboutus_vision_bg.jpg'
import { textClass } from 'src/components/Text'
import { PageAboutCmsT } from 'src/pages/about'
import { useTranslation } from 'next-i18next'

export const SectionMission = (props: { k: PageAboutCmsT }) => {
  const { k } = props

  const videoRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useTranslation('common')

  const toggleVideo = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="group/bg relative overflow-hidden" id="mission">
      <div className="easeInOutSine fixed top-0 left-0 h-full w-full overflow-hidden duration-300">
        <Image src={mission_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container relative mx-auto flex flex-col items-center justify-center py-16 md:py-36">
        <h2 className={`${textClass.title_style2} mb-4 text-center text-arta-eggshell-100`}>
          {t("about_us.vision_mission")}
        </h2>
        <span className={`${textClass.h2_style2} text-arta-snow-100 md:-translate-x-24`}>
          {k.mission.subtitle1}
        </span>
        <span className={`${textClass.h2_style2} mb-12 text-arta-snow-100 md:translate-x-24`}>
          {k.mission.subtitle2}
        </span>

        <div className="relative transition hover:brightness-90">
          <video
            controls
            data-keepplaying
            playsInline
            ref={videoRef}
            preload="true"
            crossOrigin="anonymous"
            className="w-full max-w-[800px] cursor-pointer transition will-change-transform"
            onClick={() => toggleVideo()}
          >
            <source src="/videos/1017-arta-video-brand-r12_comp.mp4" typeof="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {isPlaying && (
            <div
              className="absolute pointer-events-none top-1/2 left-1/2 flex h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer flex-col justify-center rounded-full bg-arta-sand-100 text-center hover:shadow-lg"
            >
              <svg
                className="ml-5"
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9331 12.5733L0.173104 25.1365L0.173105 0.0101748L21.9331 12.5733Z"
                  fill="#F4F1E1"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

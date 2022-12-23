import React, { useRef, useState } from 'react'
import Image from 'next/image'
import mission_bg from './images/aboutus_vision_bg.jpg'
import { textClass } from 'src/components/Text'
import { PageAboutCmsT } from 'src/pages/about-us'
import { useTranslation } from 'next-i18next'

export const SectionMission = (props: { k: PageAboutCmsT }) => {
  const { k } = props

  const videoRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useTranslation('common')

  const toggleVideo = () => {
    console.log(isPlaying)
    if (videoRef.current && !isPlaying) {
      videoRef.current.play()
      setIsPlaying(!videoRef.current.paused)
      console.log(!videoRef.current.paused)
    } else {
      videoRef.current.pause()
      setIsPlaying(!videoRef.current.paused)
      console.log(!videoRef.current.paused)
    }
  }

  return (
    <div className="group/bg relative overflow-hidden" id="mission">
      <div className="arta-container relative mx-auto flex items-center justify-center px-0 pt-6 md:py-16 md:px-[1.5rem] lg:px-[6rem]">
        <div className="relative w-full transition hover:brightness-90">
          <video
            controls
            data-keepplaying
            playsInline
            ref={videoRef}
            preload="true"
            crossOrigin="anonymous"
            className="w-full cursor-pointer transition will-change-transform"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/videos/1017-arta-video-brand-r12_comp.mp4#t=0.001" typeof="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div className="pointer-events-none absolute top-1/2 left-1/2 flex h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer flex-col justify-center rounded-full bg-arta-sand-100 text-center hover:shadow-lg">
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

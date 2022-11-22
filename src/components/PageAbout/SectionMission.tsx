import React, { useRef, useState } from 'react'
import Image from 'next/image'
import mission_bg from './images/mission_bg.png'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionMission = () => {
  const videoRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true)
    } else {
      console.log("pause")
      videoRef.current.pause();
      setIsPlaying(false)
    }
  }

  return (
    <div className="group/bg relative overflow-hidden" id="mission">
      <div className="easeInOutSine fixed top-0 left-0 h-full w-full overflow-hidden duration-300">
        <Image src={mission_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container mx-auto relative flex flex-col items-center justify-center py-16 md:py-36">
        <h2 className={`${textClass.title_style2} mb-4 text-center text-arta-eggshell-100`}>
          {t.mission.title}
        </h2>
        <span className={`${textClass.h2_style2} md:-translate-x-24 text-arta-snow-100`}>
          {t.mission.subtitle1}
        </span>
        <span className={`${textClass.h2_style2} md:translate-x-24 text-arta-snow-100 mb-12`}>
          {t.mission.subtitle2}
        </span>

        <div className="relative hover:brightness-90 transition">
          <video
            controls
            data-keepplaying
            playsInline
            ref={videoRef}
            preload="true"
            crossOrigin="anonymous"
            className="will-change-transform max-w-[800px] w-full cursor-pointer transition"
            onClick={() => toggleVideo()}
          >
            <source src="/videos/1017-arta-video-brand-r12_comp.mp4" typeof="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {
            !isPlaying && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-arta-sand-100 rounded-full w-[55px] h-[55px] flex justify-center text-center flex-col cursor-pointer hover:shadow-lg" onClick={() => toggleVideo()}>
                <svg className="ml-5" width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9331 12.5733L0.173104 25.1365L0.173105 0.0101748L21.9331 12.5733Z" fill="#F4F1E1"/>
                </svg>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

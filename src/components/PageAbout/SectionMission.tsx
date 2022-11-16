import React, { useRef, useState } from 'react'
import Image from 'next/image'
import mission_bg from './images/mission_bg.png'
import { textClass } from 'src/components/Text'
import { t } from './PageAbout'

export const SectionMission = () => {
  const videoRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    console.log("toggle")
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
      <div className="easeInOutSine absolute h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src={mission_bg} alt="" fill className="object-cover" />
      </div>
      <div className="arta-container mx-auto relative flex flex-col items-center justify-center py-36">
        <h2 className={`${textClass.title_style2} mb-4 text-center text-arta-eggshell-100`}>
          {t.mission.title}
        </h2>
        <span className={`${textClass.h2_style2} -translate-x-24 text-arta-snow-100`}>
          {t.mission.subtitle1}
        </span>
        <span className={`${textClass.h2_style2} translate-x-24 text-arta-snow-100 mb-12`}>
          {t.mission.subtitle2}
        </span>

        <video
          data-keepplaying
          playsInline
          ref={videoRef}
          preload="true"
          crossOrigin="anonymous"
          className="will-change-transform max-w-[800px] w-[90%]"
          onClick={() => toggleVideo()}
        >
          <source src="/videos/1017-arta-video-brand-r12_comp.mp4" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

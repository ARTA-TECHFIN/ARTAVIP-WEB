import Image from "next/image"

const WechatPopup = ({togglePopup, qrCode}: any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[60]">
      <div onClick={() => togglePopup()} className="fixed bg-black bg-opacity-70 w-full h-full" />
      <div className="fixed top-1/2 left-1/2 w-[80%] max-w-[450px] lg:w-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl">
        <div className="relative py-16 px-24 lg:px-32">
          <svg className="absolute top-6 right-6 cursor-pointer" onClick={() => togglePopup()} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="0.646447" x2="17.3536" y2="17.6464" stroke="#593725"/>
            <line x1="17.3536" y1="0.353553" x2="0.353553" y2="17.3536" stroke="#593725"/>
          </svg>
          <Image src={qrCode || "/images/wechat.jpg"} width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  )
}

export { WechatPopup }

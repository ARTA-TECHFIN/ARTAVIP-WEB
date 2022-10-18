import Link from 'next/link'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <div className="flex max-w-main-contain py-6 px-6 text-[#F4F1E1] md:px-20 md:py-12 xl:mx-auto">
      <div className="flex w-full flex-col space-y-9">
        <div className="flex flex-col justify-between lg:flex-row lg:space-x-9">
          <div className="order-2 flex flex-col space-y-5 text-[16px] md:flex-row md:space-x-5 md:space-y-0 lg:order-1">
            <div className="flex flex-col items-start justify-start space-y-4">
              <h6 className="font-Verah text-[16px] leading-[24px]">Address</h6>
              <a
                href="#"
                className="cursor-pointer font-Neue text-[12px] leading-[20px] decoration-white hover:underline"
              >
                Units 1-2, Level 9, <br></br>
                K11 ATELIER King’s Road, <br></br>
                728 King’s Road,Quarry Bay,<br></br>
                <span>Hong Kong</span>
              </a>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h6 className="font-Verah text-[16px] leading-[24px]">
                Contact us
              </h6>
              <ul className="list-none font-Neue text-[12px] leading-[20px]">
                <li>
                  <a href="tel:+852 3513 8279">
                    <span>
                      Tel{' '}
                      <span className="cursor-pointer decoration-white hover:underline">
                        (852) 3513 8279
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a href="fax:+852 2507 2009">
                    <span>
                      Fax{' '}
                      <span className="cursor-pointer decoration-white hover:underline">
                        (852) 2507 2009
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:marketing@artatechfin.com">
                    <span>
                      Email{' '}
                      <span className="cursor-pointer decoration-white hover:underline">
                        marketing@artatechfin.com
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h6 className=" text-[16px] leading-[24px]">Social media</h6>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="rounded-[2px] bg-[#878095] p-1 hover:bg-white"
                >
                  <img
                    src="/images/linkedin.png"
                    alt="linkedin"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="#"
                  className="rounded-[2px] bg-[#878095] p-1 hover:bg-white"
                >
                  {' '}
                  <img
                    src="/images/twitter.png"
                    alt="twitter"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="#"
                  className="rounded-[2px] bg-[#878095] p-1 hover:bg-white"
                >
                  {' '}
                  <img
                    src="/images/facebook.png"
                    alt="facebook"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="#"
                  className="rounded-[2px] bg-[#878095] p-1 hover:bg-white"
                >
                  {' '}
                  <img
                    src="/images/wechat.png"
                    alt="wechat"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <div></div> */}
          <div className="order-1 mb-4 flex items-start justify-start space-y-3 lg:order-2 lg:mb-0 lg:space-y-0">
            <h3 className="text-left text-[32px] font-bold leading-[40px] text-white lg:text-right lg:text-[36px] lg:leading-[45px]">
              Break Barriers for Greatness.
            </h3>
          </div>
        </div>
        <hr className="h-[2px] text-[#878095]"></hr>
        <div className="flex  flex-col items-start justify-start space-y-5 font-Neue lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-around space-x-3 text-[12px] leading-[20px] sm:space-x-6">
            <p className="cursor-pointer hover:underline">DISCLAIMER</p>
            <p>|</p>
            <p className="cursor-pointer hover:underline">PRIVACY POLICY </p>
            <p>|</p>
            <p className="cursor-pointer hover:underline">繁中 簡中</p>
          </div>
          <div className="text-xs leading-[20px]">
            <p>© Arta TechFin Corporation Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

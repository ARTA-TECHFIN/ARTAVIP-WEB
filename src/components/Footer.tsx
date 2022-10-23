import React, { FC } from 'react'
import { Hr } from './Hr'
import { IconFacebook, IconLinkedIn, IconTwitter, IconWeChat } from './Icon'

const t = {
  address: `Units 1-2, Level 9, \nK11 ATELIER King’s Road, \n728 King’s Road,Quarry Bay,\nHong Kong`,
  socialMediaList: [
    { href: '#LinkedIn', Component: IconLinkedIn },
    { href: '#Twitter', Component: IconTwitter },
    { href: '#Facebook', Component: IconFacebook },
    { href: '#WeChat', Component: IconWeChat },
  ],
}

const Footer: FC<{ textColor?: 'white' | 'brown' }> = (props) => {
  const { textColor = 'white' } = props

  const textClass =
    textColor === 'white'
      ? 'text-arta-eggshell-100 decoration-arta-snow-100'
      : 'text-arta-sand-100 decoration-arta-sand-100'
  const bgClass = textColor === 'white' ? 'bg-arta-bistre-100' : 'bg-arta-eggshell-100'
  const borderClass = textColor === 'white' ? 'border-[#878095]' : 'border-arta-sand-100/50'

  return (
    <footer className={`relative z-2 h-full w-full ${bgClass} ${textClass}`}>
      <div className="flex max-w-main-contain py-6 px-6 md:px-20 md:py-12 xl:mx-auto">
        <div className="flex w-full flex-col space-y-9">
          <div className="flex flex-col justify-between lg:flex-row lg:space-x-9">
            <div className="order-2 flex flex-col space-y-5 text-[16px] md:flex-row md:space-x-5 md:space-y-0 lg:order-1">
              <div className="flex flex-col items-start justify-start space-y-4">
                <h6 className="font-Verah text-[16px] leading-[24px]">Address</h6>
                <a
                  href="#"
                  className="cursor-pointer whitespace-pre font-Neue text-[12px] leading-[20px] hover:underline"
                >
                  {t.address}
                </a>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h6 className="font-Verah text-[16px] leading-[24px]">Contact us</h6>
                <ul className="list-none font-Neue text-[12px] leading-[20px]">
                  <li>
                    <a href="tel:+852 3513 8279">
                      <span>
                        Tel <span className="cursor-pointer hover:underline">(852) 3513 8279</span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="fax:+852 2507 2009">
                      <span>
                        Fax <span className="cursor-pointer hover:underline">(852) 2507 2009</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:marketing@artatechfin.com">
                      <span>
                        Email{' '}
                        <span className="cursor-pointer hover:underline">
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
                  {t.socialMediaList.map(({ href, Component }) => (
                    <a href={href} key={href}>
                      <Component className="h-6 w-6 pr-1 last:pr-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 mb-4 flex items-start justify-start space-y-3 lg:order-2 lg:mb-0 lg:space-y-0">
              <h3 className="text-left text-[32px] font-bold leading-[40px] lg:text-right lg:text-[36px] lg:leading-[45px]">
                Break Barriers for Greatness.
              </h3>
            </div>
          </div>
          <Hr borderColorClass={borderClass} />
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
    </footer>
  )
}

export default Footer

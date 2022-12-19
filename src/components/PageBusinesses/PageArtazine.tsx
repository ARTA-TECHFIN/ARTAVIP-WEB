import React, { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useTranslation } from 'next-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { CustomArrowLeft, CustomArrowRight } from 'src/components/Svg/Icon'

const PageArtazine: FC<{ k: any; locale: string }> = ({ k, locale }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.artazine')} | Arta TechFin`}
        description={t('page_description.artazine')}
        keywords={t('page_keywords.artazine')}
        ga="OB - ARTAZINE"
      />
      <Header textColor="black" />
      <main className="arta-app-page flex flex-col bg-arta-bright-gray text-arta-black">
        <div className="mt-[32px] pt-[6em] md:mt-[48px] lg:pt-[4.6em]">
          <div className="arta-container mx-auto">
            <div className="py-[60px] md:pt-[32px] md:pb-[100px]">
              <div className="grid-cols-12 gap-x-[20px] border-b-[1px] border-arta-black md:grid">
                <div className="col-span-5">
                  <p className="h5-text pb-[8px]">{t('artazine', { ns: 'download' })}</p>
                  <h1 className="h1-style2-text ">{t('title', { ns: 'download' })}</h1>
                  <h2 className="small-text mt-3 mb-10 md:mt-[8px] md:mb-[32px]">
                    {t('desc', { ns: 'download' })}
                  </h2>
                  <div className="mb-6 flex md:mb-9">
                    <a
                      href="https://apps.apple.com/us/app/artazine/id1633054118"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`/images/our-businesses/artazine/app_d.png`}
                        width="215"
                        height="62"
                        className="mr-4 hidden md:block"
                      />
                      <img
                        src={`/images/our-businesses/artazine/app_m.png`}
                        width="114"
                        className="mr-2 md:hidden"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.arta.artazine"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`/images/our-businesses/artazine/google_d.png`}
                        width="215"
                        height="62"
                        className="hidden md:block"
                      />
                      <img
                        src={`/images/our-businesses/artazine/google_m.png`}
                        width="114"
                        className="md:hidden"
                      />
                    </a>
                  </div>
                  <a
                    href="https://www.artazine.com"
                    target="_blank"
                    className="mode-default-btn small-text mb-[20px] inline-block rounded-[50px] border-[1px] border-arta-black py-[10px] px-[40px]"
                    rel="noreferrer"
                  >
                    {t('view_website', { ns: 'download' })}
                  </a>
                </div>
                <div className="col-span-7 self-end md:mt-[36px]">
                  <div className="app-download-bg pb-[59.72%]" />
                </div>
              </div>
              <div className="border-b-[1px] border-arta-black pt-[48px] pb-[8px] md:py-[120px]">
                <div className="grid-cols-12 gap-x-[20px] md:grid">
                  <div className="col-span-3">
                    <img
                      src="/images/our-businesses/artazine/artazine.png"
                      className="mx-auto w-[100px] md:mx-[unset] md:w-[260px]"
                    />
                  </div>
                  <div className="col-span-9">
                    <div className="mt-9 flex-wrap md:mt-0 md:flex">
                      <div className="mb-[32px] shrink-0 md:mr-7">
                        <div className="h1-style2-text ">
                          {t('intro_title_1', { ns: 'download' })}
                        </div>
                        <p className="small-text">{t('intro_title_1_label', { ns: 'download' })}</p>
                      </div>
                      <div className="mb-[32px] flex grow items-center">
                        <div className="mr-4 h-[2px] w-full grow bg-arta-black md:mr-7 md:h-[1px]"></div>
                        <div className=" shrink-0">
                          <div className="h1-style2-text">
                            {t('intro_title_2', { ns: 'download' })}
                          </div>
                          <p className="small-text">
                            {t('intro_title_2_label', { ns: 'download' })}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="body-regular-text"> {t('intro_desc', { ns: 'download' })}</p>
                  </div>
                </div>
                <div className="pt-[40px] md:pt-[80px]">
                  <div className="grid-cols-12 gap-x-[20px] md:grid">
                    <div className="col-span-4 pb-[60px]">
                      <div className="h2-bold-text border-b-[1px] border-arta-black pb-[8px] md:pb-[20px]">
                        01
                      </div>
                      <p className="body-regular-text pt-[20px] font-Neue">
                        {t('intro_box_1_desc', { ns: 'download' })}
                      </p>
                    </div>
                    <div className="col-span-4 pb-[60px]">
                      <div className="h2-bold-text border-b-[1px] border-arta-black pb-[8px] md:pb-[20px]">
                        02
                      </div>
                      <p className="body-regular-text pt-[20px] font-Neue">
                        {t('intro_box_2_desc', { ns: 'download' })}
                      </p>
                    </div>
                    <div className="col-span-4 pb-[60px]">
                      <div className="h2-bold-text border-b-[1px] border-arta-black pb-[8px] md:pb-[20px]">
                        03
                      </div>
                      <p className="body-regular-text pt-[20px] font-Neue">
                        {t('intro_box_3_desc', { ns: 'download' })}
                      </p>
                    </div>
                    <div className="col-span-4 pb-[60px]">
                      <div className="h2-bold-text border-b-[1px] border-arta-black pb-[8px] md:pb-[20px]">
                        04
                      </div>
                      <p className="body-regular-text pt-[20px] font-Neue">
                        {t('intro_box_4_desc', { ns: 'download' })}
                      </p>
                    </div>
                    <div className="col-span-4 pb-[60px]">
                      <div className="h2-bold-text border-b-[1px] border-arta-black pb-[8px] md:pb-[20px]">
                        05
                      </div>
                      <p className="body-regular-text pt-[20px] font-Neue">
                        {t('intro_box_5_desc', { ns: 'download' })}
                      </p>
                    </div>
                    <div className="col-span-4 pb-[60px]">
                      <div className="h2-bold-text border-b-[1px] border-arta-black pb-[8px] md:pb-[20px]">
                        06
                      </div>
                      <p className="body-regular-text pt-[20px] font-Neue">
                        {t('intro_box_6_desc', { ns: 'download' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[60px] md:pt-20">
                <div className="h1-text-bold pb-[60px]">{t('preview', { ns: 'download' })}</div>
                <Swiper
                  className="download-slider default-slider"
                  navigation={{
                    prevEl: '.download-slide-btn-prev',
                    nextEl: '.download-slide-btn-next',
                  }}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  spaceBetween={20}
                  preventClicks={false}
                  breakpoints={{
                    768: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                  }}
                  allowTouchMove={true}
                  modules={[Navigation]}
                >
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="mx-auto w-[50%] md:w-[90%]">
                        <div className="app-download-slide pb-[181.5%]"></div>
                      </div>
                      <div className="small-text mt-[32px] mb-[12px] md:hidden">
                        {t('of_text', { ns: 'download', num: 1, count: 4 })}
                      </div>
                      <div className="h1-style2-text md:mt-10">
                        {t('slide_1_title', { ns: 'download' })}
                      </div>
                      <div className="caption-medium-text mt-1">
                        {t('slide_1_desc', { ns: 'download' })}
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="mx-auto w-[50%] md:w-[90%]">
                        <div className="app-download-slide2 pb-[181.5%]"></div>
                      </div>
                      <div className="small-text mt-[32px] mb-[12px] md:hidden">
                        {t('of_text', { ns: 'download', num: 2, count: 4 })}
                      </div>
                      <div className="h1-style2-text md:mt-10">
                        {t('slide_2_title', { ns: 'download' })}
                      </div>
                      <div className="caption-medium-text mt-1">
                        {t('slide_2_desc', { ns: 'download' })}
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="mx-auto w-[50%] md:w-[90%]">
                        <div className="app-download-slide3 pb-[181.5%]"></div>
                      </div>
                      <div className="small-text mt-[32px] mb-[12px] md:hidden">
                        {t('of_text', { ns: 'download', num: 3, count: 4 })}
                      </div>
                      <div className="h1-style2-text md:mt-10">
                        {t('slide_3_title', { ns: 'download' })}
                      </div>
                      <div className="caption-medium-text mt-1">
                        {t('slide_3_desc', { ns: 'download' })}
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <div className="mx-auto w-[50%] md:w-[90%]">
                        <div className="app-download-slide4 pb-[181.5%]"></div>
                      </div>
                      <div className="small-text mt-[32px] mb-[12px] md:hidden">
                        {t('of_text', { ns: 'download', num: 4, count: 4 })}
                      </div>
                      <div className="h1-style2-text md:mt-10">
                        {t('slide_4_title', { ns: 'download' })}
                      </div>
                      <div className="caption-medium-text mt-1">
                        {t('slide_4_desc', { ns: 'download' })}
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="mt-5 flex justify-center md:hidden">
                  <div className="download-slide-btn-prev mr-[4px] cursor-pointer">
                    <div className="hover-arrow h-[40px] w-[40px]">
                      <CustomArrowLeft className={'mx-auto h-full'} />
                    </div>
                  </div>
                  <div className="download-slide-btn-next cursor-pointer">
                    <div className="hover-arrow h-[40px] w-[40px]">
                      <CustomArrowRight className={'mx-auto h-full'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer textColor="black" />
    </>
  )
}

export default PageArtazine

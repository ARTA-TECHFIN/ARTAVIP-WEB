import React, { FC, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { ButtonAnimated } from '../ButtonAnimated'

interface propsT {
  item: {
    pageName: string
    paragraph: string
    buttonText: string
    pages: {
      title: string
      link: string
    }[]
  }
}

const MobileNavbar: FC<propsT> = ({ item }) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div>
        <ul>
          <li
            className=" group flex cursor-pointer text-[16px] leading-[24px] "
            onClick={() => {
              setShow(!show)
            }}
          >
            <span className="decoration-[#E5C183] underline-offset-[15px] transition group-hover:underline">
              {item.pageName}
            </span>
            {show ? (
              <ChevronUpIcon className="mt-1 ml-1  h-4 w-4 group-hover:text-[#E5C183]" />
            ) : (
              <ChevronDownIcon className="mt-1 ml-1  h-4 w-4 group-hover:text-[#E5C183]" />
            )}
          </li>
        </ul>
        {show && (
          <div
            className={`${
              show && 'scale-y-100 transform opacity-100 transition delay-100'
            } mt-5 flex transform flex-col items-start justify-start `}
          >
            <p className="mt-5 max-w-[500px] text-sm">{item.paragraph}</p>
            <ButtonAnimated
              as="a"
              href="#_"
              className="my-6 w-[260px] border-2 border-white p-4 px-6 py-3 font-medium text-white shadow-md "
              borderWidth={2}
            >
              {item.buttonText}
            </ButtonAnimated>

            <div className="flex flex-col justify-center space-y-5 pl-5">
              {item.pages.map((item, index) => (
                <div className="group " key={index}>
                  <li className=" relative -translate-x-6 cursor-pointer list-none py-2 px-2 opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100 ">
                    {/* <span className="absolute top-0 left-0 h-full w-0  transition-all duration-150 ease-in-out group-hover:w-full group-hover:bg-[#f1eded45]"></span> */}
                    <span className="flex items-start pl-5">
                      <img
                        src="/images/Group 5.png"
                        alt="arrow"
                        className=" ease hidden -translate-x-full pt-[10px] pr-2 duration-300 group-hover:block group-hover:translate-x-0"
                      />
                      <span>{item.title}</span>
                    </span>
                  </li>
                </div>
              ))}
            </div>
            <hr className="mt-4 h-[2px] w-full bg-[#E5C183]"></hr>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileNavbar

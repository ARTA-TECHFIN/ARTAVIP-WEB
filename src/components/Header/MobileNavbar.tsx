import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
interface props {
  item: {}
}
const MobileNavbar = ({ ...props }) => {
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
              {props.item.pageName}
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
            <p className="mt-5 max-w-[500px] text-sm">{props.item.paragraph}</p>
            <a
              href="#_"
              className="group relative my-6 inline-flex w-[260px] items-center justify-center overflow-hidden rounded-full border-2  border-white p-4 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out"
            >
              <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] text-[16px] leading-[24px] text-white duration-300 group-hover:translate-x-0">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
                <span>{props.item.buttonText}</span>
              </span>
              <span className="ease absolute flex h-full w-full transform items-center justify-center text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
                {props.item.buttonText}
              </span>
              <span className="invisible relative">
                {props.item.buttonText}
              </span>
            </a>

            <div className="flex flex-col justify-center space-y-5 pl-5">
              {props.item.pages.map((item: string, index: number) => (
                <div className="group " key={index}>
                  <li className=" relative -translate-x-6 cursor-pointer list-none py-2 px-2 opacity-70 duration-300 ease-out hover:translate-x-0 hover:opacity-100 ">
                    {/* <span className="absolute top-0 left-0 h-full w-0  transition-all duration-150 ease-in-out group-hover:w-full group-hover:bg-[#f1eded45]"></span> */}
                    <span className="flex items-start pl-5">
                      <img
                        src="/images/Group 5.png"
                        alt="arrow"
                        className=" ease hidden -translate-x-full pt-[10px] pr-2 duration-300 group-hover:block group-hover:translate-x-0"
                      />
                      <span>{item}</span>
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

import type { NextPage } from 'next'
import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { textClass } from '../Text'
import {links} from 'src/domains/links'
import {mediaCmsT} from 'src/domains/media'
import {IconArrowLeft} from '../Svg/Icon'

type propsT = {
    cms: mediaCmsT
    id: number
  }

const PageBlogPost: FC<propsT> = ({ cms, id })  => {
    const post = cms.blogPosts[id]
    return(
        <div className="arta-container mx-auto">
            <div 
                className={`underline cursor-pointer flex items-center ${textClass.body_regular_verah}`}
                onClick={() =>  Router.push(`${links.mediaBlog}`, undefined, { scroll: false })}
            >
                <IconArrowLeft fill='#593725' className='h-4 mr-2'/>
                {'Back to listing'}
            </div>
            <div className="md:p-12 p-6 bg-white shadow-blogPost mt-4">
                <p className='text-xs text-arta-indigo-100'>{post.date}</p>
                <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{post.title}</h2>
                <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{post.text}</p>
                <div className="mx-auto mt-12 w-fit">
                    <Image src={post.image} alt='' width={470.39} height={350}/>
                </div>
           </div>
        </div>
        
    )
}

export default PageBlogPost
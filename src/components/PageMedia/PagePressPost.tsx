import type { NextPage } from 'next'
import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import parse from 'html-react-parser';

import { textClass } from '../Text'
import {links} from 'src/domains/links'
import {mediaCmsT} from 'src/domains/media'
import {IconArrowLeft} from '../Svg/Icon'

type propsT = {
    cms: mediaCmsT
    id1: number
    id2: number
  }

const PagePressPost: FC<propsT> = ({ cms, id1, id2 })  => {

    const post = cms.pressPosts[id1].posts[id2]

    return(
        <div className="arta-container mx-auto">
            <Link 
                className={`underline cursor-pointer flex items-center ${textClass.body_regular_verah}`}
                href={links.mediaPress}
            >
                <IconArrowLeft fill='#593725' className='h-4 mr-2'/>
                {'Back to listing'}
            </Link>
            <div className="md:p-12 p-6 bg-white shadow-blogPost mt-4">
                <p className='text-xs text-arta-indigo-100'>{post.date}</p>
                <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{post.title}</h2>
                <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{parse(post.text)}</p>
           </div>
        </div>
        
    )
}

export default PagePressPost
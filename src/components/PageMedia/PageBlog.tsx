import { FC } from 'react'
import type { NextPage } from 'next'
import Router from 'next/router'

import {mediaCmsT} from 'src/domains/media'
import {links} from 'src/domains/links'
import PostCard from './PostCard'

type propsT = {
    cms: mediaCmsT
}

const PageBlog: FC<propsT> = ({ cms })  => {
    return(
        <div className="arta-container mx-auto">
            <div className='grid grid-cols-12 md:gap-8 gap-4'>
                {
                    cms.blogPosts.map((post, index) => (
                        <div 
                            key={index} 
                            className='lg:col-span-4 md:col-span-6 col-span-full' 
                            onClick={() =>  Router.push(`${links.mediaBlogPost}/${index}`, undefined, { scroll: false })}
                        >
                            <PostCard
                                index={index}
                                image={post.image}
                                date={post.date}
                                title={post.title}
                            />
                        </div>
                    ))
                }
                
            </div>
        </div>
        
    )
}

export default PageBlog
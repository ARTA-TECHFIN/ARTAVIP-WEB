import { FC } from 'react'
import Link from 'next/link'

import { mediaCmsT } from 'src/domains/media'
import { links } from 'src/domains/links'
import PostCard from './PostCard'

type propsT = {
  cms: mediaCmsT
}

const PageBlog: FC<propsT> = ({ cms }) => {
  return (
    <div className="arta-container mx-auto">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {cms.blogPosts.map((post, index) => (
          <Link
            key={index}
            className="col-span-full md:col-span-6 lg:col-span-4"
            href={`${links.mediaBlogPost}/${index}`}
          >
            <PostCard index={index} image={post.image} date={post.date} title={post.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PageBlog

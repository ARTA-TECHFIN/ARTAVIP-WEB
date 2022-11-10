import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'

import { textClass } from '../Text'
import { links } from 'src/domains/links'
import { mediaCmsT } from 'src/domains/media'
import { IconArrowLeft } from '../Svg/Icon'

type propsT = {
  cms: mediaCmsT
  id: number
}

const PageBlogPost: FC<propsT> = ({ cms, id }) => {
  const post = cms.blogPosts[id]
  return (
    <div className="arta-container mx-auto">
      <Link
        className={`flex cursor-pointer items-center underline ${textClass.body_regular_verah}`}
        href={links.mediaBlog}
      >
        <IconArrowLeft fill="#593725" className="mr-2 h-4" />
        {'Back to listing'}
      </Link>
      <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
        <p className="text-xs text-arta-indigo-100">{post.date}</p>
        <h2 className={`mt-2 ${textClass.h3_style2} text-arta-secondary`}>{post.title}</h2>
        <p className={`mt-6 ${textClass.body_regular_verah} text-black`}>{post.text}</p>
        <div className="mx-auto mt-12 w-fit">
          <Image src={post.image} alt="" width={470.39} height={350} />
        </div>
      </div>
    </div>
  )
}

export default PageBlogPost

import Image from 'next/image'

type propsT = {
    index: number
    image: string
    date: string
    title: string
  }

const PostCard = (props: propsT) => {
    const {image, date, title} = props

    return(
        <div className="w-full bg-white transition-shadow hover:shadow-postCard cursor-pointer">
            <Image width={395} height={246}  src={image} alt="" className='w-full'/>
            <div className='px-6 md:pt-6 md:pb-12 pt-4 pb-6'>
                <span className='text-xs'>{date}</span>
                <h5 className='text-xl mt-1'>{title}</h5> 
            </div>
        </div>
    )
}


export default PostCard
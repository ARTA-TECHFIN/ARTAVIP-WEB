import { useRouter } from 'next/router'
import PageMediaPage ,  { TABS }from 'src/components/PageMedia/PageMedia'
import PageBlogPost from 'src/components/PageMedia/PageBlogPost'
import { cms } from 'src/domains/media'

const Post= () => {
  const router = useRouter()
  const pid  = Number(router.query.pid)
  
  return (
    <PageMediaPage cms={cms} tabType={TABS.Blog}>
      <PageBlogPost cms={cms} id={pid} />
    </PageMediaPage>
  )
}



export default Post
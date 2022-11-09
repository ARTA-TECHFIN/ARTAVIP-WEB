import PageMediaPage ,  { TABS }from 'src/components/PageMedia/PageMedia'
import PageBlog from 'src/components/PageMedia/PageBlog'
import { cms } from 'src/domains/media'

const PageMediaCenter= () => {
  return (
    <PageMediaPage cms={cms} tabType={TABS.Blog}>
        <PageBlog  cms={cms}/>
    </PageMediaPage>
  )
}

export default PageMediaCenter

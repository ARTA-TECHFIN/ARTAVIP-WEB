import PageMediaPage ,  { TABS }from 'src/components/PageMedia/PageMedia'
import PagePress from 'src/components/PageMedia/PagePress'
import { cms } from 'src/domains/media'
const PageMediaCenter= () => {
  return (
    <PageMediaPage cms={cms} tabType={TABS.Press_Releases}>
        <PagePress cms={cms}/>
    </PageMediaPage>
  )
}

export default PageMediaCenter

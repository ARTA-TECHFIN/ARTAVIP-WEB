import { useRouter } from 'next/router'
import PageMediaPage ,  { TABS }from 'src/components/PageMedia/PageMedia'
import PagePressPost from 'src/components/PageMedia/PagePressPost'
import { cms } from 'src/domains/media'

const PressPost= () => {
  const router = useRouter()
  const pslug  =(router.query.slug as string[]) || []

  const id1 = Number(pslug[0])
  const id2 = Number(pslug[1])

  
  return (
    <PageMediaPage cms={cms} tabType={TABS.Blog}>
      <PagePressPost cms={cms} id1={id1} id2={id2} />
    </PageMediaPage>
  )
}



export default PressPost
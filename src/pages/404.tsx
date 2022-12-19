import { StaticLayout } from 'src/components/PageStatic/Layout'
import { textClass } from 'src/components/Text'
import parse from 'html-react-parser'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { text } from 'stream/consumers'

const Disclaimer = () => {
  const cms = {
    heroBanner: {
      title: 'Error 404',
      description: '',
      image: '/images/bg-static.jpg',
      mobileImage: '/images/mobile-bg-static.jpg',
    },
  }
  return (
    <StaticLayout
      cms={cms}
      hideFooter={true}
      hideMenu={true}
      seo={{ title: 'Something Went Wrong', description: '', keywords: '' }}
      title={'Something Went Wrong'}
    >
      <div className="arta-container mx-auto mt-8 min-h-[40vh]">
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <div className={`blog-content mt-6 ${textClass.body_regular_verah} text-black`}>
            <p className={textClass.body_regular}>
              We couldn’t find the page you’re looking for.
              <br />
              Please visit the Homepage or Contact us.
            </p>

            <ButtonAnimated as="a" href="/" className="border-arta-sand-100 text-arta-sand-100">
              {'Back to Homepage'}
            </ButtonAnimated>
          </div>
        </div>
      </div>
    </StaticLayout>
  )
}

export default Disclaimer

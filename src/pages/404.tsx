import { StaticLayout } from 'src/components/PageStatic/Layout'
import { textClass } from 'src/components/Text'
import parse from 'html-react-parser'
import { ButtonAnimated } from 'src/components/ButtonAnimated'

const Disclaimer = () => {
  const cms = {
    heroBanner: {
      title: 'Error 404',
      description: '',
      image: '/images/bg-static.jpg',
      mobileImage: '/images/bg-static.jpg',
    }
  }
  return (
    <StaticLayout cms={cms} hideFooter={true}>
      <div className="arta-container mx-auto mt-8">
        <div className="mt-4 bg-white p-6 shadow-blogPost md:p-12">
          <div className={`blog-content mt-6 ${textClass.body_regular_verah} text-black`}>
            <p>We couldn’t find the page you’re looking for.<br />Visit the Homepage or Contact us</p>

            <ButtonAnimated
              as="a"
              href="/"
              className="border-arta-sand-100 text-arta-sand-100"
            >
              {"Home"}
            </ButtonAnimated>
          </div>
        </div>
      </div>
    </StaticLayout>
  )
}

export default Disclaimer

import { langT } from './i18n'

// TODO: generate this from cms
export type getMediaCmsT = Awaited<ReturnType<typeof getMediaCms>>

export const getSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[- ]+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const getMediaCms = async ({ lang }: { lang: langT }) => {
  // TODO: get cms from api
  return {
    heroBanner: {
      title: 'Media Centre',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      image: '/images/media-centre/banner.png',
      mobileImage: '/images/media-centre/mobile-banner.png',
    },

    blogPosts: [
      {
        image: '/images/media-centre/blog-posts/1.png',
        date: 'OCT 21 2022',
        title: 'Title - Dummy Mid-Autumn Fesestival activities',
        text: 'The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.',
      },
      {
        image: '/images/media-centre/blog-posts/2.png',
        date: 'OCT 21 2022',
        title: 'Title - Dummy Mid-Autumn Fesestival activities',
        text: 'The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.',
      },
      {
        image: '/images/media-centre/blog-posts/3.png',
        date: 'OCT 21 2022',
        title: 'Title - Dummy Mid-Autumn Fesestival activities',
        text: 'The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.',
      },
      {
        image: '/images/media-centre/blog-posts/4.png',
        date: 'OCT 21 2022',
        title: 'Title - Dummy Mid-Autumn Fesestival activities',
        text: 'The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.',
      },
      {
        image: '/images/media-centre/blog-posts/5.png',
        date: 'OCT 21 2022',
        title: 'Title - Dummy Mid-Autumn Fesestival activities',
        text: 'The Mid-Autumn Festival is around the corner. To celebrate the holiday, family members usually gather to revel in festivities like feasting on mooncakes and moon gazing. We want to share this joyful festive atmosphere to the elderly in our #community. Last week, in collaboration with the Yang Memorial Methodist Social Service, our colleagues visited the elderly who reside alone in Fu Shan Estate, Diamond Hill, and helped distribute gift bags. We hope these senior citizens stay healthy and enjoy a confident and contented golden age.',
      },
    ],

    pressPosts: [
      {
        year: 2022,
        posts: [
          {
            date: 'OCT 21 2022',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2022',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2022',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2022',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
        ],
      },
      {
        year: 2021,
        posts: [
          {
            date: 'OCT 21 2021',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2021',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2021',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2021',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
        ],
      },
      {
        year: 2020,
        posts: [
          {
            date: 'OCT 21 2020',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2020',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2020',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2020',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
        ],
      },
      {
        year: 2019,
        posts: [
          {
            date: 'OCT 21 2019',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold"><span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  </span> partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2019',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2019',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
          {
            date: 'Mon Apr 04 2019',
            title: `ARTA TechFin partners with Atlanfic Technology to revolutionize licensed investment
              manager, family office business operations, resolve pain points`,
            text: `<span className="font-bold">(Hong Kong, 23 February 2022) - ARTA TechFin (00279.HK) (“ARTA”) and Atlanfic Technology (“Atlanfic”), a FinTech solution provider, today announced a strategic </span>  partnership which will offer licensed investment managers and family offices a SaaS-based total, automated, anywhere asset management solution.

              The partnership aims to standardize current fragmented financial data structures and automate labour-intensive and manually-based front-to-back business workflow. The product will enable investment managers to save cost and time on business management and reporting, focusing on what they do best: investment management and capital raising. Key advantages will include:
              
              Cost-efficient: full front-to-back-office workflow in one SaaS solution; goodbye to multiplesystems and fees
              Automated: replace manual and repetitive processes, earn more from instant savings onworking time, office space, staff headcount
              Anytime/Anywhere: access real-time reports and workflow status for managers, investors,stakeholders; no more delays in update and reporting
              ESG: reduce carbon-footprint, enhance investor transparency, make starting fund management business more accessible
              
              Technology research, development, and engineering at Atlanfic will be led by Mr. Guo Dan (“Guo”). Mr Guo was one of the founding members of Baidu, Inc in 2000, having served as Senior Director heading Baidu’s Engineering Department. Guo said today: “Atlanfic aspires to resolve clients’ pain points and improve the user experience through technology innovation such as data structuring, process automation and big data analytics”.
              
              Mr. Eddie Lau, Chief Executive Officer of ARTA TechFin said today, “ARTA TechFin aspires to build the next generation of financial services. This ARTA-Atlanfic partnership forms the foundation of revolutionary transformation for our clients. ARTA initiatives will also include blockchain development and applications across brokerage, asset management and insurance. We hope to offer our clients a ludic and immersive experience in managing their wealth”. The service is expected to be officially launched in the second quarter of 2022.`,
          },
        ],
      },
    ],
  }
}

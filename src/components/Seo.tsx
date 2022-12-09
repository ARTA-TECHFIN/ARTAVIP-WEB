import Head from 'next/head'

type propsT = {
  title?: string
  description?: string
  keywords?: string
}
const Seo = ({ title = 'ARTA WEB', description = 'Arta', keywords = '' }: propsT) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@graph":[
               {
                  "@type":"Organization",
                  "@id":"artatechfin.com",
                  "name":"Arta TechFin",
                  "url":"artatechfin.com/",
                  "sameAs":[
                     "https://www.facebook.com/ARTAtechfin",
                     "https://www.linkedin.com/company/arta-techfin-corporation-limited",
                     "https://twitter.com/ARTATechFin",
                  ],
                  "legalName":"ARTA TechFin Corporation Limited",
                  "contactPoint":{
                     "@type":"ContactPoint",
                     "telephone":"+852 3513 8279",
                     "contactType":"Customer service",
                     "availableLanguage":[
                        "English",
                        "Chinese"
                     ]
                  }
               },
               {
                  "@type":"WebSite",
                  "@id":"artatechfin.com",
                  "url":"artatechfin.com",
                  "name":"Arta TechFin",
                  "description":"Arta TechFin",
                  "publisher":{
                     "@id":"https://artatechfin.com/#organization"
                  },
                  "inLanguage":"en"
               },
               {
                  "@type":"WebPage",
                  "@id":"artatechfin.com/#webpage",
                  "url":"artatechfin.com/",
                  "name":"Arta TechFin",
                  "isPartOf":{
                     "@id":"artatechfin.com/#website"
                  },
                  "description":"ARTA TechFin (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology.",
                  "inLanguage":"en",
                  "potentialAction":[
                     {
                        "@type":"ReadAction",
                        "target":[
                           "artatechfin.com/"
                        ]
                     }
                  ]
                }]
              })
            }}
        />
    </Head>
  )
}

export { Seo }

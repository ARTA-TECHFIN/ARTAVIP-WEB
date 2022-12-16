import { langT } from './i18n'

import mediaCentreJson from 'apidata/media-centre.json'
import mediaCentreArtaBlogsJson from 'apidata/media-centre-arta-blogs.json'
import mediaCentrePressReleasesJson from 'apidata/media-centre-press-releases.json'

// TODO: generate this from cms
export type getMediaCmsT = Awaited<ReturnType<typeof getMediaCms>>

export const getSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[- ]+/g, '-')
    .replace(/[^\w-]+/g, '')
}

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-center`)
  const data = await res.json()
  return data
}

const fetchBlogsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-arta-blogs`)
  const data = await res.json()
  return data
}

const fetchPressData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/media-centre-press-releases`
  )
  const data = await res.json()
  return data
}

const massageData = (
  pageData: any,
  blogData: any,
  pressData: any,
  locale: string | undefined = 'en'
) => {
  const g = (keyWithoutLang: string) => `${pageData.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const getKey = (keyWithoutLang: string) => `${`${keyWithoutLang}_${locale}`}`

  return {
    heroBanner: {
      title: 'Media Centre',
      description: g('description') !== null ? g('description') : '',
      image: '/images/media-centre/banner.jpg',
      mobileImage: '/images/media-centre/mobile-banner.jpg',
    },

    blogPosts: blogData.data.map(({ attributes: blog }: any) => ({
      image: blog.thumbnail.data?.attributes.url, //'/images/media-centre/blog-posts/1.png',
      date: blog.date, // 'OCT 21 2022',
      title: blog[getKey('title')],
      slug: blog.slug,
      text: blog[getKey('content')],
    })) as { image: string; date: string; title: string; slug: string; text: string }[],

    pressPosts: pressData.data
      .sort((a: any, b: any) => a.attributes.date.localeCompare(b.attributes.date))
      .map(({ attributes: press }: any) => ({
        year: +press.date.split('-')[0],
        post: {
          date: press.date,
          slug: press.slug,
          title: press[getKey('title')],
          title_en: press.title_en,
          text: press[getKey('content')],
          pdf: press[getKey('pdf')] ?? {},
        },
      }))
      .reduce((acc: any, curr: any) => {
        const last = acc[acc.length - 1]
        if (last && last.year === curr.year) {
          last.posts.push(curr.post)
        } else {
          acc.push({ year: curr.year, posts: [curr.post] })
        }
        return acc
      }, []) as {
      year: number
      posts: {
        date: string
        title: string
        slug: string
        title_en: string
        text: string
        pdf: any
      }[]
    }[],
  }
}

export const getMediaCms = async ({ lang }: { lang: string | undefined }) => {
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const pageData = useLocalCms ? mediaCentreJson : await fetchCmsData()
  const blogsData = useLocalCms ? mediaCentreArtaBlogsJson : await fetchBlogsData()
  const pressData = useLocalCms ? mediaCentrePressReleasesJson : await fetchPressData()

  return massageData(pageData, blogsData, pressData, lang)
}

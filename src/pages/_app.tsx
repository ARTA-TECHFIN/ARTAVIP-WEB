import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import 'src/styles/typography.css'
import 'src/styles/global.css'
import 'src/styles/text.scss'
import { useAppHeight } from 'utils/html'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  useAppHeight()

  return (
    <QueryClientProvider client={queryClient}>
      <NextNProgress color="#593725" />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)

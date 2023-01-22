import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeSwitcherProvider from '@/context/themeSwitcherContext'
import createEmotionCache from "../utils/createEmotionCache";
import { EmotionCache } from "@emotion/react"

const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps & { emotionCache: EmotionCache }) {
  return (
      <ThemeSwitcherProvider emotionCache={emotionCache}>
        <Component {...pageProps} />
      </ThemeSwitcherProvider>
  )
}

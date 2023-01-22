import * as React from 'react'
import { ThemeContextType, ThemeMode } from '@/types/themeSwitcher'
import { EmotionCache, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { darkTheme, lightTheme } from '@/utils/theme/config'
import { CacheProvider } from "@emotion/react"
import type { Theme } from '@mui/material'

interface Props {
  children: React.ReactNode,
  emotionCache: EmotionCache
}

export const ThemeSwitcherContext = React.createContext<ThemeContextType | null>(null)

const ThemeSwitcherAppPartial = ({ children, emotionCache }: Props) => {
  const [selectedTheme, setSelectedTheme] = React.useState<Theme>(darkTheme)
  const setLightTheme = () => {
    setSelectedTheme(lightTheme)
  }
  const setDarkTheme = () => {
    setSelectedTheme(darkTheme)
  }
  return <ThemeSwitcherContext.Provider value={{ theme: selectedTheme, setTheme: setSelectedTheme, setLightTheme, setDarkTheme }}>{
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={selectedTheme.palette.mode === 'dark' ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  }</ThemeSwitcherContext.Provider>
}

export default ThemeSwitcherAppPartial
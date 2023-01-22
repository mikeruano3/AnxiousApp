export type ThemeMode = 'light' | 'dark'
import type { Theme } from '@mui/material'

export type ThemeContextType = {
    theme: Theme,
    setLightTheme: () => void
    setDarkTheme: () => void
    setTheme: (theme: Theme) => void
}

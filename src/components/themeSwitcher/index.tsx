import { useState, useEffect, useContext } from 'react'
import type { ThemeContextType, ThemeMode } from '@/types/themeSwitcher'
import { ThemeSwitcherContext } from '@/context/themeSwitcherContext'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { MaterialUISwitch } from './customSwitch'
import { useTheme } from '@mui/material'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setLightTheme, setDarkTheme } = useContext(ThemeSwitcherContext) as ThemeContextType

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   event.target.checked ? setLightTheme() : setDarkTheme()
  }

  return (
    <MaterialUISwitch 
          sx={{ m: 1 }}
          checked={theme.palette.mode == 'light'}
          onChange={handleChange}
          theme={theme}
    />
  )
}

export default ThemeSwitcher
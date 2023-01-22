import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
        mode: 'light'
    },
})

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        mode: 'dark'
    },
})
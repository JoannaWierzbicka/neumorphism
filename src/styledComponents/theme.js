import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9b59b6'
    },
    secondary: {
      main: '#8e44ad'
    },
    info: {
      main: '#3498db'
    },
    warning: {
      main: '#e67e22'
    },
    success: {
      main: '#27ae60'
    },
    error: {
      main: '#e74c3c'
    }
  },
  typography: {
    h1: {
      fontSize: '4.5rem'
    },
    myTheme: {
      fontSize: '18px',
      fontFamily: 'serif'
    }
  }
})

export default theme

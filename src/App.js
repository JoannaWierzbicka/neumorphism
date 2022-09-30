/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from 'react'
import MainPage from './components/pages/MainPage'
import FirstPage from './components/pages/FirstPage'
// import SecondPage from './components/pages/SecondPage'
// import ThirdPage from './components/pages/ThirdPage'

import { Container, CssBaseline } from '@mui/material'
import { Box } from './components/styledComponents'

export const App = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const steps = ['Informacje na temat pobytu', 'Informacje dodatkowe', 'Ocena ogólna']

  function getStepContent (step) {
    switch (step) {
      case 0:
        return <FirstPage />
      case 1:
        return <SecondPage/>
      case 2:
        return <ThirdPage />
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    <>
      <CssBaseline/>
      <Container
        maxWidth={'lg'}
        sx={{
          m: 4
        }}
      ><Box>
        <FirstPage/>
      </Box>

      </Container>

    </>
  )
}

export default App

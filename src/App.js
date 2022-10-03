/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from 'react'
import MainPage from './pages/MainPage'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

import { Container, CssBaseline, Stepper, Step, StepLabel, Typography, Box, Avatar } from '@mui/material'
import { StyledBox, StyledButton } from './components/styledComponents'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

export const App = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [startForm, setStartForm] = React.useState(false)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const steps = ['Ocena szczegółowa', 'Ocena ogólna', 'Podsumowanie']

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
  
  const turnFirstPage = () => {
    setStartForm(true)
  }
  
  return (
    <>
      <CssBaseline/>
      <Container
        maxWidth={'md'}
        sx={{
          mt: '40px'
        }}
      ><StyledBox>
        {!startForm
          ? (<MainPage startForm={() => turnFirstPage()}/>) 
          : 
            (
              <><Typography
                variant={'h6'}
                align={'center'}
                >
                BADANIE POZIOMU ZADOWOLENIA Z POBYTU W PENSJONACIE JASKÓŁKA
                </Typography>
                <Stepper
                  activeStep={activeStep}
                  sx={{ pt: 3, pb: 3 }}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <React.Fragment>
                  {activeStep === steps.length
                    ? (
                      <>
                        <Typography
                          variant={'h5'}
                          mt={10}
                        >
                          Dziękujemy za wypełnienie ankiety
                        </Typography>
                        <br/>
                        <InsertEmoticonIcon/>
                      </>
              
                      )
                    : (
                      <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ width: '800px', display: 'flex', justifyContent: 'space-around', position: 'fixed', bottom: '100px' }}>
                          {activeStep !== 0 && (
                          <StyledButton
                            onClick={handleBack}
                          >
                            Back
                          </StyledButton>
                          )}

                          <StyledButton
                            variant={'contained'}
                            onClick={handleNext}
                          >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </StyledButton>
                        </Box>
                      </React.Fragment>
                      )}
                </React.Fragment>
              </>
            )
        }
       </StyledBox>
      </Container>

    </>
  )
}

export default App

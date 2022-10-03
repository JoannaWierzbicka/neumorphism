import React from 'react'
import { Typography, Box } from '@mui/material'
import { StyledButton } from '../components/styledComponents'
import PropTypes from 'prop-types'

export const MainPage = (props) => {
  const { startForm } = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <Typography
        variant={'h6'}
        align={'center'}
        gutterBottom
      >
        BADANIE POZIOMU ZADOWOLENIA Z POBYTU W PENSJONACIE JASKÓŁKA
      </Typography>
      <Typography
        variant={'overline'}
        sx={{
          padding: '2rem 6rem'
        }}
        gutterBottom
      >
        Dziękujemy za skorzystanie z usług noclegowych w naszym pensjonacie. Uprzejmie prosimy o wypełnienie krótkiej ankiety na temat satysfakcji z pobytu.
        Ankieta jest w pełni anonimowa i służy wyłącznie do analizy oraz ewentualnej poprawy jakości świadczonych usług.
        Z góry dziękujemy za udzielenie odpowiedzi!
      </Typography>
      <StyledButton onClick={startForm}>START
      </StyledButton>

    </Box>

  )
}

MainPage.propTypes = {
  startForm: PropTypes.func
}

export default MainPage

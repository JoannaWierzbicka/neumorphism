import React from 'react'
import { Container, Typography, CssBaseline, Box } from '@mui/material'
import { Button } from './styledComponents'
import PropTypes from 'prop-types'

export const MainPage = (props) => {
  const { startForm } = props
  return (
    <>
      <CssBaseline/>
      <Container
        maxWidth={'lg'}
        sx={{
          m: 4
        }}

      ><Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#E4EBF5',
          boxShadow: '.8rem .8rem 1.4rem #c8d0e7, -.2rem -.2rem 1.8rem white'
        }}
      >
        <Typography
          variant={'h4'}
          align={'center'}
          gutterBottom
        >
          Badanie oceny jakości usługi hotelarskiej.
        </Typography>
        <Typography
          variant={'overline'}
          sx={{
            padding: '2rem 6rem'
          }}
          gutterBottom
        >
          Dziękujemy za skorzystanie z naszych usług. Uprzejmie prosimy o wypełnienie krótkiej ankiety na temat satysfakcji z pobytu w naszym pensjonacie.
          Ankieta jest w pełni anonimowa i służy wyłącznie do analizy oraz ewentualnej poprawy jakości świadczonych usług.
          Z góry dziękujemy za udzielenie odpowiedzi!
        </Typography>
        <Button onClick={startForm}>START
        </Button>
       </Box>

      </Container>
    </>

  )
}

MainPage.propTypes = {
  startForm: PropTypes.func
}

export default MainPage

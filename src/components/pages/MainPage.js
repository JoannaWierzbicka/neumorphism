import React from 'react'
import { Typography } from '@mui/material'
import { Button } from '../styledComponents'
import PropTypes from 'prop-types'

export const MainPage = (props) => {
  const { startForm } = props
  return (
    <>
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
        Dziękujemy za skorzystanie z naszych usług. Uprzejmie prosimy o wypełnienie krótkiej ankiety na temat satysfakcji z pobytu w naszym hotelu.
        Ankieta jest w pełni anonimowa i służy wyłącznie do analizy oraz ewentualnej poprawy jakości świadczonych usług.
        Z góry dziękujemy za udzielenie odpowiedzi!
      </Typography>
      <Button onClick={startForm}>START
      </Button>

    </>

  )
}

MainPage.propTypes = {
  startForm: PropTypes.func
}

export default MainPage

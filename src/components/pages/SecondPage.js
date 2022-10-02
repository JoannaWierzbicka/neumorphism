import React from 'react'

import { Typography, Grid, Rating, Slider, Box } from '@mui/material'

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

import { StyledPaper } from '../styledComponents'

import HoverRating from '../HoverRating'

export const SecondPage = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Typography variant={'caption'}>ŹLE</Typography>
              <Rating max={8}/>
              <Typography variant={'caption'}>DOBRZE</Typography>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani pracowników obiektu?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Typography variant={'caption'}>ŹLE</Typography>
              <Rating max={8}/>
              <Typography variant={'caption'}>DOBRZE</Typography>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani otoczenie obiektu oraz jego zagospodarowanie?
            </Typography>
            <HoverRating/>
          </StyledPaper>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani wygląd oraz wyposażenie pokoi?
            </Typography>
            <HoverRating/>
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Czy poleci Pan/Pani obiekt znajomym?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Typography variant={'caption'}>NIE</Typography>
              <Slider sx={{ width: '200px' }}/>
              <Typography variant={'caption'}>TAK</Typography>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Ocena ogólna obiektu:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <SentimentVeryDissatisfiedIcon/>
              <Slider sx={{ width: '200px' }}/>
              <SentimentVerySatisfiedIcon/>
            </Box>

          </StyledPaper>
        </Grid>

      </Grid>
    </>
  )
}

export default SecondPage

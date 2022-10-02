/* eslint-disable react/jsx-no-undef */
import React from 'react'

import { Typography, Grid, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'

import { StyledPaper } from '../styledComponents'
import SliderChange from '../SliderChange'

export const ThirdPage = () => {
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
            >Płeć:
            </Typography>
            <FormControl>
              <RadioGroup
                row
              >
                <FormControlLabel
                  value={'female'}
                  control={<Radio />}
                  label={'Kobieta'}
                />
                <FormControlLabel
                  value={'male'}
                  control={<Radio />}
                  label={'Mężczyzna'}
                />
              </RadioGroup>
            </FormControl>
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
            >Wiek:
            </Typography>
            <SliderChange/>

          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            {/* <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani otoczenie obiektu oraz jego zagospodarowanie?
            </Typography>
            <HoverRating/> */}
          </StyledPaper>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            {/* <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani wygląd oraz wyposażenie pokoi?
            </Typography>
            <HoverRating/> */}
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            {/* <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Czy poleci Pan/Pani obiekt znajomym?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Typography variant={'caption'}>NIE</Typography>
              <Slider sx={{ width: '200px' }}/>
              <Typography variant={'caption'}>TAK</Typography>
            </Box> */}
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper>
            {/* <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Ocena ogólna obiektu:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <SentimentVeryDissatisfiedIcon/>
              <Slider sx={{ width: '200px' }}/>
              <SentimentVerySatisfiedIcon/>
            </Box> */}

          </StyledPaper>
        </Grid>

      </Grid>
    </>
  )
}

export default ThirdPage

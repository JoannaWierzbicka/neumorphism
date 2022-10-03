import React from 'react'
import { StyledAutocomplete } from '../styledComponents/StyledAutocomplete'
import { StyledPaper } from '../styledComponents/StyledPaper'

import { Typography, TextField, Grid, Rating, Box } from '@mui/material'

import HoverRating from '../helpers/HoverRating'

export const FirstPage = () => {
  return (
    <><Grid
      container
      display= {'flex'}
      flexWrap={'nowrap'}
      >
      <Grid
        container
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        display = {'flex'}
        flexDirection= {'column'}
        flexWrap= {'nowrap'}
      > <Grid
        item
        xs={12}
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
          xs={12}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/i otoczenie obiektu oraz jego zagospodarowanie?
            </Typography>
            <HoverRating/>
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/i czystość na ternie obiektu?
            </Typography>
            <HoverRating/>
          </StyledPaper>
        </Grid>

      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        display = {'flex'}
        flexDirection= {'column'}
        flexWrap= {'nowrap'}
      >

        <Grid
          item
          xs={12}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/i obsługę obiektu?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 2, mb: 1 }}>
              <Typography variant={'caption'}>BARDZO ŹLE</Typography>
              <Rating
                max={8}
              />
              <Typography variant={'caption'}>SUPER</Typography>
            </Box>
          </StyledPaper>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 2, mb: 1 }}>
              <Typography variant={'caption'}>BARDZO ŹLE</Typography>
              <Rating max={8}/>
              <Typography variant={'caption'}>SUPER</Typography>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <StyledPaper><Typography
            align={'left'}

            variant={'body1'}
            gutterBottom
                       >Z czego była/eś najbardziej zadowolony?
                       </Typography>
            <StyledAutocomplete
              id={'satisfaction'}
              blurOnSelect
              options={['Lokalizacja', 'Otoczenie obiektu', 'Wyposażenie pokoi', 'Miła obsługa', 'Inne']}
              renderInput={(params) => <TextField {...params}/>}
            />
          </StyledPaper>
        </Grid>

      </Grid>
      </Grid>
    </>
  )
}

export default FirstPage

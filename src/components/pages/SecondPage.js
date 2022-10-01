import React from 'react'

import { Typography, Grid, Rating } from '@mui/material'
import { StyledPaper } from '../styledComponents'

export const SecondPage = () => {
  const [value, setValue] = React.useState(0)
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
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
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
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
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
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
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
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
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
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
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
            >Jak ocenia Pan/Pani dojazd do obiektu?
            </Typography>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
          </StyledPaper>
        </Grid>

      </Grid>
    </>
  )
}

export default SecondPage

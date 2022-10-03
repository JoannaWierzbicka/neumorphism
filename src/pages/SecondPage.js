import React from 'react'

import { Typography, Grid, Checkbox, FormControlLabel, FormGroup, Slider, Box } from '@mui/material'
import { StyledPaper } from '../styledComponents/StyledPaper'

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

import { IconCheckbox, CheckedIcon } from '../styledComponents/StyledIcons'

export const SecondPage = () => {
  return (
    <>
      <Grid
        container
        display= {'flex'}
        flexWrap={'nowrap'}

      ><Grid
        container
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        display = {'flex'}
        flexDirection= {'column'}
        flexWrap= {'nowrap'}
      >
        <Grid
          item
          xs={12}
        >

          <StyledPaper><Typography
            align={'left'}
            variant={'body1'}
            gutterBottom
                       >Co jest dla Ciebie ważne przy wyborze noclegu w górach?
          </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon />}
                  />}
                label={'Odległość od szlaków'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Odległość od punków gastronomicznych'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Wyposażenie pokoi'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Cena za dobę'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Akceptowanie zwierząt'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Miejsce na ognisko'}
              />
            </FormGroup>
          </StyledPaper>
        </Grid>
      </Grid>
        <Grid
          container
          spacing={0}
          display = {'flex'}
          flexDirection= {'column'}
          flexWrap= {'nowrap'}
        ><Grid
          item
          xs={12}
        >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Jak ocenia Pan/i stosunek jakości do ceny?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Typography variant={'caption'}>CENA ZBYT WYSOKA</Typography>
              <Slider sx={{ width: '200px' }}/>
              <Typography variant={'caption'}>CENA ADEKWATNA</Typography>
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
              >Czy poleci Pan/Pani obiekt znajomym?
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Typography variant={'caption'}>ZDECYDOWANIE NIE</Typography>
                <Slider sx={{ width: '200px' }}/>
                <Typography variant={'caption'}>ZDECYDOWANIE TAK</Typography>
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

      </Grid>
    </>
  )
}

export default SecondPage

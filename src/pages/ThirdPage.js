/* eslint-disable react/jsx-no-undef */
import React from 'react'

import { Typography, Grid, FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material'

import { StyledPaper, IconCheckbox, CheckedIcon, StyledTextField } from '../components/styledComponents'
import SliderChange from '../helpers/SliderChange'

export const ThirdPage = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={0.5}
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
            >Skąd dowiedział/a się Pan/i o naszym obiekcie?
            </Typography>
            <FormControl sx={{ width: 300 }}>
              <RadioGroup sx={{ padding: '5px' }}>
                <FormControlLabel
                  value={'not-first-time'}
                  control={<Radio
                    sx={{ padding: '5px' }}
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
                  label={'Byłem/am już tu wcześniej'}
                />
                <FormControlLabel
                  value={'family'}
                  control={<Radio
                    sx={{ padding: '5px' }}
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
                  label={'Rodzina / Znajomi'}
                />
                <FormControlLabel
                  value={'media'}
                  control={<Radio
                    sx={{ padding: '5px' }}
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
                  label={'Media społecznościowe'}
                />
                <FormControlLabel
                  value={'www'}
                  control={<Radio
                    sx={{ padding: '5px' }}
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
                  label={'Strona internetowa obiektu'}
                />
                <FormControlLabel
                  value={'other'}
                  control={<Radio
                    sx={{ padding: '5px' }}
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
                  label={'Inne'}
                />
              </RadioGroup>
            </FormControl>

          </StyledPaper>
        </Grid><Grid
          item
          xs={6}
               >
          <StyledPaper>
            <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
            >Miejsce na dodatkowe uwagi:
            </Typography>
            <StyledTextField
              id={'outlined-multiline-static'}
              multiline
              rows={6}
            />
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
            >Czy łatwo było znaleźć ofertę naszego obiektu (reklamy w internecie itp.)? (0 oznacza dużą trudność)
            </Typography>
            <SliderChange/>

          </StyledPaper>
        </Grid>

      </Grid>
    </>
  )
}

export default ThirdPage

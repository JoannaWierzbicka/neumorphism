/* eslint-disable react/jsx-no-undef */
import React from 'react'

import { Typography, Grid, FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material'

import { StyledPaper, IconCheckbox, CheckedIcon, StyledTextField } from '../styledComponents'
import SliderChange from '../SliderChange'

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
            >Płeć:
            </Typography>
            <FormControl sx={{ width: 300 }}>
              <RadioGroup
                row
              >
                <FormControlLabel
                  value={'female'}
                  control={<Radio
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
                  label={'Kobieta'}
                />
                <FormControlLabel
                  value={'male'}
                  control={<Radio
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon/>}
                           />}
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
            >Czy ma Pan/i dodatkowe uwagi, co możemy poprawić/zmienić?
            </Typography>
            <StyledTextField
              id="outlined-multiline-static"
              multiline
              rows={6}
            />
          </StyledPaper>
        </Grid>
      </Grid>
    </>
  )
}

export default ThirdPage

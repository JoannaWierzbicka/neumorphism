import React from 'react'

import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
import { StyledAutocomplete, IconCheckbox, CheckedIcon, StyledPaper } from '../styledComponents'

export const FirstPage = () => {
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
          <StyledPaper><Typography
            align={'left'}

            variant={'body1'}
            gutterBottom
                       >Proszę określić rodzaj pobytu:
                       </Typography>
            <StyledAutocomplete
              blurOnSelect
              options={['prywatny', 'służbowy']}
              renderInput={(params) => <TextField {...params}/>}
            />
          </StyledPaper>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <StyledPaper><Typography
            align={'left'}
            variant={'body1'}
            gutterBottom
                       >Jak długo trwał pobyt?
                       </Typography>
            <StyledAutocomplete
              blurOnSelect
              options={['1 doba', '2 doby', '3 doby', '4 doby', '5 lub więcej']}
              renderInput={(params) => <TextField {...params}/>}
            />
          </StyledPaper>
        </Grid>
        <Grid
          container
          item
          xs={6}
        >
          <Grid
            item
            xs={12}
          >
            <StyledPaper> <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
                          >Ile osób korzystało z noclegu?
                          </Typography>
              <StyledAutocomplete
                blurOnSelect
                options={[1, 2, 3, 4, '5 lub więcej']}
                renderInput={(params) => <TextField {...params}/>}
              />
            </StyledPaper>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <StyledPaper> <Typography
              align={'left'}
              variant={'body1'}
              gutterBottom
                          >Czy korzystali Państwo z wyżywienia?
                          </Typography>
              <StyledAutocomplete
                blurOnSelect
                options={['Tak - śniadanie i obiadokolacja', 'Tak - tylko śniadanie', 'Nie']}
                renderInput={(params) => <TextField {...params}/>}
              />
            </StyledPaper>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <StyledPaper><Typography
            align={'left'}
            variant={'body1'}
            gutterBottom
                       >Z których atrakcji Państwo korzystali?
                       </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<IconCheckbox/>}
                    checkedIcon={<CheckedIcon />}
                  />}
                label={'Restauracja'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Basen'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Wypożyczalnia rowerów'}
              />
              <FormControlLabel
                control={<Checkbox
                  icon={<IconCheckbox/>}
                  checkedIcon={<CheckedIcon />}
                         />}
                label={'Plac zabaw dla dzieci'}
              />
            </FormGroup>
          </StyledPaper>
        </Grid>

      </Grid>
    </>
  )
}

export default FirstPage

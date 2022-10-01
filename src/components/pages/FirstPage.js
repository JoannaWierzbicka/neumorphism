import React from 'react'

import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, Paper, Grid } from '@mui/material'
import { StyledAutocomplete } from '../styledComponents'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(() => ({
  backgroundColor: '#e2e9f3',
  margin: '1em',
  padding: '0.25em',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: ' 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #c8d0e7'

}))

export const FirstPage = () => {
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
          <Item><Typography
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
          </Item>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Item><Typography
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
          </Item>
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
            <Item> <Typography
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
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Item> <Typography
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
            </Item>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <Item><Typography
            align={'left'}
            variant={'body1'}
            gutterBottom
                >Z których atrakcji Państwo korzystali?
                </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={'Restauracja'}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={'Basen'}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={'Wypożyczalnia rowerów'}
              />
              <FormControlLabel
                control={<Checkbox/>}
                label={'Plac zabaw dla dzieci'}
              />
            </FormGroup>
          </Item>
        </Grid>

      </Grid>
    </>
  )
}

export default FirstPage

import React from 'react'

import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, Paper, Grid } from '@mui/material'
import { StyledAutocomplete, Button } from '../styledComponents'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  margin: '2em',
  padding: '1em',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '.8rem .8rem 1.4rem #c8d0e7, -.2rem -.2rem 1.8rem white'

}))

const Check = styled(Checkbox)(() => ({
  '& .MuiButtonBase-root': {
    boxShadow: 'inset 10px 12px 30px #cdd5e1, inset -10px -12px 130px #ffffff'
  }
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

            variant={'h5'}
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
            variant={'h5'}
            gutterBottom
                >Jak długo trwał pobyt?
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
          xs={6}
        >
          <Item> <Typography
            align={'left'}
            variant={'h5'}
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
          xs={6}
        >
          <Item><Typography
            align={'left'}
            variant={'h5'}
            gutterBottom
                >Z których atrakcji Państwo korzystali?
          </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Check/>}
                label={'Parking'}
              />
              <FormControlLabel
                control={<Check />}
                label={'Restauracja'}
              />
              <FormControlLabel
                control={<Check />}
                label={'Basen'}
              />
              <FormControlLabel
                control={<Check />}
                label={'Wypożyczalnia rowerów'}
              />
              <FormControlLabel
                control={<Check/>}
                label={'Plac zabaw dla dzieci'}
              />
            </FormGroup>
          </Item>
        </Grid>
        <Button>NEXT</Button>

      </Grid>
    </>
  )
}

export default FirstPage

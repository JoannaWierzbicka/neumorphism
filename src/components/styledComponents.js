import styled from 'styled-components'

import { styled as styledMui } from '@mui/material/styles'
import { Autocomplete, Box, Paper } from '@mui/material'

const StyledButton = styled.button`
padding: 1rem 2rem;
background: #efefef;
border: none;
border-radius: .5rem;
color: #444;
font-size: 1rem;
font-weight: 500;
letter-spacing: .1rem;
text-align: center;
outline: none;
cursor: pointer;
transition: .2s ease-in-out;
box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
            -6px -6px 10px rgba(255, 255, 255, .5),
            6px 6px 8px rgba(255, 255, 255, .075),
            6px 6px 10px rgba(0, 0, 0, .15);
&:hover{
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}
&:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}

`
const StyledBox = styledMui(Box)(() => ({
  height: '80vh',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '.8rem .8rem 1.4rem #c8d0e7, -.2rem -.2rem 1.8rem white',
  borderRadius: '10px',
  backgroundColor: '#E4EBF5',
  boxSizing: 'border-box'

}))

const StyledAutocomplete = styledMui(Autocomplete)(() => ({
  width: '250px',
  borderRadius: '20px',
  boxShadow: 'inset 10px 12px 30px #cdd5e1, inset -10px -12px 130px #ffffff',
  '& .MuiInputBase-root': {
    borderRadius: '20px',
    padding: '4px'
  }
}))

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: '#e2e9f3',
  margin: '1em',
  padding: '0.25em',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: ' 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #c8d0e7'

}))

const Icon = styled('span')(() => ({
  borderRadius: '10px',
  margin: '6px',
  width: 18,
  height: 18,
  backgroundColor: '#E0E5EC',
  cursor: 'pointer',
  border: 'none',
  boxShadow: 'inset 0px 0px 1px rgb(148 148 148 / 78%), inset 4px 4px 2px rgb(41 60 73 / 30%)',
  transition: '0.5s',
  'input:hover ~ &': {
    backgroundColor: '#1976D2'
  }
}))

const CheckedIcon = styled(Icon)({
  backgroundColor: '#079992',
  'input:hover ~ &': {
    backgroundColor: '#38ada9'
  }
})

export { StyledButton, StyledBox, StyledAutocomplete, Icon, CheckedIcon, StyledPaper }

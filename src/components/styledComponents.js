import styled from 'styled-components'

import { styled as styledMui } from '@mui/material/styles'
import { Autocomplete } from '@mui/material'

const Button = styled.button`
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
const Box = styled.div`
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #E4EBF5;
        box-shadow: .8rem .8rem 1.4rem #c8d0e7, -.2rem -.2rem 1.8rem white;
        border-radius: 10px;
`

const StyledAutocomplete = styledMui(Autocomplete)(() => ({
  width: '300px',
  borderRadius: '30px',
  boxShadow: 'inset 10px 12px 30px #cdd5e1, inset -10px -12px 130px #ffffff',
  '& .MuiInputBase-root': {
    borderRadius: '30px'
  }
}))

export { Button, Box, StyledAutocomplete }

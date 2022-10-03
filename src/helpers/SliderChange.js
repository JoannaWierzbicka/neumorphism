import React from 'react'
import { Box, Slider } from '@mui/material'
import { StyledInput } from '../components/styledComponents'

export default function InputSlider () {
  const [value, setValue] = React.useState(1)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 100) {
      setValue(100)
    }
  }

  return (
    <>
      <Box sx={{ width: 500, display: 'flex', justifyContent: 'center', ml: 2 }}>
        <Slider
          sx={{ width: '100%' }}
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby={'input-slider'}
        />
        <StyledInput
          readOnly
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 1,
            max: 100,
            'aria-labelledby': 'input-slider'
          }}
        />
      </Box>
    </>
  )
}

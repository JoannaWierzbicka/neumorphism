import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledRating } from '../styledComponents/StyledRating'

const labels = {
  1: 'BARDZO ŹLE',
  2: 'ŹLE',
  3: 'SŁABO',
  4: 'TAK SOBIE',
  5: 'NIEŹLE',
  6: 'W PORZĄDKU',
  7: 'DOBRZE',
  8: 'BARDZO DOBRZE'
}

function getLabelText (value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

export default function HoverRating () {
  const [value, setValue] = React.useState(0)
  const [hover, setHover] = React.useState(-1)

  return (
    <Box
      sx={{
        width: 320,
        ml: 5,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <StyledRating
        max={8}
        value={value}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
        icon={<FavoriteIcon/>}
        emptyIcon={<FavoriteBorderIcon/>}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}><Typography variant={'caption'}>{labels[hover !== -1 ? hover : value]}</Typography></Box>
      )}
    </Box>
  )
}

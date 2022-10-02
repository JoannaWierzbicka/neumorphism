import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledRating } from './styledComponents'

const labels = {
  1: 'BARDZO ŹLE',
  2: 'ŹLE',
  3: 'OK',
  4: 'DOBRZE',
  5: 'SUPER'
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
        width: 250,
        ml: 10,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <StyledRating
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

import styled from 'styled-components'
import { Rating } from '@mui/material'

export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75'
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47'
  }
})

export default StyledRating

import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledPaper = styled(Paper)(() => ({
  backgroundColor: '#e2e9f3',
  margin: '1em',
  padding: '0.25em',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: ' 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #c8d0e7'

}))

export default StyledPaper

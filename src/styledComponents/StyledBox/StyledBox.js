import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledBox = styled(Box)(() => ({
  height: '85vh',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '.8rem .8rem 1.4rem #c8d0e7, -.2rem -.2rem 1.8rem white',
  borderRadius: '10px',
  backgroundColor: '#E4EBF5',
  boxSizing: 'border-box'

}))
export default StyledBox

import { Autocomplete } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledAutocomplete = styled(Autocomplete)(() => ({
  width: '250px',
  borderRadius: '20px',
  boxShadow: 'inset 10px 12px 30px #cdd5e1, inset -10px -12px 130px #ffffff',
  '& .MuiInputBase-root': {
    borderRadius: '20px',
    padding: '4px'
  }
}))

export default StyledAutocomplete

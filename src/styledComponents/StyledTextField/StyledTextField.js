import styled from 'styled-components'

import { TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(() => ({
  width: '80%',
  boxShadow: 'inset 1px 1px 4px rgb(148 148 148 / 78%), inset 5px 5px 16px rgb(41 60 73 / 30%);',
  marginBottom: '10px',
  borderRadius: '5px'
}))

export default { StyledTextField }

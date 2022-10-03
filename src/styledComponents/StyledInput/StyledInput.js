import styled from 'styled-components'
import { Input } from '@mui/material'

export const StyledInput = styled(Input)(() => ({
  width: '30px',
  marginLeft: '30px',
  boxShadow: '0px 0px 1px rgb(148 148 148 / 78%), 4px 4px 2px rgb(41 60 73 / 30%)',
  borderRadius: '5px'
}))

export default StyledInput

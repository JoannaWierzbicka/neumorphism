import styled from 'styled-components'

export const IconCheckbox = styled('span')(() => ({
  borderRadius: '10px',
  margin: '6px',
  width: 18,
  height: 18,
  backgroundColor: '#E0E5EC',
  cursor: 'pointer',
  border: 'none',
  boxShadow: 'inset 0px 0px 1px rgb(148 148 148 / 78%), inset 4px 4px 2px rgb(41 60 73 / 30%)',
  transition: '0.5s',
  'input:hover ~ &': {
    backgroundColor: '#1976D2'
  }
}))

export const CheckedIcon = styled(IconCheckbox)({
  backgroundColor: '#079992',
  'input:hover ~ &': {
    backgroundColor: '#38ada9'
  }
})

export default { IconCheckbox, CheckedIcon }

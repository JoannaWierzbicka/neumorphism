import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const StyledRating = styled(Rating)(() => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '#A8ADB4'
  }
}))

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color={'error'} />,
    label: 'Very Dissatisfied'
  },
  2: {
    icon: <SentimentDissatisfiedIcon color={'warning'} />,
    label: 'Dissatisfied'
  },
  3: {
    icon: <SentimentSatisfiedIcon color={'secondary'} />,
    label: 'Neutral'
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color={'primary'} />,
    label: 'Satisfied'
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color={'success'} />,
    label: 'Very Satisfied'
  }
}

function IconContainer (props) {
  const { value, ...other } = props
  return <span {...other}>{customIcons[value].icon}</span>
}

export function SentimentRating () {
  return (
    <StyledRating
      sx={{ padding: '12px' }}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  )
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
}

export default SentimentRating

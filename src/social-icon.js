import PropTypes from 'prop-types'
import React from 'react'

import Background from './background.js'
import Icon from './icon.js'
import Mask from './mask.js'
import { keyFor } from './networks.js'

function getNetworkKey(props) {
  return props.network || keyFor(props.url)
}

function SocialIcon(props) {
  const { url, network, bgColor, fgColor, className } = props
  const networkKey = getNetworkKey({ url, network })

  return (
    <svg className={`social-svg ${className}`} style={{ borderRadius: '50%' }} viewBox="0 0 64 64">
      <Background />
      <Icon networkKey={networkKey} fgColor={fgColor} />
      <Mask networkKey={networkKey} bgColor={bgColor} />
    </svg>
  )
}

SocialIcon.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  label: PropTypes.string,
  network: PropTypes.string,
  url: PropTypes.string
}

export default SocialIcon

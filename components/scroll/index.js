import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const baseClass = 'da-Scroll'

export const Scroll = ({anchor = ''}) => {
  return (
    <a className={baseClass} href={anchor}>
      <span />
      <span />
      <span />
    </a>
  )
}

Scroll.propTypes = {
  anchor: PropTypes.string
}

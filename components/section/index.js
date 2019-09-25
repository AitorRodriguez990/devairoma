import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const baseClass = 'da-Section'

export const Section = ({children, isOdd = false, title = ''}) => {
  return (
    <div className={`${baseClass} ${isOdd ? `${baseClass}--odd` : ''}`}>
      <div className={`${baseClass}-content`}>
        <h2 className={`${baseClass}-title`}>{title}</h2>
        {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.any,
  isOdd: PropTypes.bool,
  title: PropTypes.string
}

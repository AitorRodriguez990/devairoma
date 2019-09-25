import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const baseClass = 'da-Section'

export const Section = ({
  children,
  className = '',
  isOdd = false,
  title = ''
}) => {
  return (
    <div
      className={`${baseClass} ${
        isOdd ? `${baseClass}--odd` : ''
      } ${className}`}
    >
      <div className={`${baseClass}-content`}>
        <h2 className={`${baseClass}-title`}>{title}</h2>
        {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isOdd: PropTypes.bool,
  title: PropTypes.string
}

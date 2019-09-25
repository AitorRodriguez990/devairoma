import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const baseClass = 'da-Section'

export const Section = ({content = [], isOdd = false, title = ''}) => {
  return (
    <div className={`${baseClass} ${isOdd ? `${baseClass}--odd` : ''}`}>
      <div className={`${baseClass}-content`}>
        <h2 className={`${baseClass}-title`}>{title}</h2>
        {content.map(con => (
          <p
            className={`${baseClass}-info`}
            dangerouslySetInnerHTML={{__html: con}}
          />
        ))}
      </div>
    </div>
  )
}

Section.propTypes = {
  content: PropTypes.array,
  isOdd: PropTypes.bool,
  title: PropTypes.string
}

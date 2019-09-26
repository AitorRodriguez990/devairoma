import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const baseClass = 'da-Resource'

export const Resource = ({link, source = '', tags = [], title}) => (
  <div className={baseClass}>
    <div className={`${baseClass}-item`}>
      <a href={link} target="_blank">
        <div className={`${baseClass}-content`}>
          <h3 className={`${baseClass}-contentTitle`}>{title}</h3>
          <p className={`${baseClass}-contentSource`}>{source}</p>
        </div>
        <ul className={`${baseClass}-tags`}>
          {tags.map(tag => (
            <li className={`${baseClass}-tagsItem`}>{tag}</li>
          ))}
        </ul>
        <img
          className={`${baseClass}-externalLink`}
          src="./static/icon-external-link.png"
          alt="Link externo"
          width="15"
        />
      </a>
    </div>
  </div>
)

Resource.propTypes = {
  link: PropTypes.string.isRequired,
  source: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired
}

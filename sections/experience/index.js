import React from 'react'
import PropTypes from 'prop-types'

import {Section} from '../../components/section'

import experiences from './data'
import './index.scss'

const baseClass = 'da-Experience'

export const Experience = ({id = ''}) => (
  <Section className={baseClass} title="Experiencia 👨‍💻" id={id}>
    <ul className={`${baseClass}-list`}>
      {experiences.map(({role, company, logo, date, description, techs}) => {
        const itemClass = `${baseClass}-listItem`

        return (
          <li className={itemClass}>
            <div className={`${itemClass}Image`}>
              <img src={logo} alt={company} />
            </div>
            <div className={`${itemClass}Content`}>
              <div className={`${itemClass}Title`}>
                {role}
                <span className={`${itemClass}Company`}>{company}</span>
              </div>
              <div className={`${itemClass}Date`}>{date}</div>
              <div className={`${itemClass}Description`}>{description}</div>
              <ul className={`${itemClass}Tech`}>
                {techs.map(tech => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  </Section>
)

Experience.propTypes = {
  id: PropTypes.string
}

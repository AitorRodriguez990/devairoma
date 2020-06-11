import React from 'react'
import PropTypes from 'prop-types'

import {Section} from '../../components/section'

import projects from './data'
import './index.scss'

const baseClass = 'da-Projects'

export const Projects = ({id = ''}) => (
  <Section className={baseClass} isOdd title="Proyectos 🚀" id={id}>
    <ul className={`${baseClass}-list`}>
      {projects.map(({role, company, logo, date, description, techs}) => {
        const itemClass = `${baseClass}-listItem`

        return (
          <li className={itemClass} key={company}>
            <div className={`${itemClass}Image`}>
              {logo && <img src={logo} alt={company} />}
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
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  </Section>
)

Projects.propTypes = {
  id: PropTypes.string
}

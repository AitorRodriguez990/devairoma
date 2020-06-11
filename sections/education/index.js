import React from 'react'
import PropTypes from 'prop-types'

import {Section} from '../../components/section'

import educations from './data'
import './index.scss'

const baseClass = 'da-Education'

export const Education = ({id = ''}) => (
  <Section className={baseClass} title="Educación 👨‍🏫" id={id}>
    <ul className={`${baseClass}-list`}>
      {educations.map(
        ({name, center, logo, date, certificateId, certificate}) => {
          const itemClass = `${baseClass}-listItem`

          return (
            <li className={itemClass} key={name}>
              <div className={`${itemClass}Image`}>
                {logo && <img src={logo} alt={center} />}
              </div>
              <div className={`${itemClass}Content`}>
                <div className={`${itemClass}Title`}>
                  {name}
                  <span className={`${itemClass}Center`}>{center}</span>
                </div>
                <div className={`${itemClass}Date`}>{date}</div>
                {certificateId && certificate && (
                  <div className={`${itemClass}Certificate`}>
                    ID del certificado:{' '}
                    <span className={`${itemClass}CertificateId`}>
                      {certificateId}
                    </span>{' '}
                    |{' '}
                    <a
                      href={certificate}
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      Ver certificado
                    </a>{' '}
                    <img
                      src="./static/icon-external-link.png"
                      alt="Link externo"
                      width="15"
                    />
                  </div>
                )}
              </div>
            </li>
          )
        }
      )}
    </ul>
  </Section>
)

Education.propTypes = {
  id: PropTypes.string
}

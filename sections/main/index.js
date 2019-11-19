import React from 'react'
import PropTypes from 'prop-types'

import {Section} from '../../components/section'
import {Scroll} from '../../components/scroll'

import './index.scss'

const baseClass = 'da-Main'

export const Main = ({id = ''}) => (
  <Section className={baseClass} id={id}>
    <div className={`${baseClass}-hero`}>
      <img
        className={`${baseClass}-avatar`}
        src="./static/devairoma.jpg"
        alt="Aitor Rodríguez"
        width="200"
      />
      <div className={`${baseClass}-welcome`}>
        <h1 className={`${baseClass}-title`}>¡Hola! 👋</h1>
        <p className={`${baseClass}-subtitle`}>
          Mi nombre es Aitor Rodríguez y vivo en Barcelona. Soy 👨‍💻{' '}
          <strong>Frontend Engineer</strong> en{' '}
          <a
            className={`${baseClass}-link ${baseClass}-link--fotocasa`}
            href="https://www.fotocasa.es"
            target="_blank"
          >
            Fotocasa
          </a>{' '}
          y 👮 Cofundador y Administrador de{' '}
          <a
            className={`${baseClass}-link ${baseClass}-link--mtberos`}
            href="https://www.mtberos.com"
            target="_blank"
          >
            MTBeros
          </a>
          .
        </p>
      </div>
    </div>
    <Scroll anchor="#about-me" />
  </Section>
)

Main.propTypes = {
  id: PropTypes.string
}

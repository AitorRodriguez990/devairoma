import React from 'react'
import PropTypes from 'prop-types'

import {Section} from '../../components/section'

import './index.scss'

const baseClass = 'da-Experience'

export const Experience = ({id = ''}) => (
  <Section className={baseClass} title="Experiencia 👨‍💻" id={id}>
    <ul className={`${baseClass}-list`}>
      <li className={`${baseClass}-listItem`}>
        <div className={`${baseClass}-listItemImage`}>
          <img src="./static/adevinta.jpeg" alt="Adevinta" />
        </div>
        <div className={`${baseClass}-listItemContent`}>
          <div className={`${baseClass}-listItemTitle`}>
            Frontend Engineer
            <span className={`${baseClass}-listItemCompany`}>Adevinta</span>
          </div>
          <div className={`${baseClass}-listItemDate`}>
            Noviembre 2018 - Actualidad
          </div>
          <div className={`${baseClass}-listItemDescription`}>
            Frontend Engineer del portal inmobiliario Fotocasa. Trabajando en la
            mejora e iteración del producto por componentes a través de una
            metodología de trabajo Kanban.
          </div>
          <ul className={`${baseClass}-listItemTech`}>
            <li>React</li>
            <li>SASS</li>
            <li>Jenkins</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </li>
      <li className={`${baseClass}-listItem`}>
        <div className={`${baseClass}-listItemImage`}>
          <img src="./static/mtberos.jpg" alt="Adevinta" />
        </div>
        <div className={`${baseClass}-listItemContent`}>
          <div className={`${baseClass}-listItemTitle`}>
            Cofundador y Administrador
            <span className={`${baseClass}-listItemCompany`}>MTBeros</span>
          </div>
          <div className={`${baseClass}-listItemDate`}>
            Mayo 2014 - Actualidad
          </div>
          <div className={`${baseClass}-listItemDescription`}>
            Cofundador y encargado de la Gestión y Administración de MTBeros, un
            foro dedicado al ciclismo, especialmente de montaña, donde compartir
            conocimientos, experiencias y buscar nuevos compañeros de ruta.
          </div>
        </div>
      </li>
    </ul>
  </Section>
)

Experience.propTypes = {
  id: PropTypes.string
}

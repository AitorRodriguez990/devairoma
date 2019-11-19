import React from 'react'
import './index.scss'

const baseClass = 'da-Nav'

export const Nav = () => {
  return (
    <div className={baseClass}>
      <div />
      <ul className={`${baseClass}-menu`}>
        <li className={`${baseClass}-menuItem`}>
          <a href="#main">Inicio</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#about-me">Sobre mí</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#experience">Experiencia</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#resources">Recursos</a>
        </li>
      </ul>
    </div>
  )
}

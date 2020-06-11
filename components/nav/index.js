import React from 'react'
import './index.scss'

const baseClass = 'da-Nav'

export const Nav = () => {
  return (
    <div className={baseClass}>
      <ul className={`${baseClass}-menu`}>
        <li className={`${baseClass}-menuItem`}>
          <a href="#about-me">Sobre mí</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#experience">Experiencia</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#projects">Proyectos</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#education">Formación</a>
        </li>
        <li className={`${baseClass}-menuItem`}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  )
}

import React from 'react'
import {Section} from '../../components/section'
import './index.scss'

const baseClass = 'da-AboutMe'

export const AboutMe = () => (
  <Section className={baseClass} isOdd title="Sobre mí 👤">
    <p>
      <strong>Soy padre</strong> de un pequeño bicho 👶, <strong>marido</strong>{' '}
      de una compañera maravillosa 💍,{' '}
      <strong>
        y una persona muy activa e inquieta al que le encanta disfrutar de su
        tiempo
      </strong>{' '}
      a través de las salidas al aire libre ⛰️, los viajes ✈️, las películas y
      las series 📹 y la lectura 📚.
    </p>
    <p>
      En lo laboral soy un <strong>apasionado del desarrollo web</strong> con
      ganas de aprender y mejorar continuamente, y enfoco mi aprendizaje hacia
      el desarrollo <strong>Frontend</strong> a través de React ⚛️, Javascript
      🎮 y CSS 🎨. Además,{' '}
      <strong>me encanta trabajar en equipo y ayudar a mis compañeros</strong>{' '}
      en todo lo que me sea posible.
    </p>
    <p>
      Aplico metodología{' '}
      <a href="https://gettingthingsdone.com/" target="_blank">
        GTD
      </a>{' '}
      en mi día a día, para vivir y trabajar de la manera más organizada y
      relajada posible.
    </p>
  </Section>
)

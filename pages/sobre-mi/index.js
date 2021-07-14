import React from 'react'
import {HeadMeta} from '../../components/headMeta'
import {Header} from '../../components/header'
import {Footer} from '../../components/footer'

import styles from './index.module.scss'

const About = () => (
  <div>
    <HeadMeta section="Sobre mí" />

    <div className="page">
      <Header />

      <div className="container">
        <h1 className="title">Sobre mí</h1>

        <div className={styles.about}>
          <h2 className="subtitle">👪 La familia es lo primero</h2>
          <p>
            Siempre, siempre y siempre la prioridad será mi familia.
          </p>
          <p>
            Soy padre de un pequeño bicho de casi 3 años de edad, marido de una compañera maravillosa, y esclavo de un gato y un perro.
          </p>
          <h2 className="subtitle">🏅 La vida no sin deporte</h2>
          <p>En construcción.</p>
          <h2 className="subtitle">📚 Esas aficiones enriquecedoras</h2>
          <p>En construcción.</p>
          <h2 className="subtitle">🌍 Vooolaaaré</h2>
          <p>En construcción.</p>
          <h2 className="subtitle">🕺 Soft skills</h2>
          <p>En construcción.</p>
          <h2 className="subtitle">👨‍💻 Hard skills</h2>
          <p>En construcción.</p>
        </div>
      </div>

      <Footer />
    </div>
  </div>
)

export default About

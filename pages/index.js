import React from 'react'
import {HeadMeta} from '../components/headMeta'
import {Footer} from '../components/footer'

import styles from './index.module.scss'

const Home = () => (
  <div>
    <HeadMeta />

    <div className="page">
      <div className="container">
        <div className={styles.home}>
          <div className={styles.avatar}>
            <img
              className={styles.image}
              src="./static/devairoma.jpg"
              alt="Aitor Rodríguez"
              width="150"
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.wave}>👋 ¡Hola!</h1>
            <p className={styles.text}>
              Mi nombre es Aitor Rodríguez. Soy{' '}
              <strong>Frontend Engineer</strong> en{' '}
              <a
                href="https://adevinta.es/"
                target="_blank"
                rel="nofollow noopener"
              >
                Adevinta Spain
              </a>{' '}
              de profesión, y <strong>fundador y administrador</strong> de{' '}
              <a
                href="https://www.mtberos.com/"
                target="_blank"
                rel="nofollow noopener"
              >
                MTBeros
              </a>{' '}
              como hobbie.
            </p>
            <p className={styles.text}>¿Quieres conocerme un poco más?</p>
            <ul className={styles.list}>
              <li className={styles.element}>
                <span className={styles.dot}>👪</span> Soy padre de un pequeño
                bicho, marido de una compañera maravillosa.
              </li>
              <li className={styles.element}>
                <span className={styles.dot}>🏅</span> Practico ciclismo y
                running en solitario, y actividades al aire ibre en familia.
              </li>
              <li className={styles.element}>
                <span className={styles.dot}>📚</span> Leo a menudo, aunque
                también veo series en pareja y películas en muy raras ocasiones.
              </li>
              <li className={styles.element}>
                <span className={styles.dot}>🌍</span> Me gusta viajar, aunque
                no lo hago todo lo que querría.
              </li>
              <li className={styles.element}>
                <span className={styles.dot}>🤪</span> Soy muy activo y mi
                cabeza está siempre dando vueltas a ver qué nueva idea se le
                ocurre.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
)

export default Home

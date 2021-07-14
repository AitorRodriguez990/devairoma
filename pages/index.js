import React from 'react'
import Image from 'next/image'
import {HeadMeta} from '../components/headMeta'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

import styles from './index.module.scss'

const Home = () => (
  <div>
    <HeadMeta /> 

    <div className="page">    
      <div className="container">
        <div className={styles.home}>
          <div className={styles.avatar}>
            <Image
              className={styles.image}
              src="/devairoma.jpg"
              alt="Aitor Rodríguez"
              layout="fixed"
              height="150"
              width="150"
            />
          </div>
          <h1 className="title">👋 ¡Hola, mi nombre es Aitor Rodríguez!</h1>
          <p className={styles.text}>
            Soy{' '}
            <strong>Frontend Engineer</strong> en{' '}
            <a
              href="https://adevinta.es/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Adevinta Spain
            </a>{' '}
            de profesión, y <strong>fundador y administrador</strong> de{' '}
            <a
              href="https://www.mtberos.com/"
              target="_blank"
              rel="noreferrer nofollow noopener"
            >
              MTBeros
            </a>{' '}
            como hobbie.
          </p>
          <ul className={styles.list}>
            <li className={styles.element}>
              <span className={styles.dot}>👪</span> Padre de un pequeño
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

      <Footer />
    </div>
  </div>
)

export default Home

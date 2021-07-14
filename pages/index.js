import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeadMeta from '../components/headMeta'

import styles from './index.module.scss'

const Home = () => (
  <>
    <HeadMeta /> 

    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <Image
            className={styles.image}
            src="/devairoma.jpg"
            alt="Aitor Rodríguez"
            layout="fixed"
            height="130"
            width="130"
          />
        </div>
        <h1 className="title">👋 ¡Hola!</h1>
      </div>
      
      <p className={styles.text}>
        Mi nombre es Aitor Rodríguez. Soy{' '}
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
      <p className={styles.text}>
        Si te pica la curiosidad por saber algunas cosas más <Link href="sobre-mi">sobre mí</Link>, te dejo un resumen muy resumido:
      </p>
      <ul className={styles.list}>
        <li className={styles.element}>
          <span className={styles.dot}>👪</span> <span><strong>Padre</strong> de un pequeño
          bicho, marido de una compañera maravillosa.</span>
        </li>
        <li className={styles.element}>
          <span className={styles.dot}>🏅</span> <span>Practico <strong>ciclismo y <em>running</em></strong> en solitario, y actividades al aire ibre en familia.</span>
        </li>
        <li className={styles.element}>
          <span className={styles.dot}>📚</span> <span><strong>Leo a menudo</strong>, aunque
          también <strong>veo series en pareja</strong> y películas en muy raras ocasiones.</span>
        </li>
        <li className={styles.element}>
          <span className={styles.dot}>🌍</span> <span><strong>Me gusta viajar</strong>, aunque
          no lo hago todo lo que querría.</span>
        </li>
        <li className={styles.element}>
          <span className={styles.dot}>🤪</span> <span>Soy <strong>muy activo</strong> y mi
          cabeza está siempre dando vueltas a ver qué nueva idea se le
          ocurre.</span>
        </li>
      </ul>
    </div>
  </>
)

export default Home

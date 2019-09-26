import React from 'react'
import Head from 'next/head'

import '../styles/styles.scss'
import {AboutMe} from '../sections/aboutMe'
import {Footer} from '../components/footer'

const Home = () => (
  <div>
    <Head>
      <title>Aitor Rodríguez | Frontend Developer</title>
      <meta
        name="description"
        content="Mi nombre es Aitor Rodríguez y soy 👨‍💻 Frontend Engineer en Fotocasa y 👮 Co-Fundador y Administrador de MTBeros."
      />
      <meta name="author" content="Aitor Rodríguez" />
      <meta httpEquiv="Content-Language" content="es" />
      <link rel="icon" href="./static/favicon.png" />
    </Head>

    <div className="container">
      <div className="hero">
        <img
          className="avatar"
          src="./static/devairoma.jpg"
          alt="Aitor Rodríguez"
          width="200"
        />
        <div className="welcome">
          <h1 className="title">¡Hola! 👋</h1>
          <p className="subtitle">
            Mi nombre es Aitor Rodríguez. Soy 👨‍💻{' '}
            <strong>Frontend Engineer</strong> en{' '}
            <a
              className="fotocasa"
              href="https://www.fotocasa.es"
              target="_blank"
            >
              Fotocasa
            </a>{' '}
            y 👮 Co-Fundador y Administrador de{' '}
            <a href="https://www.mtberos.com" target="_blank">
              MTBeros
            </a>
            .
          </p>
        </div>
      </div>
    </div>

    <AboutMe />

    <Footer />

    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        min-height: -webkit-fill-available;
        min-height: 100vh;
      }

      .hero {
        align-items: center;
        margin: auto;
        max-width: 820px;
        padding: 0 15px;
        text-align: center;
      }
      @media (min-width: 768px) {
        .hero {
          display: flex;
          text-align: left;
        }
      }

      .avatar {
        border: 10px solid #fff;
        border-radius: 30px;
        flex: 0 0 150px;
        margin-bottom: 20px;
        width: 150px;
      }
      @media (min-width: 768px) {
        .avatar {
          flex-basis: 200px;
          margin-bottom: 0;
          margin-right: 20px;
          width: 200px;
        }
      }

      .title {
        font-size: 32px;
        line-height: 1.15;
        margin: 0;
      }
      .title--section {
        font-size: 24px;
      }
      @media (min-width: 768px) {
        .title {
          font-size: 48px;
        }
        .title--section {
          font-size: 36px;
        }
      }

      .subtitle {
        font-size: 20px;
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 0;
        margin-top: 15px;
      }
      @media (min-width: 768px) {
        .subtitle {
          font-size: 28px;
        }
      }
    `}</style>
  </div>
)

export default Home

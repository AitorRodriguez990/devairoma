import React from 'react'
import Head from 'next/head'

import '../styles/styles.scss'
import {Nav} from '../components/nav'
import {Main} from '../sections/main'
import {AboutMe} from '../sections/aboutMe'
import {Resources} from '../sections/resources'
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

    <Nav />

    <Main id="main" />
    <AboutMe id="about-me" />
    <Resources id="resources" />

    <Footer />
  </div>
)

export default Home

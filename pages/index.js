import React from 'react'
import Head from 'next/head'

import '../styles/styles.scss'
import {Nav} from '../components/nav'
import {Main} from '../sections/main'
import {AboutMe} from '../sections/aboutMe'
import {Experience} from '../sections/experience'
import {Projects} from '../sections/projects'
import {Education} from '../sections/education'
import {Contact} from '../sections/contact'
import {Footer} from '../components/footer'

const Home = () => (
  <div>
    <Head>
      <title>Aitor Rodríguez - Devairoma | Frontend Engineer</title>
      <meta
        name="description"
        content="Mi nombre es Aitor Rodríguez, vivo en Barcelona y soy 👨‍💻 Frontend Engineer en Adevinta Spain y Fundador de 🗣️ MTBeros y 📰 Stadianeros."
      />
      <meta name="author" content="Aitor Rodríguez" />
      <meta httpEquiv="Content-Language" content="es" />
      <link rel="icon" href="./static/favicon.png" />
    </Head>

    <Nav />

    <Main id="main" />
    <AboutMe id="about-me" />
    <Experience id="experience" />
    <Projects id="projects" />
    <Education id="education" />
    <Contact id="contact" />

    <Footer />
  </div>
)

export default Home

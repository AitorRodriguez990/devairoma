import React from "react"
import Head from "next/head"
import {Footer} from '../components/footer'

const sectionClass = 'da-Section'

const Home = () => (
  <div>
    <Head>
      <title>Aitor Rodríguez | Frontend Developer</title>
      <meta name="description" content="Aquí te dejo conocerme un poco más a mí y mi trabajo."/>
      <meta name="author" content="Aitor Rodríguez" />
      <meta http-equiv="Content-Language" content="es" />
      <link rel="icon" href="./static/favicon.png"></link>
    </Head>

    <div className="container">
      <div className="hero">
        <img className="avatar" src="./static/devairoma.jpg" alt="Aitor Rodríguez" width="200" />
        <div className="welcome">
          <h1 className="title">¡Hola! 👋</h1>
          <p className="subtitle">
            Mi nombre es Aitor Rodríguez. Soy 👨‍💻 <strong>Frontend Engineer</strong> en <a className="fotocasa" href="https://www.fotocasa.es" target="_blank">Fotocasa</a> y 👮 Co-Fundador y Administrador de <a href="https://www.mtberos.com" target="_blank">MTBeros</a>.
          </p>
        </div>
      </div>
    </div>

    <div className={`${sectionClass} ${sectionClass}--odd`}>
      <div className={`${sectionClass}-content`}>
        <h2 className={`${sectionClass}-title`}>Sobre mí 👤</h2>
        <p className={`${sectionClass}-info`}>
          <strong>Soy padre</strong> de un pequeño bicho 👶, <strong>marido</strong> de una compañera maravillosa 💍, <strong>y una persona muy activa e inquieta al que le encanta disfrutar de su tiempo</strong> a través de las salidas al aire libre ⛰️, los viajes ✈️, las películas y las series 📹 y la lectura 📚.
        </p>
        <p className={`${sectionClass}-info`}>
          En lo laboral soy un <strong>apasionado del desarrollo web</strong> con ganas de aprender y mejorar continuamente, y enfoco mi aprendizaje hacia el desarrollo <strong>Frontend</strong> a través de React ⚛️, Javascript 🎮 y CSS 🎨. Además, <strong>me encanta trabajar en equipo y ayudar a mis compañeros</strong> en todo lo que me sea posible.
        </p>
        <p className={`${sectionClass}-info`}>
         Aplico metodología <a href="https://gettingthingsdone.com/" target="_blank">GTD</a> en mi día a día, para vivir y trabajar de la manera más organizada y relajada posible.
        </p>
      </div>
    </div>
    
    <Footer />

    <style jsx>{`
      :global(*) {
        box-sizing: border-box;
      }
      :global(html) {
        scroll-behavior: smooth;
      }
      :global(body) {
        background-color: #f1f1f1;
        box-sizing: border-box;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        margin: 0;
      }

      :global(a) {
        color: #1991ff;
        font-weight: 500;
        position: relative;
        text-decoration: none;
        transition: opacity 0.2s;
      }
      :global(a:after) {
        background-color: #1991ff;
        bottom: 1px;
        content: " ";
        height: 8px;
        left: -2px;
        opacity: 0.3;
        position: absolute;
        transition: opacity 0.3s;
        width: calc(100% + 4px);
        z-index: -1;
      }
      :global(a:hover:after) {
        opacity: 0.5;
      }

      .da-Section {
        align-items: center;
        display: flex;
        min-height: -webkit-fill-available;
        padding: 15px;
      }
      @media (min-width: 768px) {
        .da-Section {
          padding: 30px 15px;
        }
      }
      .da-Section--odd {
        background-color: #fff;
      }

      .da-Section-content {
        font-weight: 300;
        margin: auto;
        max-width: 820px;
      }

      .da-Section-title {
        font-size: 28px;
        margin: 0;
      }
      @media (min-width: 768px) {
        .da-Section-title {
          font-size: 36px;
        }
      }

      .da-Section-info {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 0;
        margin-top: 15px;
        text-align: justify;
      }
      @media (min-width: 768px) {
        .da-Section-info {
          line-height: 2;
        }
      }

      .container {
        align-items: center;
        display: flex;
        min-height: -webkit-fill-available;
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
        height: 150px;
        margin-bottom: 20px;
        width: 150px;
      }
      @media (min-width: 768px) {
        .avatar {
          height: 200px;
          margin-bottom: 0;
          margin-right: 20px;
          width: 200px;
        }
      }

      .welcome {
        display: block;
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
        line-height: 1.50;
        margin-bottom: 0;
        margin-top: 15px;
      }
      @media (min-width: 768px) {
        .subtitle {
          font-size: 28px;
        }
      }
      
      a.fotocasa {
        color: #303ab2;
      }
      a.fotocasa:after {
        background-color: #303ab2;
      }
    `}</style>
  </div>
)

export default Home

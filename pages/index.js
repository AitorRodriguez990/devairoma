import React from "react"
import Head from "next/head"

const Home = () => (
  <div>
    <Head>
      <title>Devairoma</title>
      <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/male-technologist_1f468-200d-1f4bb.png"></link>
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

    <style jsx>{`
      :global(*) {
        box-sizing: border-box;
      }
      :global(body) {
        background-color: #f1f1f1;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        margin: 0;
      }

      .container {
        align-items: center;
        display: flex;
        min-height: -webkit-fill-available;
        padding: 15px;
      }

      .hero {
        align-items: center;
        color: #333;
        margin: auto;
        max-width: 800px;
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
      .subtitle {
        font-size: 20px;
        font-weight: 300;
        line-height: 1.50;
        margin-bottom: 0;
        margin-top: 15px;
      }

      @media (min-width: 768px) {
        .title {
          font-size: 48px;
        }
        .subtitle {
          font-size: 28px;
        }
      }
      
      a {
        color: #1991ff;
        font-weight: 500;
        position: relative;
        text-decoration: none;
      }
      a:after {
        background-color: #1991ff;
        bottom: 1px;
        content: " ";
        height: 8px;
        left: -2px;
        opacity: 0.3;
        position: absolute;
        transition: opacity 0.2s;
        width: calc(100% + 4px);
        z-index: -1;
      }
      a:hover:after {
        opacity: 0.5;
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

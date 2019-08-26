import React from "react"
import Head from "next/head"

const Home = () => (
  <div>
    <Head>
      <title>Devairoma</title>
    </Head>

    <div className="container">
      <div className="hero">
        <h1 className="title">¡Hola! 👋</h1>
        <p className="subtitle">
          Mi nombre es Aitor Rodríguez y soy 👨‍💻<strong>Frontend Engineer</strong> en Adevinta y 👮Co-Fundador y Administrador de <a href="https://www.mtberos.com" target="_blank">MTBeros</a>.
        </p>
      </div>
    </div>

    <style jsx>{`
      :global(*) {
        box-sizing: border-box;
      }
      :global(body) {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        margin: 0;
      }
      .container {
        align-items: center;
        display: flex;
        height: 100vh;
        padding: 15px;
      }
      .hero {
        color: #333;
        display: block;
        margin: auto;
        max-width: 750px;
      }
      .title {
        font-size: 48px;
        line-height: 1.15;
        margin: 0;
      }
      .subtitle {
        font-size: 28px;
        font-weight: 300;
        line-height: 1.50;
      }
      a {
        color: #1991ff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default Home

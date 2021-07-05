import React from 'react'
import Head from 'next/head'

export const HeadMeta = () => {
  return (
    <Head>
      <title>Aitor Rodríguez | Desarrollo y lanzo proyectos 🚀</title>
      <meta
        name="description"
        content="Soy Frontend Engineer en Adevinta Spain y Fundador de MTBeros y otros proyectos (vivos o muertos)."
      />
      <meta name="author" content="Aitor Rodríguez" />
      <meta httpEquiv="Content-Language" content="es" />
      <link rel="icon" href="./static/favicon.png" />
    </Head>
  )
}

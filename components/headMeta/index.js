import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export default function HeadMeta({section = ''}) {
  const name = "Aitor Rodríguez"
  var title = `${name} | Desarrollo y lanzo proyectos 🚀`

  if (section.length) {
    title = `${section} | Aitor Rodríguez`
  }

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Soy Frontend Engineer en Adevinta Spain y Fundador de MTBeros y otros proyectos (vivos o muertos)."
      />
      <meta name="author" content={name} />
      <meta httpEquiv="Content-Language" content="es" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

HeadMeta.propTypes = {
  section: PropTypes.string
}

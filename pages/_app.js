import React from 'react'
import PropTypes from 'prop-types'
import '../styles/styles.scss'

export default function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

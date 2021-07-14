import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import '../styles/styles.scss'

export default function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

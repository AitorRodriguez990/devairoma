import React from 'react'
import PropTypes from 'prop-types'

import {Section} from '../../components/section'

import './index.scss'

const baseClass = 'da-Contact'

export const Contact = ({id = ''}) => (
  <Section className={baseClass} isOdd title="Contacto ✍️" id={id}>
    <p>
      Sea cual sea tu motivación para ello, puedes ponerte en contacto conmigo a
      través de{' '}
      <a
        href="mailto:aitor.rodriguez990@gmail.com"
        target="_blank"
        rel="nofollow noopener"
      >
        mi e-mail
      </a>
      .
    </p>
  </Section>
)

Contact.propTypes = {
  id: PropTypes.string
}

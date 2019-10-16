import React from 'react'
import './index.scss'

const baseClass = 'da-Footer'

export const Footer = () => {
  return (
    <footer className={baseClass}>
      <div className={`${baseClass}-content`}>
        Hecho por mí usando{' '}
        <a
          className={`${baseClass}-link`}
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </a>
        .
        <ul className={`${baseClass}-social`}>
          <li>
            <a href="https://github.com/AitorRodriguez990" target="_blank">
              <img src="./static/github.svg" alt="GitHub" width="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aitorrodriguezfrontend/"
              target="_blank"
            >
              <img src="./static/linkedin.svg" alt="LinkedIn" width="30" />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/4961667/aitor"
              target="_blank"
            >
              <img
                src="./static/stack-overflow.svg"
                alt="Stack overflow"
                width="30"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

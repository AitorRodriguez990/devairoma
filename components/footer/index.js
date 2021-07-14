import React from 'react'
import styles from './index.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>&copy;{currentYear} Aitor Rodríguez</p>
    </footer>
  )
}

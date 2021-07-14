import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <ul className={styles.menu}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/sobre-mi">Sobre mí</Link></li>
      </ul>
    </header>
  )
}

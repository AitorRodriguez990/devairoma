import React from 'react'
import HeadMeta from '../../components/headMeta'

import styles from './index.module.scss'

export default function Projects() {
  const title = 'Proyectos'

  return (
    <>
      <HeadMeta section={title} />
      <h1 className="title">{title}</h1>

      <p>
        Son muchos los proyectos que con el tiempo he ido lanzando, pero también es verdad que <strong>han sido prácticamente todos ellos los que han fracasado</strong>.
      </p>
      <p>
        Aún y así, gracias a lanzar esos proyectos y fracasar, <strong>he aprendido muchas cosas</strong> que me han servido para el siguiente e incluso fueron mis comienzos como desarrollador.
      </p>

      <p>
        <em>En construcción.</em>
      </p>

      {/* <div className={styles.projects}>
        <div className={styles.project}>
          Lorem ipsum
        </div>
        <div className={styles.project}>
          Lorem ipsum
        </div>
        <div className={styles.project}>
          Lorem ipsum
        </div>
        <div className={styles.project}>
          Lorem ipsum
        </div>
      </div> */}
    </>
  )
}

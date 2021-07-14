import React from 'react'
import {HeadMeta} from '../../components/headMeta'
import {Header} from '../../components/header'
import {Footer} from '../../components/footer'

import styles from './index.module.scss'

const About = () => (
  <div>
    <HeadMeta section="Sobre mí" />

    <div className="page">
      <Header />

      <div className="container">
        <h1 className="title">Sobre mí</h1>

        <div className={styles.about}>
          <p>
            Nací en el 1990. Actualmente, y desde hace ya muchos años, vivo en un pueblo grande (o ciudad pequeña) de los alrededores de Barcelona.
          </p>
          <p>
            Hay muchas cosas que soy y que hago y que creo que son importantes para definir el como soy:
          </p>

          <h2 className="subtitle">👪 La familia es lo primero</h2>
          <p>
            En todas las decisiones que debo tomar la prioridad será mi familia, o al menos eso intento siempre.
          </p>
          <p>
            Eso incluye al pequeño terremo de casi 3 años que tengo por hijo, y el cual ha cambiado completamente mi vida y forma de pensar, a mi alegre compañera desde hace ya más de 10 años y gracias a la cual cada vez soy una mejor versión de mi mismo, y a mi peludo gato y a mi incansable perro.
          </p>

          <h2 className="subtitle">🏅 La vida no sin deporte</h2>
          <p>
            Desde antes de la adolescencia el deporte ya ha formado parte de mi vida. Primero con el básquet y más tarde con el <em>running</em>, el <em>trail running</em> y el ciclismo de montaña.
          </p>
          <p>
            Aunque no siempre han convivido todos los deportes a la vez, porque el tiempo y la energía son limitados, siempre he estado practicado algunos de ellos en mi día a día salvo épocas en las que, desgraciadamente, la falta de motivación me ha empujado a ello.
          </p>
          <p>
            En familia, y eso incluye ahora a Duc (nuestro perro), siempre que podemos nos escapamos a la naturaleza a hacer senderismo, o turismo rural (<em>¡que también cansa!</em>).
          </p>
          <p>
            En el futuro me gustaría prepararme para ser capaz de finalizar un <em>Ironman 70.3</em>. Y sí, ¡lo dejo por escrito para que quede constancia!
          </p>
          <p></p>

          <h2 className="subtitle">📚 Esas aficiones enriquecedoras</h2>
          <p>En construcción.</p>

          <h2 className="subtitle">🌍 Vooolaaaré</h2>
          <p>En construcción.</p>

          <h2 className="subtitle">🕺 Soft skills</h2>
          <p>En construcción.</p>

          <h2 className="subtitle">👨‍💻 Hard skills</h2>
          <p>En construcción.</p>
        </div>
      </div>

      <Footer />
    </div>
  </div>
)

export default About

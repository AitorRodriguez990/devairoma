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

          <h2 className="subtitle">👪 <span>La familia es lo primero</span></h2>
          <p>
            En todas las decisiones que debo tomar <strong>la prioridad siempre será mi familia</strong>, o al menos eso intento siempre.
          </p>
          <p>
            Eso incluye al pequeño terremoto de casi 3 años que tengo por hijo, y el cual ha cambiado completamente mi vida y forma de pensar, a mi alegre compañera desde hace ya más de 10 años y gracias a la cual soy una mejor versión de mi mismo, a mi peludo gato y a mi incansable perro.
          </p>

          <h2 className="subtitle">🏅 <span>La vida no sin deporte</span></h2>
          <p>
            Desde antes de la adolescencia el deporte ya formaba parte de mi vida. Primero con el básquet y más tarde con el <em>running</em>, el <em>trail running</em> y el ciclismo de montaña.
          </p>
          <p>
            Aunque no siempre han convivido todos los deportes a la vez, porque el tiempo y la energía son limitados, <strong>siempre he estado practicado algún deporte regularmente</strong>. Aunque debo reconocer que también he tenido épocas en las que la falta de motivación y, porque no decirlo, la estupidez, me han empujado a una vida más sedentaria.
          </p>
          <p>
            En familia, y eso incluye ahora a Duc (nuestro perro), siempre que podemos nos escapamos a la naturaleza a hacer senderismo, o turismo rural (<em>¡que también cansa!</em>).
          </p>
          <p>
            En el futuro <strong>me gustaría prepararme para ser capaz de finalizar un <em>Ironman 70.3</em></strong>. Y sí, ¡lo dejo por escrito para que quede constancia!
          </p>
          <p></p>

          <h2 className="subtitle">📚 <span>Esas aficiones enriquecedoras</span></h2>
          <p>En construcción.</p>

          <h2 className="subtitle">🌍 <span>Vooolaaaré</span></h2>
          <p>En construcción.</p>

          <h2 className="subtitle">🕺 <span>Soft skills</span></h2>
          <p>En construcción.</p>

          <h2 className="subtitle">👨‍💻 <span>Hard skills</span></h2>
          <p>En construcción.</p>
        </div>
      </div>

      <Footer />
    </div>
  </div>
)

export default About

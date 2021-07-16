import React from 'react'
import HeadMeta from '../../components/headMeta'

export default function About() {
  const title = "Sobre mí"

  return (
    <>
      <HeadMeta section={title} />
      <h1 className="title">{title}</h1>

      <p>
        Nací en el 1990. Actualmente, y desde hace ya muchos años, vivo en un pueblo grande (o ciudad pequeña) de los alrededores de Barcelona.
      </p>
      <p>
        Hay muchas cosas qué soy y qué hago y que creo que son importantes para definir el cómo soy:
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
        En familia, y eso incluye ahora a Duc (nuestro perro), siempre que podemos nos escapamos a la naturaleza a hacer senderismo o turismo rural (<em>¡que también cansa!</em>).
      </p>
      <p>
        En el futuro <strong>me gustaría prepararme para ser capaz de finalizar un <em>Ironman 70.3</em></strong>. Y sí, ¡lo dejo por escrito para que quede constancia!
      </p>

      <h2 className="subtitle">📚 <span>Esas aficiones enriquecedoras</span></h2>
      <p>
        <strong>Leer es algo que hago prácticamente cada día</strong> si el sueño no me atrapa antes, ya que lo hago al acostarme; es el momento tranquilo del día y me ayuda a relajarme. 
      </p>
      <p>
        <em>&quot;¿Mi género favorito?&quot;</em> Cómo también me pasa con la música, no me cierro a un único tipo, aunque en el caso de los libros sí suelo priorizar la ciencia ficción, el suspense y los <em>thrillers</em>. Recientemente también he leído algo de psicología, historia y ensayos.
      </p>
      <p>
        También dedico algunas noches a ver alguna <strong>serie en pareja cuando la tranquilidad se adeuña de la casa</strong>, que suele coincidir cuando el pequeño de la casa se va a dormir (¡qué raro!).
      </p>
      <p>
        Las películas en solitario se reservan para raras ocasiones, y prácticamente nunca son <em>blockbusters</em>. Las <strong>películas que sí son especiales</strong> son las de rejalarse en familia en el sofá los sábados por la tarde.
      </p>

      <h2 className="subtitle">🌍 <span>Vooolaaaré</span></h2>
      <p>
        Aunque <strong>lo hago mucho menos de lo que me querría</strong>, viajar es algo que me gusta mucho (<em>¡¿y a quien no?!</em>) y una de las aficiones que comparto con mi pareja.
      </p>
      <p>
        El ahorro para una boda y la posterior compra de una vivienda, un embarazo y un niño pequeño son algunas de las cosas que te impiden viajar todo lo que querrías. <em>Pero quien algo quiere algo le cuesta, ¿no?</em> <strong>A veces hay que sacrificarse en pos de cosas mejores</strong>.
      </p>
      <p>
        Marrakech me sorprendió para bien, ya que fui de imprevisto y sin grandes expectativas y acabó siendo un viaje muy divertido y enriquecedor; por el contrario, Bali, que aunque me gustó creo que va a envejecer muy mal debido a su suciedad y tráfico.
      </p>

      <h2 className="subtitle">🕺 <span>Soft skills</span></h2>
      <p>
        También denominadas <em>habilidades blandas</em>, hay varias características de mi personalidad que creo son muy positivas:
      </p>
      <p>
        Aunque de primeras puedo ser un poco introvertido, enseguida que cojo confianza <strong>soy una persona simpática a la que le gusta bromear y hablar de todo</strong>.
      </p>
      <p>
        He sido <strong>autodidacta</strong>, y lo sigo siendo, durante toda mi etapa profesional después de haber estudiado Administración de Sistemas Informáticos, haber trabajado durante años de ello, y haberme dado cuenta de que me gustaba mucho más el desarrollo web y diferentes partes del proceso de creación de un producto digital.
      </p>
      <p>
        <strong>Me encanta trabajar en equipo y a poder ser en colaboración con diferentes perfiles</strong>, ya que esto permite tanto aprender del resto de miembros del equipo como retar y ser retado en la toma de decisiones.
      </p>
      <p>
        Además, <strong>soy una persona muy crítica</strong> con el trabajo que hago y con el que realizan otros, ya que es una de las mejores formas de mejorar y aprender. Obviamente, siendo siempre constructivo al dar ese <em>feedback</em>; que también me lo den es un regalo.
      </p>

      <h2 className="subtitle">👨‍💻 <span>Hard skills</span></h2>
      <p>
        A modo de resumen: Soy <strong>Frontend Engineer con fuertes conocimientos de JavaScript, React y SASS</strong>. Además, trabajo diariamente con tecnologías y herramientas como Cypress, Git, GitHub, ...
      </p>
      <p>
        Aquí podría rellenar líneas y líneas de siglas y tecnicismos, pero será más práctico visitar <a href="https://www.linkedin.com/in/aitorrodriguezfrontend/" target="_blank" rel="noreferrer">mi LinkedIn</a> qué es donde mejor se va a poder <strong>leer y conocer sobre mi experiencia profesional</strong> a lo largo de los años.
      </p>
    </>
  )
}

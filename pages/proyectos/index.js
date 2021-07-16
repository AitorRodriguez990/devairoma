import React from 'react'
import HeadMeta from '../../components/headMeta'

export default function Projects() {
  const title = 'Proyectos'

  return (
    <>
      <HeadMeta section={title} />
      <h1 className="title">{title}</h1>

      <p>
        Son varios los <strong>proyectos que con el tiempo he ido lanzando</strong>, y muchos otros que no han pasado de una simple idea o boceto.
      </p>
      <p>
        Gracias a lanzar estos proyectos, tener que iterar e incluso fracasar, <strong>he aprendido muchas cosas</strong> que me han servido para el siguiente que he lanzado; incluso alguno de ellos me permitió aprender lo necesario para poder trabajar hoy día como <em>Frontend Engineer</em>.
      </p>

      <h2 className="subtitle">🟢 <span>MTBeros</span></h2>
      <p>
        Lo que comenzó como un simple <em>hobbie</em> en el año 2014, se ha acabado convirtiendo en uno de los lugares de <strong>referencia del ciclismo de montaña</strong> donde debatir, resolver dudas, buscar compañeros de ruta y descubrir ofertas.
      </p>
      <p>
        Actualmente forman parte de <a href="https://www.mtberos.com" target="_blank" rel="noreferrer">MTBeros</a> <strong>más de 11.500 usuarios registrados</strong>, los cuales han abierto más de 13.500 temas en los que se han escrito más de 320.000 mensajes*. Además, <strong>más de 80.000 usuarios mensuales</strong> a través de 130.000 sesiones visitan el foro, consumiendo más de 320.000 páginas vistas**.
      </p>
      <p>
        Aunque un grupo de personas me ayuda con la moderación del contenido, y otra persona con lo relativo a los servidores, <strong>yo mismo me encargo de prácticamente todo</strong> el resto. <em>&quot;¿Qué significa eso?&quot;</em> Pues que he tenido que aprender desde tratar con la gente (<em>&quot;¡y eso cuesta mucho!&quot;</em>), pasando por redacción y comunicación, email marketing, redes sociales, monetización y más tarde facturación (<em>&quot;hacienda somos todos&quot;</em>).
      </p>  
      <p>
        Hasta he hecho un <a href="/mediakit-mtberos.pdf" target="_blank">mediakit para empresas</a>, ¡cuando hasta hace unos meses no sabía ni lo qué era!
      </p>
      <p className="small">
        * Datos actualizados a fecha de 21 de junio de 2021.
      </p>
      <p className="small">
        ** Media mensual a partir de los datos del año 2020.
      </p>

      <h2 className="subtitle">🔴 <span>Stadianeros</span></h2>
      <p>
        <em>En construcción.</em>
      </p>

      <h2 className="subtitle">🟢 <span>Ciclismo a gas</span></h2>
      <p>
        <em>En construcción.</em>
      </p>

      <h2 className="subtitle">🔴 <span>Excusas</span></h2>
      <p>
        <em>En construcción.</em>
      </p>
    </>
  )
}

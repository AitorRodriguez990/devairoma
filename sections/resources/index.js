import React from 'react'
import {Section} from '../../components/section'
import {Resource} from '../../components/resource'
import './index.scss'

const baseClass = 'da-Resources'

export const Resources = () => (
  <Section title="Recursos 📚">
    <div className={baseClass}>
      <Resource
        link="https://www.youtube.com/watch?v=7fERX0OXAIY"
        source="Youtube"
        tags={['Crecimiento personal', 'Educación']}
        title="📹 Un crimen llamado educación"
      />
      <Resource
        link="https://css-tricks.com/how-to-section-your-html/"
        source="CSS-Tricks"
        tags={['Frontend', 'HTML']}
        title="📖 Como estructurar tu HTML"
      />
      <Resource
        link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
        source="CSS-Tricks"
        tags={['Frontend', 'CSS']}
        title="📖 Guía completa de Flexbox"
      />
      <Resource
        link="https://www.youtube.com/watch?v=A6ctEW9mOgw"
        source="Youtube"
        tags={['Crecimiento personal', 'Documental']}
        title="📹 Chernobyl en 15 minutos"
      />
      <Resource
        link="https://www.youtube.com/watch?v=KVoFQ5hT6sk"
        source="Youtube"
        tags={['Crecimiento personal', 'Documental']}
        title="📹 Minimalismo"
      />
      <Resource
        link="https://medium.com/datadriveninvestor/cookies-vs-local-storage-2f3732c7d977"
        source="Medium"
        tags={['Frontend', 'Cookies', 'LocalStorage']}
        title="📖 Diferencias entre cookies y localStorage (EN)"
      />
      <Resource
        link="https://hamberg.no/gtd/"
        source="Hamberg"
        tags={['Productividad', 'GTD']}
        title="📖 GTD en 15 minutos (EN)"
      />
    </div>
  </Section>
)

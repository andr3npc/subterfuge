import { useScrollReveal } from '../hooks/useScrollReveal'

const writers = [
  { img: 'Fiodor.jpg',                           alt: 'Fiódor Dostoiévski',          name: 'Fiódor Dostoiévski',          nation: 'Rússia'   },
  { img: 'bulgakov.jpg',                          alt: 'Mikhail Bulgákov',             name: 'Mikhail Bulgákov',             nation: 'Ucrânia'  },
  { img: 'vassili.png',                           alt: 'Vassili Grossman',             name: 'Vassili Grossman',             nation: 'Ucrânia'  },
  { img: 'Svetlana.png',                          alt: 'Svetlana Alexijevich',         name: 'Svetlana Alexijevich',         nation: 'Belarus'  },
  { img: 'Ana_Claudia.jpg',                       alt: 'Ana Claudia Quintana Arantes', name: 'Ana Claudia Quintana Arantes', nation: 'Brasil'   },
  { img: 'Krasznahorkai_László_portrait.jpg',     alt: 'László Krasznahorkai',         name: 'László Krasznahorkai',         nation: 'Hungria'  },
  { img: 'marcelo_viana.png',                     alt: 'Marcelo Viana',                name: 'Marcelo Viana',                nation: 'Brasil'   },
  { img: 'Lev_Tolstoi.png',                       alt: 'Lev Nikoláievitch Tolstói',   name: 'Lev Nikoláievitch Tolstói',   nation: 'Rússia'   },
]

export default function Escritores() {
  const gridRef = useScrollReveal('.writer-card', 120)

  return (
    <main>
      <section className="hero-section">
        <h2>Autores Lidos Recentemente</h2>
        <div className="divider" />
        <p className="subtitle">Os autores que habitam as páginas deste diário.</p>
      </section>

      <div className="writers-grid" ref={gridRef}>
        {writers.map(({ img, alt, name, nation }) => (
          <article className="writer-card" key={name}>
            <div className="writer-portrait">
              <span className="nation-badge">{nation}</span>
              <img src={`/${img}`} alt={alt} loading="lazy" />
            </div>
            <div className="writer-info">
              <div className="writer-name">{name}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

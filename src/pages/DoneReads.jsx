import { useScrollReveal } from '../hooks/useScrollReveal'

const books = [
  { img: 'faithful.jpg',  alt: 'Capa - The Faithful Executioner',             title: 'The Faithful Executioner',                   author: 'Joel F. Harrington'         },
  { img: 'brain.jpg',     alt: 'Capa - O cérebro no mundo digital',           title: 'O Cérebro no Mundo Digital',                 author: 'Maryanne Wolf'              },
  { img: 'dogheart.jpg',  alt: 'Capa - Coração de Cachorro',                  title: 'Coração de Cachorro e Outras Novelas',        author: 'Mikhail Bulgakov'           },
  { img: 'mocorongo.png', alt: 'Capa - O Idiota',                             title: 'O Idiota',                                   author: 'Fiódor Dostoiévski'         },
  { img: 'mortais.jpg',   alt: 'Capa - Mortais',                              title: 'Mortais',                                    author: 'Atul Gawande'               },
  { img: 'TheRoad.jpg',   alt: 'Capa - A estrada',                            title: 'A estrada',                                  author: 'Vassili Grossman'           },
  { img: 'Morte_Dia.jpg', alt: 'Capa - A morte é um dia que vale a pena viver', title: 'A morte é um dia que vale a pena viver',  author: 'Ana Claudia Quintana Arantes' },
]

export default function DoneReads() {
  const gridRef = useScrollReveal('.book-card--done', 100)

  return (
    <main>
      <section className="hero-section">
        <h2>Leituras Concluídas</h2>
        <div className="divider" />
        <p className="subtitle">Os livros que atravessaram o limiar em 2026.</p>
      </section>

      <div style={{ textAlign: 'center' }}>
        <span className="count-badge">7 obras concluídas</span>
      </div>

      <div className="book-grid" ref={gridRef}>
        {books.map(({ img, alt, title, author }) => (
          <article className="book-card--done" key={title}>
            <div className="book-cover-wrap">
              <span className="status-badge--done">Lido ✓</span>
              <img src={`/${img}`} alt={alt} loading="lazy" />
            </div>
            <div className="book-info book-info--done">
              <div className="book-title">{title}</div>
              <div className="book-author">{author}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

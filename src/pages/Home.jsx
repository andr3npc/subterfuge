import { useScrollReveal } from '../hooks/useScrollReveal'

const currentBooks = [
  { img: 'satantango.jpeg', alt: 'Capa - Sátántangó',             title: 'Sátántangó',                         author: 'László Krasznahorkai', badge: 'reading' },
  { img: 'viana.png',       alt: 'Capa - História dos Números',   title: 'História dos Números',               author: 'Marcelo Viana',        badge: 'reading' },
  { img: 'tolstoi.png',     alt: 'Capa - A morte de Ivan Ilitch', title: 'A morte de Ivan Ilitch',             author: 'Lev Tolstói',          badge: 'reading' },
  { img: 'sagan.png',       alt: 'Capa - O mundo assombrado',     title: 'O mundo assombrado pelos demônios',  author: 'Carl Sagan',           badge: 'next'    },
]

export default function Home() {
  const gridRef = useScrollReveal('.book-card')

  return (
    <main style={{ maxWidth: '1000px' }}>
      <div className="home-faustian" aria-hidden="true" />
      <div className="home-gradient" aria-hidden="true" />

      <section className="hero-section hero-section--home">
        <h2>O Subterfúgio</h2>
        <div className="divider" />
        <p className="subtitle">
          Um diário literário dedicado aos clássicos russos e às profundezas da literatura densa.
        </p>
      </section>

      <div className="section-heading">
        <h3>Leituras Atuais</h3>
      </div>

      <div className="books-grid" ref={gridRef}>
        {currentBooks.map(({ img, alt, title, author, badge }) => (
          <article className="book-card" key={title}>
            <div className="book-cover">
              <span className={`status-badge status-badge--${badge}`}>
                {badge === 'reading' ? 'Lendo agora' : 'Up Next'}
              </span>
              <img src={`/${img}`} alt={alt} loading="lazy" />
            </div>
            <div className="book-info">
              <div className="book-title">{title}</div>
              <div className="book-author">{author}</div>
            </div>
          </article>
        ))}
      </div>

      <section className="quote-section">
        <span className="quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote>A beleza salvará o mundo.</blockquote>
        <cite>— Fiódor Dostoiévski</cite>
      </section>
    </main>
  )
}

export default function Sobre() {
  return (
    <main style={{ maxWidth: '720px' }}>
      <section className="hero-section">
        <h2>Sobre</h2>
        <div className="divider" />
      </section>

      <div style={{ textAlign: 'center' }}>
        <span className="selo">O Projeto</span>
      </div>

      <article className="texto-sobre">
        <p>
          <strong>O Subterfúgio</strong> é um portal dedicado à literatura clássica e
          contemporânea, focado em autores que exploram as profundezas da condição humana e
          as sombras da sociedade.
        </p>
        <p>
          Este site foi desenvolvido como parte de um projeto acadêmico para praticar as
          propriedades de posicionamento e estilização com CSS, unindo a paixão pelos livros
          com o aprendizado técnico de programação web em 2026.
        </p>

        <div className="pull-quote">
          <p>
            Do realismo russo às distopias modernas, cada página aqui reflete um capítulo
            diferente da nossa jornada literária.
          </p>
        </div>

        <p>
          Acompanhada de artes sombrias e trilhas sonoras que compõem a atmosfera ideal para
          o pensamento crítico, esta é uma experiência construída para quem encontra nas
          palavras um refúgio — e no silêncio entre elas, um subterfúgio.
        </p>
      </article>

      <section className="skoob-section">
        <p className="skoob-label">Acompanha as minhas leituras e estante virtual no Skoob.</p>
        <a
          href="https://skoob.com.br/profile/10609993-chaostream"
          target="_blank"
          rel="noopener noreferrer"
          className="skoob-link"
        >
          <svg className="skoob-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9 9.83 9 9s.67-1.5 1.5-1.5zm3 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S12 9.83 12 9s.67-1.5 1.5-1.5zM12 18c-2.21 0-4-1.34-4-3h1.5c0 .83 1.12 1.5 2.5 1.5s2.5-.67 2.5-1.5H16c0 1.66-1.79 3-4 3z" />
          </svg>
          Perfil no Skoob
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </section>
    </main>
  )
}

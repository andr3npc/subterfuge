export default function Contos() {
  return (
    <main style={{ maxWidth: '720px' }}>
      <section className="hero-section">
        <h2>Meus Contos e Escritos</h2>
        <div className="divider" />
      </section>

      <article className="conto-card">
        <div className="conto-header">
          <h3 className="conto-titulo">Bombardo</h3>
          <div className="conto-meta">
            <span className="selo">Obra Original</span>
            <span className="conto-data">18 de Fevereiro de 2026</span>
          </div>
        </div>

        <div className="conto-corpo">
          <p>
            A sineta da porta tilintou quando Bombardo adentrou a Agropecuária São Leopoldo
            Mandioca. O assoalho rangeu sob o peso de seus passos e de seus vastos quadríceps.
          </p>
          <p>
            Ele retirou o chapéu com solenidade teatral e, apoiando ambas as mãos colossais
            sobre o balcão, declarou:
          </p>
          <p className="dialogo">
            — Boa tarde, nobre guardião das rações e das rédeas. Necessito um balsamo para meu
            equino que encontra-se claudicante, praticamente se enveredando nas searas no além.
          </p>
        </div>
      </article>

      <article className="conto-card">
        <div className="conto-header">
          <h3 className="conto-titulo">Príncipe Mixirico</h3>
          <div className="conto-meta">
            <span className="selo">Obra Original</span>
            <span className="conto-data">2 de Abril de 2026</span>
          </div>
        </div>

        <div className="conto-corpo">
          <p>
            Era cedo demais para qualquer tipo de filosofia, mas exatamente o horário perfeito
            para ela acontecer.
          </p>
          <p>
            O trem da CPTM seguia lotado, como sempre, naquele balanço meio resignado entre
            estações e destinos que ninguém tinha certeza se queria alcançar. O ar era uma
            mistura de café requentado, perfume excessivo e um leve desespero coletivo.
          </p>
          <p>
            Sentado perto da porta, segurando uma mochila que claramente não sabia usar direito,
            estava o príncipe Mixirico.
          </p>
          <p>
            Seu olhar era aberto, curioso, perigosamente interessado em tudo — inclusive nas
            pessoas que claramente não queriam ser notadas.
          </p>
          <p>
            Do outro lado, encarando-o com intensidade crescente, estava um sujeito de jaqueta
            chamativa, corrente grossa no pescoço e olhos que alternavam entre desconfiança e
            entusiasmo: Rogojão.
          </p>
          <p>
            Ao lado dele, ligeiramente inclinado como quem sempre escuta mais do que deveria,
            um homem magro, de sorriso oportunista e olhar afiado: Lebedevson.
          </p>
          <p>O trem deu um solavanco.</p>
          <p>Mixirico quase caiu no colo de uma senhora.</p>
          <p className="dialogo">— Perdão, senhora, foi o destino — disse ele, com sinceridade.</p>
          <p className="dialogo">— Foi o trem mesmo — respondeu ela, seca.</p>
          <p>Rogojão não conseguiu segurar.</p>
          <p className="dialogo">— Você não é daqui, né?</p>
          <p>Mixirico virou imediatamente, como se estivesse esperando por aquilo.</p>
          <p className="dialogo">— Não! Quer dizer… sou, mas também não sou. Acabei de voltar.</p>
          <p className="dialogo">— Da onde?</p>
          <p className="dialogo">— Do exterior.</p>
          <p>Lebedevson se inclinou.</p>
          <p className="dialogo">— Exterior tipo… Hortolândia?</p>
        </div>
      </article>

      <section className="cta-section">
        <p className="cta-label">Mais textos e escritos originais no meu espaço pessoal.</p>
        <a
          href="https://atlanteancurrent.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Atlantean Current
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </section>
    </main>
  )
}

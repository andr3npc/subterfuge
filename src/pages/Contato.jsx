import { useState } from 'react'

export default function Contato() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ maxWidth: '720px' }}>
      <section className="hero-section">
        <h2>Contato</h2>
        <div className="divider" />
        <p className="subtitle">Deixa uma mensagem, um comentário, ou apenas um sinal de vida.</p>
      </section>

      <div className="contato-card">
        {submitted ? (
          <p style={{ fontFamily: "'Spectral', serif", color: 'var(--text-body)', lineHeight: 1.8, textAlign: 'center', padding: '1rem 0' }}>
            Mensagem recebida. Obrigado por escrever.
          </p>
        ) : (
          <form className="form-contato" onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" name="nome" required placeholder="O teu nome" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required placeholder="o.teu@email.com" />

            <label htmlFor="assunto">Assunto</label>
            <select id="assunto" name="assunto">
              <option value="geral">Conversa geral</option>
              <option value="livro">Recomendação de livro</option>
              <option value="arte">Sugestão de obra de arte</option>
              <option value="outro">Outro</option>
            </select>

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" required rows="5" placeholder="Escreve aqui..." />

            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        )}
      </div>
    </main>
  )
}

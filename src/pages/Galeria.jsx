import { useState, useEffect, useCallback } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const obras = [
  { src: 'andrea.jpg',                                                          titulo: 'O Triunfo da Morte',                           artista: 'Andrea Orcagna' },
  { src: 'head.jpg',                                                             titulo: 'Bell of Huesca',                               artista: 'José Casado del Alisal' },
  { src: 'cruciform.jpg',                                                        titulo: 'Opisthotonus Cruciform',                       artista: 'Charles Bell' },
  { src: 'faustian.png',                                                         titulo: 'Faust and Mephistopheles, 1908',               artista: 'Gaston Cervelli' },
  { src: 'erasing.jpeg',                                                         titulo: 'Death on a Pale Horse',                        artista: 'Joseph Mallord William Turner, c. 1825–30' },
  { src: 'bosch.jpg',                                                            titulo: "Christ's Descent into Hell",                   artista: 'Hieronymus Bosch' },
  { src: 'ejnar.png',                                                            titulo: 'Og i hans øjne så jeg døden',                  artista: 'Ejnar Nielsen' },
  { src: 'bruegel_triumph.jpg',                                                  titulo: 'The Triumph of Death',                         artista: 'Pieter Bruegel' },
  { src: 'madmeg.jpg',                                                           titulo: 'Mad Meg',                                      artista: 'Pieter Bruegel' },
  { src: 'anatomy_lesson.jpg',                                                   titulo: 'The anatomy lesson of Dr. Joan Deijman',       artista: 'Rembrandt' },
  { src: 'Georges Chicotot  Professor Poirier with a dissected cadaver  1886.png', titulo: 'Professor Poirier with a Dissected Cadaver', artista: 'Georges Chicotot' },
  { src: 'Detail from The Fall of the Rebel Angels by Luca Giordano, 1666.png', titulo: 'Detail from The Fall of the Rebel Angels',     artista: 'Luca Giordano' },
]

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null)
  const gridRef = useScrollReveal('.obra', 120)

  const openLightbox = (obra) => {
    setLightbox(obra)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox])

  return (
    <main style={{ maxWidth: '1100px' }}>
      <section className="hero-section">
        <h2>Galeria Clássica</h2>
        <div className="divider" />
        <p className="subtitle">Obras que evocam o imaginário literário obscuro.</p>
      </section>

      <div className="galeria-grid" ref={gridRef}>
        {obras.map(({ src, titulo, artista }) => (
          <article
            className="obra"
            key={src}
            onClick={() => openLightbox({ src, titulo, artista })}
          >
            <div className="obra-img-wrap">
              <img src={`/${src}`} alt={titulo} loading="lazy" />
            </div>
            <div className="obra-caption">
              <div className="obra-titulo">{titulo}</div>
              <div className="obra-artista">{artista}</div>
            </div>
          </article>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox active"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
        >
          <button className="lightbox-close" aria-label="Fechar" onClick={closeLightbox}>
            &times;
          </button>
          <img src={`/${lightbox.src}`} alt={lightbox.titulo} />
          <div className="lightbox-caption">
            <div className="lightbox-titulo">{lightbox.titulo}</div>
            <div className="lightbox-artista">{lightbox.artista}</div>
          </div>
        </div>
      )}
    </main>
  )
}

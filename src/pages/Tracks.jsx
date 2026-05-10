import { useState, useEffect, useRef, useCallback } from 'react'

const LASTFM_API_KEY = '01993057ac6c192d53527f9a6729b45c'
const LASTFM_USER    = 'hellborn333'
const TRACK_LIMIT    = 12

function formatTimeAgo(uts) {
  const diff = Math.floor(Date.now() / 1000) - parseInt(uts, 10)
  if (diff < 60)     return 'agora mesmo'
  if (diff < 3600)   return `${Math.floor(diff / 60)} min`
  if (diff < 86400)  return `${Math.floor(diff / 3600)}h`
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`
  return new Date(parseInt(uts, 10) * 1000).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' })
}

function getAlbumArt(images = []) {
  const medium = images.find(i => i.size === 'medium' && i['#text'])
  if (medium) return medium['#text']
  return images.find(i => i['#text'])?.['#text'] || ''
}

function TrackItem({ track, index }) {
  const liRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => liRef.current?.classList.add('loaded'), 80 * index)
    return () => clearTimeout(timer)
  }, [index])

  const isNowPlaying = track['@attr']?.nowplaying === 'true'
  const artist  = track.artist?.['#text'] || track.artist?.name || 'Desconhecido'
  const title   = track.name || 'Sem título'
  const album   = track.album?.['#text'] || ''
  const url     = track.url || '#'
  const art     = getAlbumArt(track.image)
  const num     = String(index + 1).padStart(2, '0')

  return (
    <li ref={liRef}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="track-link">
        <span className="track-num">{num}</span>
        {art
          ? <img src={art} alt="" className="track-art" loading="lazy" />
          : <div className="track-art" />
        }
        <div className="track-info">
          <div className="track-title">{title}</div>
          <div className="track-artist">{artist}{album ? ` — ${album}` : ''}</div>
        </div>
        <div className="track-meta">
          {isNowPlaying
            ? <span className="now-playing"><span className="live-dot" /> a ouvir agora</span>
            : track.date?.uts ? formatTimeAgo(track.date.uts) : ''
          }
        </div>
      </a>
    </li>
  )
}

export default function Tracks() {
  const [tracks, setTracks]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  const fetchTracks = useCallback(() => {
    setLoading(true)
    setError(null)
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(LASTFM_USER)}&api_key=${LASTFM_API_KEY}&format=json&limit=${TRACK_LIMIT}`

    fetch(url)
      .then(r => { if (!r.ok) throw new Error('Erro na resposta da API'); return r.json() })
      .then(data => {
        if (data.error) throw new Error(data.message || 'Erro da API Last.fm')
        const list = data.recenttracks?.track
        if (!list || list.length === 0) throw new Error('Nenhuma faixa recente encontrada.')
        setTracks(list)
        setLoading(false)
      })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [])

  useEffect(() => {
    fetchTracks()
    const interval = setInterval(fetchTracks, 120_000)
    return () => clearInterval(interval)
  }, [fetchTracks])

  return (
    <main>
      <section className="hero-section">
        <h2>O Som do Subterfúgio</h2>
        <div className="divider" />
        <p className="subtitle">
          As bandas sonoras que inspiram este diário literário e as profundezas da escrita.
        </p>
      </section>

      <div className="lastfm-card">
        <span className="card-icon">◉</span>
        <h3>Last.fm</h3>
        <p>
          Acompanha o que estou a ouvir em tempo real. Um registo contínuo de escutas — o
          rastro sonoro que precede e sucede cada leitura.
        </p>
        <a
          href="https://www.last.fm/pt/user/hellborn333"
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Ver Perfil
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </div>

      <section className="recent-section">
        <div className="recent-header">
          <h3>Faixas Recentes</h3>
          <span className="live-badge">
            <span className="live-dot" />
            via Last.fm
          </span>
        </div>

        {loading && (
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Carregando as lapadas...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-state">
            <p>
              Não foi possível carregar as faixas recentes.<br />
              Verifica a ligação ou tenta novamente.
            </p>
            <button className="refresh-btn" onClick={fetchTracks}>Tentar novamente</button>
          </div>
        )}

        {!loading && !error && (
          <ul className="tracklist">
            {tracks.map((track, i) => (
              <TrackItem key={`${track.name}-${i}`} track={track} index={i} />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

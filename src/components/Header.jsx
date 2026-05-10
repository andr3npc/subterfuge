import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/',          label: 'Início',    end: true },
  { to: '/escritores', label: 'Escritores' },
  { to: '/leituras',  label: 'Leituras' },
  { to: '/contos',    label: 'Contos' },
  { to: '/contato',   label: 'Contato' },
  { to: '/sobre',     label: 'Sobre' },
  { to: '/galeria',   label: 'Dark Art' },
  { to: '/tracks',    label: 'Tracks' },
]

export default function Header() {
  const [title, setTitle] = useState('O Subterfúgio')

  useEffect(() => {
    const hora = new Date().getHours()
    if (hora >= 5 && hora < 12)      setTitle('☀️ Bom dia no Subterfúgio')
    else if (hora >= 12 && hora < 18) setTitle('☕ Cafézinho no Subterfúgio')
    else                               setTitle('🌙 Boa noite no Subterfúgio')
  }, [])

  return (
    <header>
      <h1 id="main-title">{title}</h1>
      <nav>
        {navLinks.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Escritores from './pages/Escritores'
import DoneReads from './pages/DoneReads'
import Contos from './pages/Contos'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Galeria from './pages/Galeria'
import Tracks from './pages/Tracks'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="escritores" element={<Escritores />} />
          <Route path="leituras" element={<DoneReads />} />
          <Route path="contos" element={<Contos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="tracks" element={<Tracks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

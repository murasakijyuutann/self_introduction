import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About.tsx'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import './App.css'
import Journey from './pages/Journey.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 70px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  )
}

export default App

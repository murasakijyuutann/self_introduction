// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Journey from './pages/Journey'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
    <div className="bg-bg text-fg">
      <Navbar />
      <main className="min-h-[calc(100vh-56px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
    </ThemeProvider>
  )
}

export default App

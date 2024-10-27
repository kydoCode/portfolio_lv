import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Creations from './pages/Creations'
import Education from './pages/Education'
import Hobbies from './pages/Hobbies'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  )
}
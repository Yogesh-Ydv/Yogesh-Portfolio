import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

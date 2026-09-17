import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HiringFeed from './components/HiringFeed'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HiringFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

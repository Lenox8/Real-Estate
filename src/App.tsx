import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projectos/Projects'
import Testimonials from './components/testimonials/Testimonials'

function App() {


  return (
    <>
     <main>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
     </main>
    </>
  )
}

export default App

import Header from './sections/Header'
import Hero from './sections/Hero'
import Destacados from './sections/Destacados'
import Carta from './sections/Carta'
import Rappi from './sections/Rappi'
import Nosotros from './sections/Nosotros'
import Ubicacion from './sections/Ubicacion'
import InstagramSection from './sections/InstagramSection'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destacados />
        <Carta />
        <Rappi />
        <Nosotros />
        <Ubicacion />
        <InstagramSection />
      </main>
      <Footer />
    </>
  )
}

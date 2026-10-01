import Header from './components/Header'
import Hero from './components/Hero'
import Explore from './components/Explore'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Explore />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Filter from './sections/Filter'
import Benefits from './sections/Benefits'
import Economy from './sections/Economy'
import Standard from './sections/Standard'
import CTA from './sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Filter />
        <Benefits />
        <Economy />
        <Standard />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

import { useState } from 'react'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Elements from './components/Elements';
import Contact from './components/Contact';
import Locations from './components/Locations';
import Gym from './components/Gym';
import Bim from './components/Bim';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="top-0 left-0 w-full bg-[#131619]">
      <Nav />
      <Hero />
    </div>
    <Blog />
    <Elements />
    <Contact />
    <Locations />
    <Gym />
    <Bim />
    <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Elements from './components/Elements';
import Contact from './components/Contact';
import Locations from './components/Locations';

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
    </>
  )
}

export default App

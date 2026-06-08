import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Carts from './components/Carts';
import Footer from './components/Footer';
import Service from './components/Service';
import Dummycart from './components/Dummycart';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <Carts />
      < Dummycart />
      <Contact />
      <Footer />
    </>
  )
}

export default App



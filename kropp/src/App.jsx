import { useState } from 'react'
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="top-0 left-0 w-full bg-black">
      <Nav />
      <Hero />
    </div>
    </>
  )
}

export default App

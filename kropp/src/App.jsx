import { useState } from 'react'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Blog from './components/Blog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="top-0 left-0 w-full bg-[#131619]">
      <Nav />
      <Hero />
    </div>
    <Blog />
    </>
  )
}

export default App

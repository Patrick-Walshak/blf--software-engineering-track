import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Nav />
      <Button />
    </>
  )
}

export default App

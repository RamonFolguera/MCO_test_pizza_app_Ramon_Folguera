import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Body } from './layout/Body/body'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className="App">
      <Body/>
    </div>
    </>
  )
}

export default App

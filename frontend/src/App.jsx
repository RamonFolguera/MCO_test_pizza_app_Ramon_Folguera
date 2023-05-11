import { useState } from 'react'
import './App.css'
import { Body } from './layout/Body/body'
import { NavBar } from './components/NavBar/NavBar'
import { FooterTemplate } from './components/FooterTemplate/FooterTemplate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className="App">
      <Body/>
    </div>
    <FooterTemplate/>

    </>
  )
}

export default App

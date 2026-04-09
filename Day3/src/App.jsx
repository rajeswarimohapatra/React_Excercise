import { useState } from 'react'

import './App.css'
import StatusCard from './StatusCard'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <button className="btn">Click Me</button>
    </div>
    <br />
    <br />
    <StatusCard type="success" />
    <StatusCard type="error" />
    <br />
    <br />
    <div>
      <Header />
      <h1>Content</h1>
      <Footer />
    </div>
    <br />
    <br />
    <Navbar />
    </>
  )
}

export default App

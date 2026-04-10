import { useState } from 'react'
import './App.css'
import StatusCard from './StatusCard'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="container">

        
        <button className="btn">Click Me</button>

        <div className="card">
          <StatusCard type="success" />
          <StatusCard type="error" />
        </div>

        <Header />
        <div className="content">Content</div>
        <Footer />
        <br />
        <br />

       
        <Navbar />

      </div>
    </div>
  )
}

export default App
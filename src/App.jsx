import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css-js/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h1></h1>
        </a>
        <h1>
          I changed the master code
        </h1>
        <h2>Ok I seen your code and i add to it</h2>
      </div>
    </>
  )
}

export default App

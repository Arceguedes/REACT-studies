import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimaryInput from './components/input/PrimaryInput'

function App() {
  const [email, setEmail] = useState("")

  return(
  <div className='container'>
    <PrimaryInput
      value={email}
      onChange={event => setEmail(event.target.value)} 
      name="email"
      label="Digite seu Email "
      />
  </div>
  )
}

export default App

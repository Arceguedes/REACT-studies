import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimaryInput from './components/input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'

function App() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")


  return(
  <div className='container'>
    <form>
    <div className='name-form-container'>
      <PrimaryInput
        value={firstName}
        onChange={event => setFirstName(event.target.value)} 
        name="firstName"
        label="First Name"
        placeholder='Joana'
        />
      <PrimaryInput
        value={secondName}
        onChange={event => setSecondName(event.target.value)} 
        name="SecondName"
        label="Second Name"
        placeholder='Dark'
        />
      </div>
    <Spacer height="4"/>
    <PrimaryInput
      value={email}
      onChange={event => setEmail(event.target.value)} 
      name="email"
      label="Email"
      placeholder='joanadark@react.com'
      />
    <Spacer height="4"/>
    <Button colorScheme='green' width="100%" marginTop="4">Enviar</Button>
    </form>
  </div>
  )
}

export default App

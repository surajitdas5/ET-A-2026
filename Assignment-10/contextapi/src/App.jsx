import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import LogIn from './pages/LogIn'
import { LoginProvider } from './context/LognContext'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // function toggleLogIn(){
  //   setIsLoggedIn(!isLoggedIn)
  // }

  return (
    // <>
    //   <Navbar isLoggedIn={isLoggedIn} />
    //   <LogIn isLoggedIn={isLoggedIn} toggleLogIn={toggleLogIn} />
    // </>

    <LoginProvider>
      <Navbar />
      <LogIn />
    </LoginProvider>
  )
}

export default App

import React, { useContext } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './context/auth-context'

const App = () => {
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </React.Fragment>
  )
}

export default App

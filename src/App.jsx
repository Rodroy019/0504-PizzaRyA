import React from 'react'
import NavBar from '../src/components/NavBar'
import Rutas from '../src/routes/index'
import PizzaContextProvider from '../src/contexts/PizzaContext'

const App = () => {
  return (
    <PizzaContextProvider>
      <NavBar />
      <Rutas />
    </PizzaContextProvider>
  )
}

export default App

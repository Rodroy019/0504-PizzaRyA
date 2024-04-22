import { createContext, useEffect, useState } from 'react'
const URL = '../public/pizzas.json'

export const PizzaContext = createContext()

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setPizzas(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContextProvider

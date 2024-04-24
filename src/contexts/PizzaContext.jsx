import { createContext, useEffect, useState } from 'react'
const URL = '../public/pizzas.json'

export const PizzaContext = createContext()

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [carroPizzas, setCarroPizzas] = useState([])
  const [total, setTotal] = useState(0)

  const addPizza = (id) => {
    const updatedCarroPizzas = carroPizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, cantidad: pizza.cantidad + 1 }
      }
      return pizza
    })
    setCarroPizzas(updatedCarroPizzas)
    const newTotal = updatedCarroPizzas.reduce((total, pizza) => {
      return total + pizza.cantidad * pizza.price
    }, 0)
    setTotal(newTotal)
  }

  const removePizza = (id) => {
    const updatedCarroPizzas = carroPizzas.map((pizza) => {
      if (pizza.id === id && pizza.cantidad > 0) {
        return { ...pizza, cantidad: pizza.cantidad - 1 }
      }
      return pizza
    })
    setCarroPizzas(updatedCarroPizzas)
    const newTotal = updatedCarroPizzas.reduce((total, pizza) => {
      return total + pizza.cantidad * pizza.price
    }, 0)
    setTotal(newTotal)
  }

  const getData = async () => {
    try {
      const data = await fetch(URL).then(res => res.json())
      setPizzas(data)
      setCarroPizzas(data.map((item) => {
        return { ...item, cantidad: 0 }
      }))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, carroPizzas, setCarroPizzas, total, setTotal, addPizza, removePizza }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContextProvider

import { createContext, useEffect, useState } from 'react'
const URL = '../public/pizzas.json'

export const PizzaContext = createContext()

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [carroPizzas, setCarroPizzas] = useState([])
  const [total, setTotal] = useState(0)

  const addPizza = (id) => { // Función para agregar una pizza al carrito según su ID
    const updatedCarroPizzas = carroPizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, cantidad: pizza.cantidad + 1 }
      }
      return pizza
    })
    setCarroPizzas(updatedCarroPizzas) // Calcula el nuevo total sumando el precio de todas las pizzas en el carrito
    const newTotal = updatedCarroPizzas.reduce((total, pizza) => {
      return total + pizza.cantidad * pizza.price
    }, 0)
    setTotal(newTotal)
  }

  const removePizza = (id) => { // Función para eliminar una pizza del carrito según su ID
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

  const allClean = () => { // Función para limpiar las cantidad de las pizzas en el carrito a cero
    const updatedCarroPizzas = carroPizzas.map((pizza) => {
      return { ...pizza, cantidad: 0 }
    })
    setCarroPizzas(updatedCarroPizzas)
    setTotal(0)
  }

  const getData = async () => { // Función para obtener datos de pizzas desde el archivo JSON
    try {
      const data = await fetch(URL).then(res => res.json())
      setPizzas(data)
      setCarroPizzas(data.map((item) => { // Establece las pizzas en el carrito con cantidad inicial cero
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
    <PizzaContext.Provider value={{ pizzas, carroPizzas, total, addPizza, removePizza, allClean }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContextProvider

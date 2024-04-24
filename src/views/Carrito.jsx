import { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { carroPizzas, total, addPizza, removePizza } = useContext(PizzaContext)

  let contenido

  if (total === 0) {
    contenido = (
      <div className='container-fluid col-7'>
        <div className='mt-5 p-5 bg-light-subtle border d-flex flex-row align-items-center'>
          <img src='../src/assets/images/logo-pizza.png' height='200' alt='Imagen carro vacío' />
          <div className='d-flex flex-column'>
            <h3>Aún no has agregado alguna pizza</h3>
            <h5 className='pb-4'>Revisa nuestras variedades y selecciona una</h5>
            <Link to='/' className='btn btn-warning col-4 me-auto ms-auto'>
              Volver a inicio
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    contenido = (
      <div className='container-fluid col-7'>
        <h2>Tu carrito de compras:</h2>
        {carroPizzas.map((pizza) => (
          <div key={pizza.id}>
            <p>{pizza.nombre} - Cantidad: {pizza.cantidad}</p>
            <button onClick={() => addPizza(pizza.id)}>Agregar</button>
            <button onClick={() => removePizza(pizza.id)}>Quitar</button>
          </div>
        ))}
        <p>Total: ${total}</p>
      </div>
    )
  }

  return (
    <div>
      {contenido}
    </div>
  )
}

export default Carrito

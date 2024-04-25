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
          <img src='../src/assets/images/logo-pizza.png' height='200px' alt='Imagen carro vacío' />
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
        <div className='mt-3 p-3 bg-light'>
          <ul className='list-group list-group-flush'>
            {carroPizzas.map((pizza) => {
              return pizza.cantidad !== 0
                ? (
                  <li key={pizza.id} className='list-group-item'>
                    <div className='d-flex flex-row align-items-center'>
                      <img height='50px' src={pizza.img} />
                      <h5 className='ps-2 m-0 text-capitalize'>{pizza.name}</h5>
                      <h5 className='ms-auto pe-2 m-0'>$ {(pizza.price / 1000).toFixed(3)}</h5>
                      <button className='btn btn-danger' onClick={() => removePizza(pizza.id)}>-</button>
                      <h5 className='px-3 m-0 text-center'>{pizza.cantidad}</h5>
                      <button className='btn btn-secondary' onClick={() => addPizza(pizza.id)}>+</button>
                    </div>
                  </li>
                  )
                : ''
            })}
          </ul>
          <hr />
          <div className='text-center'>
            <h2 className='pb-3'>Total a Pagar: $ {(total / 1000).toFixed(3)}</h2>
            <div className='d-flex justify-content-center column-gap-5'>
              <button type='button' className='btn btn-primary'>Ir a Pagar</button>
            </div>
          </div>
        </div>
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

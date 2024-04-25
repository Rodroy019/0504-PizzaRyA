import { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import { Link } from 'react-router-dom'

const Compra = () => {
  const { allClean } = useContext(PizzaContext)
  return (
    <>
      <div className='image-container'>
        <img src='../src/assets/images/compra-confirmada.jpg' alt='Compra Realizada' />
        <Link className='btn btn-danger' to='/' onClick={() => allClean()}>¡Realizar Nuevo Pedido!</Link>
      </div>

    </>
  )
}

export default Compra

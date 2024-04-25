import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    // Se renderiza el error 404 cuando algo no encontra la ruta
    <>
      <div className='image-container'>
        <img src='../src/assets/images/404.png' alt='Imagen de Ruta no Encontrada' className='image-404' />
        <Link className='btn btn-danger' to='./'>¡Back to Home!</Link>
      </div>

    </>
  )
}

export default NotFound

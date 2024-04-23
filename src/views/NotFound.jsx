import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='image-container'>
        <img src='../src/assets/images/404.png' alt='Imagen de Ruta no Encontrada' className='image-404' />
        <Link className='btn btn-danger' to='./'>¡Back to Home!</Link>
      </div>

    </>
  )
}

export default NotFound

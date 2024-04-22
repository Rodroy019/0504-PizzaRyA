import { Routes, Route } from 'react-router-dom'
import { Pizza, Home, NotFound, Carrito } from '../views'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Pizza />} />
        <Route path='/carrito/:name' element={<Carrito />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Rutas

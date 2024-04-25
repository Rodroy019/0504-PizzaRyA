import { Routes, Route } from 'react-router-dom'
import { Pizza, Home, NotFound, Carrito, Compra } from '../views'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza/:name' element={<Pizza />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/compra' element={<Compra />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Rutas

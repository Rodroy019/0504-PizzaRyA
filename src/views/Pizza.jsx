import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PizzaContext } from '../contexts/PizzaContext'
import { Card, ListGroup, Button } from 'react-bootstrap'
import NotFound from './NotFound'

const Pizza = () => {
  const { name } = useParams()
  const { carroPizzas, addPizza } = useContext(PizzaContext)
  const selectedPizza = carroPizzas.find(pizza => pizza.name === name)

  if (!selectedPizza) { // Al no tener info se cargara error 404
    return <NotFound />
  }

  return (
    // se rendizara la card de forma vertical, mostrando la imagen al lado izquierdo
    // y la info de la pizza al lado derecho en forma de cascada
    // los botones, Volver redirige al inicio y agregar usa la funcion addPizza
    <div className='container py-4'>
      <div className='card' style={{ width: '60rem' }}>
        <div className='row'>
          <div className='col-6'>
            <Card.Img
              variant='top'
              src={selectedPizza.img}
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className='col-6'>
            <Card.Body>
              <Card.Title><h2 className='text-center text-uppercase'>Pizza {selectedPizza.name}</h2></Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>
                {selectedPizza.desc}
              </ListGroup.Item>
              <ListGroup.Item>
                <ul>
                  {selectedPizza.ingredients.map((ing) => (
                    <li key={ing} className='text-capitalize'>{ing}</li>
                  ))}
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='row justify-content-around'>
                  <div className='col-4 active'>
                    Precio: $ {selectedPizza.price}
                  </div>
                  <div className='col-4'>
                    <div className='row'>
                      <Link type='button' className='btn btn-warning' to='/'>Volver</Link>
                      <Button variant='danger' onClick={() => addPizza(selectedPizza.id)}>Agregar</Button>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza

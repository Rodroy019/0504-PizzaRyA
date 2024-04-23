import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PizzaContext } from '../contexts/PizzaContext'
import { Card, ListGroup, Button } from 'react-bootstrap'
import NotFound from './NotFound'

const Pizza = () => {
  const { name } = useParams() // Se obtine el parametro 'name' de la URL
  const { pizzas } = useContext(PizzaContext) // Se obtine el contexto con la lista de pizzas
  // Encontrar la pizza especifica por su nombre
  const selectedPizza = pizzas.find(pizza => pizza.name === name)

  // Si no se encuentra la pizza, mostrar mensaje de error
  if (!selectedPizza) {
    return <NotFound />
  }

  // Renderiza el componente solo si el nombre de la pizza coincide
  return (
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
              <Card.Title><h2>{selectedPizza.name}</h2></Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>
                Descripción: {selectedPizza.desc}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredientes:
                <ul>
                  {selectedPizza.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='row justify-content-between'>
                  <div className='col-4 active'>
                    Precio: $ {selectedPizza.price}
                  </div>
                  <div className='col-4'>
                    <div className='row'>
                      <Link className='btn btn-warning' to='/'>Volver</Link>
                      <Button variant='danger'>Agregar</Button>
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

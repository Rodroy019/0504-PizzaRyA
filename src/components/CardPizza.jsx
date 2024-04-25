import { useContext } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PizzaContext } from '../contexts/PizzaContext'

const CardPizza = ({ pzz }) => {
  const { addPizza } = useContext(PizzaContext)
  const navigate = useNavigate()

  const HandleClick = (namePizza) => {
    // Función navigate para redirigir a la vista de Pizzas con su detalle
    navigate(`/pizza/${namePizza}`)
  }
  return (
    // Se renderiza las cartas con la info correspondiente
    <div className='col-sm-6 col-lg-3 mb-4 mt-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={pzz.img} />
        <Card.Body>
          <Card.Title className='text-capitalize'>{pzz.name}</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>
            Ingredientes:
            <ul>
              {pzz.ingredients.map((ing) => (
                <li key={ing} className='text-capitalize'>{ing}</li>
              ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            Precio $ {pzz.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <div className='row justify-content-around'>
              <div className='col-5'><Button variant='primary' onClick={() => HandleClick(pzz.name)}>Ver Mas</Button>
              </div>
              <div className='col-5'><Button variant='danger' onClick={() => addPizza(pzz.id)}>Agregar</Button></div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default CardPizza

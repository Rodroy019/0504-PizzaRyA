import { Card, ListGroup, Button } from 'react-bootstrap'

const CardPizza = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item>
          Ingredientes:
        </ListGroup.Item>
        <ListGroup.Item>
          Precio $
          <div>
            <Button variant='primary'>Ver Mas</Button>
            <Button variant='danger'>Agregar</Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CardPizza

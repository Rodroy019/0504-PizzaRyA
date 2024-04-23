import CardPizza from '../components/CardPizza'
import { useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import Container from 'react-bootstrap/Container'

const Home = () => {
  const { pizzas } = useContext(PizzaContext)
  return (
    <section>
      <div className='banner'>
        <h1>Pizzería RyA</h1>
        ¡Tenemos las mejores pizzas que puedas comer!
      </div>
      <Container fluid>
        <div className='row'>
          {pizzas.map(pzz => (
            <CardPizza key={pzz.id} pzz={pzz} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Home

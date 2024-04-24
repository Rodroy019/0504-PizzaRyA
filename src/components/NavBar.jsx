import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { PizzaContext } from '../contexts/PizzaContext'

const NavBar = () => {
  const HandleMenu = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
  const { total } = useContext(PizzaContext)

  return (
    <Navbar expand='lg' bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href=''>
          <NavLink className={HandleMenu} to='./'>
            <img src='../src/assets/images/logo-pizza.png' height='40' className='d-inline-block' alt='Logo' /> Pizzas Rya
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto text-white'>
            <NavLink className={HandleMenu} to='./carrito'>
              <i className='fa-solid fa-cart-shopping' /> Total: $ {total}
            </NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

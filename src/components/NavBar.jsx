import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const HandleMenu = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

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
              <i class='fa-solid fa-cart-shopping' /> Total: $ XXXXX
            </NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

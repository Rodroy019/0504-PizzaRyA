import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  // const HandleMenu = ({ isActive }) => isActive ? 'nav-item nav-link avtive' : 'nav-item nav-link'

  return (
    <header>
      <Navbar expand='lg' bg='primary' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href=''>
            <img src='../src/assets/images/logo-pizza.png' height='60' className='d-inline-block align-center' alt='LogoPizza' />
            {' '} <Link to='./'>Pizzas Rya</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

            <Nav className='ms-auto text-white'>
              <p><i class='fa-solid fa-cart-shopping' /> Total: $ XXXXX</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar

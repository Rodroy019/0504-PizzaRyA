import { Container, Nav, Navbar } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'

const NavBar = () => {
  // const HandleMenu = ({ isActive }) => isActive ? 'nav-item nav-link avtive' : 'nav-item nav-link'

  return (
    <Navbar expand='lg' bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href=''>
          <img src='' height='40' className='d-inline-block align-top' alt='LogoPizza' />
          {' '} Pizzas Rya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <img src='' height='40' className='d-inline-block' alt='Logo' />
            <p>Total: $ XXXXX</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

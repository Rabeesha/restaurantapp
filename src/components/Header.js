import React from 'react'
import{Navbar,Container,Nav,Col,Toggle} from 'react-bootstrap'

function Header() {
    return (
  //     <Col sm={3} md={8} lg={12} xl={3}>
  //         <Navbar bg="dark" variant="dark" sticky="top">
  //         <Container>
  //         <Navbar.Brand href="#home">RESTURANT</Navbar.Brand>
  //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  // <Navbar.Collapse id="responsive-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link href="#home">Home</Nav.Link>
  //           <Nav.Link href="#features">Features</Nav.Link>
  //           <Nav.Link href="#pricing">Pricing</Nav.Link>
  //         </Nav>
  //         </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //     </Col>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Restaurants</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



    )
}

export default Header

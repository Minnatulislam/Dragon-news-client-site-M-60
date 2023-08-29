import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Button } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  return (
    <Navbar collapseOnSelect className=' sticky-top' expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand><Link to="/" className='text-dark text-decoration-none fs-3 fw-bold'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pricing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Link to='/profile' >
              {
                user?.photoURL ?
                  <Image
                    style={{ height: "30px" }} roundedCircle
                    src={user?.photoURL}>
                  </Image>
                  :
                  <FaUserCircle className='fs-4'></FaUserCircle>
              }
            </Link>
            <>
              {
                user?.uid ?
                  <>
                  <span className='me-2'>{user?.displayName}</span>
                  <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                  </>

                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
            </>
         
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;



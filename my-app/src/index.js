import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiSearch, BiCart, BiLogoPinterest, BiLogoInstagram, BiSolidHome } from 'react-icons/bi';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><BiLogoFacebookCircle /></Nav.Link>
        <Nav.Link><BiLogoTwitter/></Nav.Link>
        <Nav.Link><BiLogoPinterest/></Nav.Link>
        <Nav.Link><BiLogoInstagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><BiSolidHome/> </Nav.Link>
        <Nav.Link><BiSearch/> </Nav.Link>
        <Nav.Link><BsFillPersonFill /> </Nav.Link>
        <NavDropdown title={<BiCart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.Item>Your cart is empty.</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <div className="container">
    <div className="row">
      <div className="col text-center py-4">
        <img src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" className="img-fluid rounded mx-auto d-block py-1" alt="Island Snow Logo" />
      </div>
    </div>
  </div>
);

const MiddleMenu = () => (
  <div className="container">
    <div className="row justify-content-center pt-4">
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>Men</strong></div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>Women</strong></div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>Kids</strong></div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>Brands</strong></div>
        </div>
      </div>
      <div className="col-1"><strong>Search</strong>
      </div>
    </div>
  </div>
);

const FullWidthImage = () => (
  <div className="row justify-content-center">
    <img src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" className="img-fluid pt-3" />
  </div>
);

const FooterMenu = () => (
  <footer style={{ backgroundColor: '#292929', color: 'white' }}>
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <h5>Navigation</h5>
          <hr style={{ borderTop: '1px solid white' }} />
          <p>About us</p>
          <p>Employment</p>
          <p>Videos</p>
        </div>
        <div className="col">
          <h5>Main Menu</h5>
          <hr style={{ borderTop: '1px solid white' }} />
          <a href="#" className="text-decoration-none text-white">Men</a><br />
          <a href="#" className="text-decoration-none text-white">Women</a><br />
          <a href="#" className="text-decoration-none text-white">Kids</a>
        </div>
        <div className="col">
          <h5>Connect</h5>
          <hr style={{ borderTop: '1px solid white' }} />
          <a href="#" className="text-decoration-none text-white">Sign up for the latest updates</a>
          <input type="text" placeholder="Email Address" className="form-control mb-2" />
          <button className="btn btn-dark">Join</button>
        </div>
      </div>
    </div>
  </footer>
);

const IslandSnow = () => (
  <div>
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
    <FooterMenu />
  </div>
);

ReactDOM.render(<IslandSnow />, document.getElementById('root'));

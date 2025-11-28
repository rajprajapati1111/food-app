<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
<<<<<<< HEAD
  
  const [nav, setNav] = useState(false);

  
=======
  const [nav, setNav] = useState(false);

>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

<<<<<<< HEAD
  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);
=======
  window.addEventListener("scroll", changeValueOnScroll);
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083

  return (
    <header>
      <Navbar
<<<<<<< HEAD
        collapseOnSelect
        expand="lg"
        className={`${nav ? "sticky" : ""} navbar-blur`}
      >
        <Container>
          {/* ✅ FIXED — No nested <a> */}
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>

              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>

              <Nav.Link as={Link} to="/addtocart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
              
=======
  collapseOnSelect
  expand="lg"
  className={`${nav === true ? "sticky" : ""} navbar-blur`}
>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/signup"> sign up </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

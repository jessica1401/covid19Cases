import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './NavBar.css'

export default function NavBAr() {
  const covid19 = "https://www.bevanfoundation.org/wp-content/uploads/2020/03/2B5J48F-e1584366568355.jpg"
  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{background: 'black'}} variant="dark">
  <Navbar.Brand className="m-2" exact href="/">C<img alt="CovisImg" className="virusImg"  src={covid19}></img>VID-19 HELPLINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link exact href="/">World Status</Nav.Link>
    <Nav.Link exact href="/india-status">India Status</Nav.Link>
      <Nav.Link exact href="/precautions">Precations</Nav.Link>
    </Nav>
    <Nav className="m-8">
      <Nav.Link href="/login">Log In</Nav.Link>
      <Nav.Link eventKey={2} href="/signup">
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}

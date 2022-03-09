import React, { Component } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import logo from "../assets/kindpng_1290643.png";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="blue" variant="blue">
        <Container>
          {/* Create navbar with logo aligned */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="70"
              weight="70"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          {/* Create button if navbar is collapsed*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Merge right automatically */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

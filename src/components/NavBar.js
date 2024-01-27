import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaHome } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { FaLaptopCode } from 'react-icons/fa'
import { FaFileAlt } from 'react-icons/fa'
import { IoChatbubbles } from 'react-icons/io5'
import { FaPenNib } from 'react-icons/fa6'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent p-4">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/">
              <FaHome />
              Home
            </Nav.Link>
            <Nav.Link href="/about">
              <IoPerson />
              About
            </Nav.Link>
            <Nav.Link href="/projects">
              <FaLaptopCode />
              Projects
            </Nav.Link>
            <Nav.Link href="/resume">
              <FaFileAlt />
              Resume
            </Nav.Link>
            <Nav.Link href="contacts">
              <IoChatbubbles />
              Contact Me
            </Nav.Link>
            <Nav.Link
              href="https://giacomodifa.github.io/BlogGDF/"
              target="blank"
            >
              <FaPenNib />
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

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
import { Link } from 'react-router-dom'

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
            <Link to="/" className="nav-link">
              <FaHome />
              Home
            </Link>
            <Link to="/about" className="nav-link">
              <IoPerson />
              About
            </Link>
            <Link to="/projects" className="nav-link">
              <FaLaptopCode />
              Projects/Pubblications
            </Link>
            <Link to="/resume" className="nav-link">
              <FaFileAlt />
              Resume
            </Link>
            <Link to="/contacts" className="nav-link">
              <IoChatbubbles />
              Contact Me
            </Link>
            <Link
              to="https://giacomodifa.github.io/BlogGDF/"
              target="blank"
              className="nav-link"
            >
              <FaPenNib />
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

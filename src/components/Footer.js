import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid>
      <Row className="p-4">
        <Col md="4">Designed and Developed by Giacomo Di Fabrizio</Col>
        <Col md="4">Copyright © {year} GDF</Col>
        <Col md="4">
          <a href="https://github.com/GiacomoDiFa" className="p-2">
            <FaGithub color="black" />
          </a>
          <a
            href="https://www.instagram.com/giacomodifabrizio_/"
            className="p-2"
          >
            <LuInstagram color="black" />
          </a>
          <a
            href="https://www.facebook.com/giacomo.difabrizio/?locale=it_IT"
            className="p-2"
          >
            <FaFacebook color="black" />
          </a>
          <a href="https://www.youtube.com/@difa3278" className="p-2">
            <FaYoutube color="black" />
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer

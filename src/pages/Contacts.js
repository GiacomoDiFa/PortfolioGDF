import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'


function Contacts() {
  const textStyle = {
    fontFamily: "Source Sans Pro sans-serif",
    fontSize: '20px', 
    lineHeight: '26.6px', 
    textAlign: 'center', 
    letterSpacing: 'normal', 
    color: '#282d38' 
  }

  const titleText = {
    fontFamily: "Source Sans Pro sans-serif", 
    fontSize: '48px', 
    lineHeight: '67.2px', 
    textAlign: 'center', 
    letterSpacing: 'normal', 
    color: '#282d38'
  }

  return <Container className='' style={{ height: "100vh" }}>
    <Row className='justify-content-center '><h1 className='mt-5 mb-3' style={titleText}>Contact me</h1></Row>
    <Row className=''><p style={textStyle}>If you'd like to talk about a project you want help with or chat about anything, just drop me a message by email or in my DMs.</p></Row>
    <Row className=''>
      <Col className=''>
        <Row className='d-flex justify-content-center' style={textStyle}>Email</Row>
        <Row className='d-flex justify-content-center' style={textStyle}>giacomodfabrizio@gmail.com</Row>
      </Col>
      <Col className=''>
        <Row className='d-flex justify-content-center' style={textStyle}>Phone</Row>
        <Row className='d-flex justify-content-center' style={textStyle}>(+39) 3892530814</Row>
      </Col>
    </Row>
    <Row>
      <Col style={textStyle}>Socials</Col>
    </Row>
    <Row className=''>
      <Col>
        <a
          href="https://www.instagram.com/giacomodifabrizio_/"
          className="p-2"
        >
          <LuInstagram color="black" size={30} />
        </a>
        <a
          href="https://www.facebook.com/giacomo.difabrizio/?locale=it_IT"
          className="p-2"
        >
          <FaFacebook color="black" size={30} />
        </a>
        <a href="https://github.com/GiacomoDiFa" className="p-2">
          <FaGithub color="black" size={30} />
        </a>
        <a href="https://www.youtube.com/@difa3278" className="p-2">
          <FaYoutube color="black" size={30} />
        </a>
      </Col>
    </Row>
  </Container>
}

export default Contacts

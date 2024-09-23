import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Lottie from 'react-lottie'
import programmer_animation from '../assets/programmer_animation.json'

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: programmer_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Container style={{ height: "100vh" }}>
    <Row>
      <Col md='3'></Col>
      <Col md='6'>
        <Row className='justify-content-center '><h1 className='mt-5 mb-3' style={{ fontFamily: "Source Sans Pro sans-serif", fontSize: '48px', lineHeight: '67.2px', textAlign: 'center', letterSpacing: 'normal', color: '#282d38' }}>Giacomo Di Fabrizio</h1></Row>
        <Row className='justify-content-center '><p style={{ fontFamily: "Source Sans Pro sans-serif", fontSize: '20px', lineHeight: '26.6px', textAlign: 'center', letterSpacing: 'normal', color: '#282d38' }}>I'm a developer and Master's Degree student. I hold a Bachelor's Degree in Applied Computer Science from the University of Urbino "Carlo Bo".
          As a developer, I have a deep passion for coding and creating clean, intuitive interfaces. I'm also a flexible team player who easily fits into any group.
          When I'm not working on some project I'm probably running, jumping rope or doing calisthenics.</p> </Row>
        <Row className='justify-content-center'><Lottie options={defaultOptions} height={300} width={300}></Lottie></Row>
      </Col>
      <Col md='3'></Col>
    </Row>
  </Container>
}

export default Home

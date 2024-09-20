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

  return <Container>
    <Row>
    <Col md='3'></Col>
    <Col md='6'>
    <Row className='justify-content-center '><h1 style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Giacomo Di Fabrizio</h1></Row>
    <Row className='justify-content-center '><p style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'20px', lineHeight:'26.6px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>I'm a full-stack developer with great experience and passion for coding and building plain interfaces. I have a manic love for great high-loaded projects. Plus, I'm an easy-going person and fit in any team. I work remotely and save your budget on my workplace. So, if you have a complicated task, you've found the right person.</p> </Row>
    <Row className='justify-content-center'><Lottie options={defaultOptions} height={300} width={300}></Lottie></Row>
    </Col>
    <Col md='3'></Col>
    </Row>
  </Container>
}

export default Home

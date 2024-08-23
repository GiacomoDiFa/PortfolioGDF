import React from 'react'
import CardProject from '../components/CardProject'
import { Col, Container, Row } from 'react-bootstrap'
import CardPublications from '../components/CardPubblications'

function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <Row>
        <Col md="6" xs="12" className="pt-2 pb-2">
          <CardProject />
        </Col>
        <Col md="6" xs="12" className="pt-2 pb-2">
          <CardProject />
        </Col>
        <Col md="6" xs="12" className="pt-2 pb-2">
          <CardProject />
        </Col>
        <Col md="6" xs="12" className="pt-2 pb-2">
          <CardProject />
        </Col>
      </Row>
      <h1 className="mt-2">Pubblications</h1>
      <Row>
        <CardPublications
          title="An IoT Virtual Sensor for Indoor Health Risk Assessment"
          authors="L. Calisti, P. Capellacci, G. Schiavano, A. Conti, G. Amagliani, C. Papalini, G. Brandi, E. Lattanzi"
          year="2023"
          status="Being printed - AC 2023"
        />
        <CardPublications
          title="An IoT Virtual Sensor for Indoor Health Risk Assessment"
          authors="L. Calisti, P. Capellacci, G. Schiavano, A. Conti, G. Amagliani, C. Papalini, G. Brandi, E. Lattanzi"
          year="2023"
          status="Being printed - AC 2023"
        />
      </Row>
    </Container>
  )
}

export default Projects

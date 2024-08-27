import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <Container>
      <Row className="d-inline">
        <Col></Col>
        For see my <b className="ps-0 pe-0">resume</b>, click the following
        button
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Button className="ps-0 pe-0 bg-warning border-warning">
            <Link
              className="ps-5 pe-5 pt-2 pb-2"
              to={'/CV_GiacomoDiFabrizio.pdf'}
              target="_blank"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Resume
            </Link>
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Row className="" style={{ height: '530px' }}></Row>
    </Container>
  )
}

export default Resume

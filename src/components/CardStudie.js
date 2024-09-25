import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function CardStudie({ title, istitute, thesis, location, finalgrade, duration }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardStyle = {
    backgroundColor: isHovered ? '#e0f7ff' : 'light',
    borderColor: isHovered ? '#009999' : '',
    transition: 'all 0.3s ease-in-out',
  }

  const titleStyle = {
    color: isHovered ? '' : '#101214',
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 'bold',
  }

  const textStyle = {
    color: isHovered ? '#009999' : '#73808D',
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: '400',
    textAlign: "start",

  }

  const textUniversityStyle = {
    color: isHovered ? '#009999' : '#73808D',
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 'bold',
    textAlign: "start",

  }

  return (
    <Card
      bg="light"
      text="dark"
      className="mb-2"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Body>
        <Row>
          <Col>
            <Card.Title style={titleStyle}>
              <Row>
                <Col md='3' style={{ borderColor: "#009999", borderWidth: "4px", borderStyle: "solid", fontSize: isMobile ? '20px' : '20px', color: '#73808d', textAlign: "center", lineHeight: "auto", height: "auto", letterSpacing: "0.6px", boxShadow: "none", borderRadius: "40px", width: "auto" }}>{duration}</Col>
                <Col md='9' style={{ textAlign: "start" }}>{title}</Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <Row>
                {!isMobile && <Col md='3' style={{ borderWidth: "4px", borderStyle: "solid", backgroundColor: "red", fontSize: isMobile ? '20px' : '20px', color: '#73808D', textAlign: "center", lineHeight: "auto", height: "auto", letterSpacing: "0.6px", boxShadow: "none", borderRadius: "40px", width: "auto", visibility: "hidden", fontWeight: "bold" }}>{duration}</Col>}
                <Col md='9'>
                  {istitute && <div style={textUniversityStyle}>{istitute}</div>}
                  {thesis && <div style={textStyle}>Thesis: {thesis}</div>}
                  {finalgrade && <div style={textStyle}>Final grade: {finalgrade}</div>}
                  {location && <div style={textStyle}>{location}</div>}
                </Col>
              </Row>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

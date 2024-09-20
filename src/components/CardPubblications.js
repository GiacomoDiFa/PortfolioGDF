import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { PiMedalFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function CardPublications({ title, authors, year, status, link }) {
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
  }

  return (
    <Link to={link} style={{textDecoration:"none"}}>
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
          {/* Icon column */}
          <Col
            xs="1"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="">
              <PiMedalFill size={40} />
            </div>
          </Col>

          {/* Details column */}
          <Col>
            <Card.Title style={titleStyle}>{title}</Card.Title>
            <Card.Text>
              <div style={textStyle}>{authors}</div>
              <div style={textStyle}>{year}</div>
              <div style={textStyle}>{status}</div>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </Link>
  )
}

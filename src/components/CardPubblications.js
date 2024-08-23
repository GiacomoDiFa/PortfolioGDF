import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { PiMedalFill } from 'react-icons/pi'

export default function CardPublications({ title, authors, year, status }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Card bg="light" text="dark" className="mb-2">
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
            <Card.Title
              style={{
                color: '#101214',
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: 'bold',
              }}
            >
              {title}
            </Card.Title>
            <Card.Text>
              <div
                style={{
                  color: '#73808D',
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '400',
                }}
              >
                {authors}
              </div>
              <div
                style={{
                  color: '#73808D',
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '400',
                }}
              >
                {year}
              </div>
              <div
                style={{
                  color: '#73808D',
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '400',
                }}
              >
                {status}
              </div>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

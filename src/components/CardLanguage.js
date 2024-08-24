import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

export function CardLanguageBlue({ icon }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    borderColor: isHovered ? '#000000' : '',
    backgroundColor: isHovered ? '#66ffff' : '',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <Card
      border="info"
      className="shadow"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export function CardLanguageGreen({ icon }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    borderColor: isHovered ? '#28a745' : '',
    backgroundColor: isHovered ? '#66ff66' : '',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <Card
      border="success"
      className="shadow"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export function CardLanguageYellow({ icon }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    borderColor: isHovered ? '#ffc107' : '',
    backgroundColor: isHovered ? '#ffff66' : '',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <Card
      border="warning"
      className="shadow"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

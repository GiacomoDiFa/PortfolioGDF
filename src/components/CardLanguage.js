import React from 'react'
import { Card } from 'react-bootstrap'

export function CardLanguageBlue({ icon }) {
  return (
    <Card border="info" className="shadow">
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export function CardLanguageGreen({ icon }) {
  return (
    <Card border="success" className="shadow">
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export function CardLanguageYellow({ icon }) {
  return (
    <Card border="warning" className="shadow">
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

import React from 'react'
import { Card } from 'react-bootstrap'

function CardLanguage({ icon }) {
  return (
    <Card border="info">
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardLanguage

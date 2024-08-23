import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

export default function CardProject(
  title,
  date,
  imageurl,
  githubLink,
  programmingLanguages
) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        width: isMobile ? '100%' : '100%',
        height: isMobile ? 'auto' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Card
        bg="light"
        text="dark"
        style={{
          width: isMobile ? '100%' : '100%',
          height: isMobile ? 'auto' : 'auto',
        }}
        className="mb-2"
      >
        <Card.Body
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card.Img
            alt="prova"
            src={logo}
            style={{
              backgroundColor: 'red',
              width: isMobile ? '100%' : '512px',
              height: isMobile ? 'auto' : '310px',
            }}
          ></Card.Img>
        </Card.Body>
      </Card>
      <h1
        style={{
          color: '#101214',
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 'bold',
        }}
      >
        Project name
      </h1>
      <h3
        style={{
          color: '#73808D',
          fontSize: isMobile ? '16px' : '20px',
          fontWeight: '400',
        }}
      >
        Project Description
      </h3>
      <Link to={githubLink}>
        <FaGithub size={40} color="#73808D" />
      </Link>
    </div>
  )
}

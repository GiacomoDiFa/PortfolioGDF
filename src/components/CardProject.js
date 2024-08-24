import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'

/*TODO: Add the tecnologies and programing languages used */

export default function CardProject({
  title,
  description,
  imageUrl,
  githubLink,
  programmingLanguages,
  websiteLink,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isHovered, setIsHovered] = useState(false)
  const [isHoveredLink, setIsHoveredLink] = useState(false)
  const [isHoveredIcon, setIsHoveredIcon] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseLinkEnter = () => {
    setIsHoveredLink(true)
  }

  const handleMouseLinkLeave = () => {
    setIsHoveredLink(false)
  }

  const handleMouseIconEnter = () => {
    setIsHoveredIcon(true)
  }

  const handleMouseIconLeave = () => {
    setIsHoveredIcon(false)
  }

  return (
    <div
      style={{
        width: isMobile ? '100%' : '100%',
        height: isMobile ? 'auto' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            src={imageUrl}
            style={{
              backgroundColor: 'red',
              width: isMobile ? '100%' : '512px',
              height: isMobile ? 'auto' : '310px',
            }}
          />
        </Card.Body>
      </Card>
      <h1
        style={{
          color: '#101214',
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 'bold',
        }}
      >
        {title}
      </h1>
      <h3
        style={{
          color: isHovered ? '#009999' : '#73808D',
          fontSize: isMobile ? '16px' : '20px',
          fontWeight: '400',
          transition: 'color 0.3s ease',
        }}
      >
        {description}
      </h3>
      <Row>
        <Col>
          <Link
            to={githubLink}
            onMouseEnter={handleMouseIconEnter}
            onMouseLeave={handleMouseIconLeave}
          >
            <FaGithub
              size={40}
              color={
                isHovered && isHoveredIcon
                  ? '#0000CC'
                  : isHovered
                  ? '#009999'
                  : '#73808D'
              }
              style={{ transition: 'color 0.3s ease' }}
            />
          </Link>
        </Col>
        {websiteLink !== '' && (
          <Col>
            <Link
              to={websiteLink}
              onMouseEnter={handleMouseLinkEnter}
              onMouseLeave={handleMouseLinkLeave}
            >
              <IoIosLink
                size={40}
                color={
                  isHovered && isHoveredLink
                    ? '#0000CC'
                    : isHovered
                    ? '#009999'
                    : '#73808D'
                }
                style={{ transition: 'color 0.3s ease' }}
              />
            </Link>
          </Col>
        )}
      </Row>
    </div>
  )
}

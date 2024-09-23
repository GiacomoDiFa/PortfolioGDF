import React from 'react'
import CardProject from '../components/CardProject'
import { Col, Container, Row } from 'react-bootstrap'
import CardPublications from '../components/CardPubblications'
import pubblicationsJsonData from '../assets/pubblications.json'
import projectsJsonData from '../assets/projects.json'

function Projects() {
  return (
    <Container>
      <h1 className='mt-5 mb-3' style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Projects</h1>
      <Row>
        {projectsJsonData.projects.map((project) => (
          <Col md="6" xs="12" className="pt-2 pb-2">
            <CardProject
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              websiteLink={project.websiteLink}
              githubLink={project.githubLink}
              programmingLanguages={project.programmingLanguages}
            />
          </Col>
        ))}
      </Row>
      <h1 className="mt-5 mb-3" style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Pubblications</h1>
      <Row>
        {pubblicationsJsonData.pubblications.map((pubblication) => (
          <CardPublications
            key={pubblication.title}
            title={pubblication.title}
            authors={pubblication.authors}
            year={pubblication.year}
            status={pubblication.status}
            link={pubblication.link}
          />
        ))}
      </Row>
    </Container>
  )
}

export default Projects

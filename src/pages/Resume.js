import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import jobsJsonData from '../assets/jobs.json'
import studiesJsonData from '../assets/studies.json'
import CardJob from '../components/CardJobs'
import CardStudie from '../components/CardStudie'


function Resume() {
  return (
    <Container>
      <h1 className="mt-5 mb-3" style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Jobs</h1>
      <Row>{jobsJsonData.jobs.map((job)=>(
        <CardJob key={job.title} title={job.title} company={job.company} description={job.description} duration={job.duration} location={job.location}/>
      ))}</Row>
      <h1 className="mt-5 mb-3" style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Studies</h1>
      <Row>{studiesJsonData.studies.map((studie)=>(
        <CardStudie key={studie.title} title={studie.title} istitute={studie.istitute} description={studie.thesis} location={studie.location} finalgrade={studie.finalgrade} duration={studie.duration}/>
      ))}</Row>











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
    </Container>
  )
}

export default Resume

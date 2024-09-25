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
        <CardStudie key={studie.title} title={studie.title} istitute={studie.istitute} thesis={studie.thesis} location={studie.location} finalgrade={studie.finalgrade} duration={studie.duration}/>
      ))}</Row>






<Row className='mt-3'>
  <Col md='6' className='' style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'24px', lineHeight:'', textAlign:'start', letterSpacing:'normal', color:'#282d38'}}>Are you still curious about me?</Col>
  <Col md='6' className='d-flex justify-content-md-end justify-content-center'>
  <Button className="ps-0 pe-0 " style={{backgroundColor:"#009999", borderColor:"#009999"}}>
            <Link
              className="ps-5 pe-5"
              to={'/CV_GiacomoDiFabrizio.pdf'}
              target="_blank"
              style={{textDecoration: 'none', color: 'white',fontFamily:"Source Sans Pro sans-serif", fontSize:'20px', lineHeight:'', letterSpacing:'normal'}}
            >
              Resume
            </Link>
          </Button></Col>
</Row>






      
    </Container>
  )
}

export default Resume

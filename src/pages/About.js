import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import CardLanguage from '../components/CardLanguage'
import { SiFlutter, SiMacos } from 'react-icons/si'
import { DiDart } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { SiCsharp } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { FaRProject } from 'react-icons/fa6'
import { SiHaskell } from 'react-icons/si'
import { FaErlang } from 'react-icons/fa'
import { DiProlog } from 'react-icons/di'
import { TbSql } from 'react-icons/tb'
import { SiVisualstudiocode } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiPostman } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { FaDocker } from 'react-icons/fa'
import { FaWindows } from 'react-icons/fa'
import { FaLinux } from 'react-icons/fa'
import { FaAndroid } from 'react-icons/fa'
import Github from '../components/Github'

function About() {
  return (
    <Container>
      <Row>introduzione</Row>
      <Row className="justify-content-center p-2">
        <h1>Programming Languages</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<DiPython size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<SiCsharp size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<DiJava size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<DiJavascript1 size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<DiDart size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaRProject size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<SiHaskell size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaErlang size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<DiProlog size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<TbSql size={100} />} />
        </Col>
      </Row>
      <Row className="justify-content-center p-2">
        <h1>Tools</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<SiVisualstudiocode size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<DiMongodb size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaReact size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<SiPostman size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaDocker size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<SiFlutter size={100} />} />
        </Col>
      </Row>

      <Row className="justify-content-center p-2">
        <h1>Operating Systems</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaWindows size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaLinux size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<SiMacos size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguage icon={<FaAndroid size={100} />} />
        </Col>
      </Row>

      <Row className="justify-content-center p-2">
        <h1>Days I Code</h1>
      </Row>
      <Row className="justify-content-center p-2">
        <Github />
      </Row>
    </Container>
  )
}

export default About

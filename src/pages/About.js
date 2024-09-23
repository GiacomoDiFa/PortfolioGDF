import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  CardLanguageBlue,
  CardLanguageGreen,
  CardLanguageYellow,
} from '../components/CardLanguage'
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
      <Row className="justify-content-center p-2">
        <h1 className='mt-5 mb-3' style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Programming Languages</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<DiPython size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<SiCsharp size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<DiJava size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<DiJavascript1 size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<DiDart size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<FaRProject size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<SiHaskell size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<FaErlang size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<DiProlog size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageBlue icon={<TbSql size={100} />} />
        </Col>
      </Row>
      <Row className="justify-content-center p-2">
        <h1 className='mt-5 mb-3' style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Tools</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="3" xs="6" className="p-2">
          <CardLanguageGreen icon={<SiVisualstudiocode size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageGreen icon={<DiMongodb size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageGreen icon={<FaReact size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageGreen icon={<SiPostman size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageGreen icon={<FaDocker size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageGreen icon={<SiFlutter size={100} />} />
        </Col>
      </Row>

      <Row className="justify-content-center p-2">
        <h1 className='mt-5 mb-3' style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Operating Systems</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="3" xs="6" className="p-2">
          <CardLanguageYellow icon={<FaWindows size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageYellow icon={<FaLinux size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageYellow icon={<SiMacos size={100} />} />
        </Col>
        <Col md="3" xs="6" className="p-2">
          <CardLanguageYellow icon={<FaAndroid size={100} />} />
        </Col>
      </Row>

      <Row className="justify-content-center p-2">
        <h1 className='mt-5 mb-3' style={{fontFamily:"Source Sans Pro sans-serif", fontSize:'48px', lineHeight:'67.2px', textAlign:'center', letterSpacing:'normal', color:'#282d38'}}>Days I Code</h1>
      </Row>
      <Row className="justify-content-center p-2">
        <Github />
      </Row>
    </Container>
  )
}

export default About

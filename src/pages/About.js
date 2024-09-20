import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
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
import { IoVideocam } from 'react-icons/io5'
import { IoMusicalNotesSharp } from 'react-icons/io5'
import { GiJumpingRope } from 'react-icons/gi'
import { GrSwim } from 'react-icons/gr'
import Github from '../components/Github'
import giacomo from '../assets/giacomo.png'

function About() {
  return (
    <Container>
      <Row className=''>
            <h1>
              Who <b>I'm</b>
            </h1>
          </Row>
      <Row className='mt-2'>
      <Col md="6" className=''>
        <Image className='' alt='Giacomo' src={giacomo} thumbnail style={{width:"500px"}}/>
        </Col>
        <Col md="6">
          
          <Row>
            <Row className="text-start ms-2">
              Hi everyone I am{' '}
              <b className="ps-1" style={{ width: 'auto' }}>
                Giacomo Di Fabrizio.
              </b>
            </Row>
            <Row className="text-start d-inline ms-2">
              I am a developer and a Master Degree Student based in&nbsp;
              <b className="ps-0 pe-0 " style={{ width: 'auto' }}>
                Ca'Gallo (PU)
              </b>
              , a little town in the center of&nbsp;
              <b className="ps-0 pe-0" style={{ width: 'auto' }}>
                Italy
              </b>
              .
            </Row>
            <Row className="text-start ms-2">
              I've got a bachelor degree in Applied Computer Science from
              University of Urbino "Carlo Bo".
            </Row>
            <Row className="text-start pt-4 ms-2">
              Apart from coding, some other activities that I love to do!
            </Row>
            <Row className="pt-2">
              <Col md="3" xs="3" className="text-end">
                <IoVideocam size={30} />
              </Col>
              <Col md="9" xs="9" className="text-start">
                Filming Videos With My GoPro
              </Col>
            </Row>
            <Row>
              <Col md="3" xs="6" className=" text-end">
                <IoMusicalNotesSharp size={30} />
              </Col>
              <Col md="9" xs="6" className=" text-start">
                Dance
              </Col>
            </Row>
            <Row>
              <Col md="3" xs="6" className=" text-end">
                <GiJumpingRope size={30} />
              </Col>
              <Col md="9" xs="6" className=" text-start">
                Jump Rope
              </Col>
            </Row>
            <Row>
              <Col md="3" xs="6" className=" text-end">
                <GrSwim size={30} />
              </Col>
              <Col md="9" xs="6" className=" text-start">
                Swim
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center p-2">
        <h1>Programming Languages</h1>
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
        <h1>Tools</h1>
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
        <h1>Operating Systems</h1>
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
        <h1>Days I Code</h1>
      </Row>
      <Row className="justify-content-center p-2">
        <Github />
      </Row>
    </Container>
  )
}

export default About

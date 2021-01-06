import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import small_logo from '../../assets/images/logo2_Black.png';


export default class StoicPoetry extends React.Component {

  render() {
    return (
      <div className="about">
        <h3>about</h3>
        <Container className="about-body" fluid>
        <Row id="aboutRow">
          <Col>
            <span>we are a mask. we are an enigma. we are the crack in the mould.<br/>
              we are the beginning of the end. we are catalysts. we are explorers.<br/>
              we are intangible. we are omnipresent. <br/>
              we are beneath the surface. we are in the air you breathe.<br/>
              we are a sound. we are a sight. we are a feeling.<br/>
              we are lawyer malloy.<br/></span>
          </Col>
        </Row>
        <Row id="aboutLogo">
          <Col>
            <Image src={small_logo} fluid id="aboutSignOff" />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

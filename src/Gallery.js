import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './assets/stylesheets/Gallery.css';
import LMBlack from './assets/LM_black.png';


export default class Gallery extends React.Component {

  render() {
    return (
      <Container className="gallery-body" fluid>
          <h1>Gallery</h1>
        <Row>
          <Col md={4}>
            <Image src={LMBlack} fluid className="galleryImage" />
          </Col>
          <Col md={4}>
            <Image src={LMBlack} fluid className="galleryImage" />
          </Col>
          <Col md={4}>
            <Image src={LMBlack} fluid className="galleryImage" />
          </Col>
        </Row>
      </Container>
    );
  }
}

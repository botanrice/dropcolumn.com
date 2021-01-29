import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './assets/stylesheets/Gallery.css';
import LMBlack from './assets/LM_black.png';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
  return images;
}

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|JPG)$/));

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <h3>gallery</h3>
        <Container className="gallery-body" fluid>
        <Row>
          <Col md={6}>
            <Image src="http://assets.dropcolumn.com/DSC_0614.JPG" fluid className="galleryImage" />
          </Col>
          <Col md={6}>
            <Image src="http://assets.dropcolumn.com/DSC_0972.JPG" fluid className="galleryImage" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src="http://assets.dropcolumn.com/DSC_0104.jpeg" fluid className="galleryImage" />
          </Col>
          <Col md={6}>
            <Image src="http://assets.dropcolumn.com/DSC_0996.JPG" fluid className="galleryImage" />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './assets/stylesheets/Profile.css';
import stoic1 from './assets/images/DSC_0064.JPG'
import stoic2 from './assets/images/DSC_0867.JPG'
import stoic3 from './assets/images/DSC_0639(1).jpg'
import stoic4 from './assets/images/DSC_0523.JPG'
import small_logo from './assets/images/logo2_Black.png'
import { FaSoundcloud, FaSpotify, FaBandcamp, FaInstagram, FaYoutube} from 'react-icons/fa';


export default class About extends React.Component {

  render() {
    return (
      <div className="profile" id="stoicdapoet">
        <h3>stoic da poet</h3>
        <Container className="profileBody" fluid>
          <Row className="pictureRow">
            <Col md={4}>
              <Zoom>
                <Image src={stoic1} fluid className="galleryImage" />
              </Zoom>
            </Col>
            <Col md={4}>
              <Zoom>
                <Image src={stoic2} fluid className="galleryImage" />
              </Zoom>
            </Col>
            <Col md={4}>
              <Zoom>
                <Image src={stoic4} fluid className="galleryImage" />
              </Zoom>
            </Col>
          </Row>
          <Row className="bioRow">
            <Col>
              <p>underground emcee from the heart of d.c.</p>
            </Col>
          </Row>
          <Row className="linkRow">
            <a href="https://stoicdapoet.bandcamp.com/" className="socialButton" type="button" 
              rel="noopener noreferrer" target="_blank"><FaBandcamp /></a>
            <a href="https://soundcloud.com/stoicdamc" id="soundcloudBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            <a href="https://www.instagram.com/stoicdapoet/" id="instagramBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCjaJlV1R7JJqRK6RXn2-_QQ?view_as=subscriber" id="youtubeBtn"
              className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
          </Row>
          <Row className="musicRow">
            <Col>
            <iframe style={{border: 0, width: '380px', height: '380px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2627108043/size=large/bgcol=ffffff/linkcol=7137dc/minimal=true/transparent=true/" seamless><a href="http://stoicdapoet.bandcamp.com/album/-">𝙿𝙸𝙻𝙻𝙰𝚁𝚂//𝙸 by stoic da poet</a></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

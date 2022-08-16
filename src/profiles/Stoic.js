import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { FaSoundcloud, FaSpotify, FaBandcamp, FaInstagram, FaYoutube} from 'react-icons/fa';
import stoicHeadshot from '../assets/images/stoic.png';
import dcww from '../assets/DCWW.png';
import dcwwBlk from '../assets/images/DCWW_blkbkg.png';
import lmBlk from '../assets/LM_black.png';
import '../assets/stylesheets/Profile.css';
// import ProfileCard from './components/ProfileCard';


/**
 * Profile Card Content Array
 *  - Each ProfileCard gets passed "content"
 *  - This is an array of objects containing various content (text, media, links)
 *  - More discussion in Evernote notebook
 * cardType:
 *  - BioCard is 1
 *  - EmbedCard is 2
 *  - ImageCard is 3
 */
const profileCards = [
  {"cardType": 1, "bio": {"text": "i'm stoic."}},
  {"cardType": 4, "bio": {"text": "MORE OF ME →"}},
  {"cardType": 3, "title": "Founder: Drop Column Worldwide", "image": dcwwBlk},
  {"cardType": 3, "title": "Half of lawyer malloy", "image": lmBlk},
]

function Stoic20(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     showOverlay: false 
  //   }
  // }

  // onClickMoreStoic() {
  //   console.log("Click on MORE of stoic");
  //   this.setState({showOverlay: !this.state.showOverlay});
  // }

  return (
    <div className="profile" id="stoicdapoet">
      <Container>
        <Row>
          <Col>
            <Image src="https://assets.dropcolumn.com/DCWW.png" fluid id="dcwwLogo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="proPicCrop">
              <Image src="https://assets.dropcolumn.com/stoic.png" fluid className="proPic" />
            </div>
          </Col>
        </Row>
        <Row className="linkRow">
          <Col>
            <a href="https://stoicdapoet.bandcamp.com/" className="socialButton" type="button" 
              rel="noopener noreferrer" target="_blank"><FaBandcamp /></a>
            <a href="https://soundcloud.com/stoicdamc" id="soundcloudBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            <a href="https://www.instagram.com/stoicdapoet/" id="instagramBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCjaJlV1R7JJqRK6RXn2-_QQ?view_as=subscriber" id="youtubeBtn"
              className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck className="profileCardDeck">
              <Card className="profileCard" id="profileCardTop">
                <Card.Body>
                  <Card.Title as="h5">I'm stoic.</Card.Title>
                  <Card.Text>
                    undaground emcee from the depths of d.c.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="profileCard buttonCard" id="profileCardTop" onClick={handleShow}>
                <Card.Body>
                  <Card.Title as="h5">MORE OF ME</Card.Title>
                </Card.Body>
              </Card>
              <Card className="profileCardTop profileCard">
                <Link to="/worldwide" className="linkCard" >
                  <Card.Img variant="top" className="imageCardImage" src="https://assets.dropcolumn.com/DCWW_blkbkg.png" />
                  <Card.Body className="imageCardText">
                    <Card.Title as="h5">Founder: Drop Column Worldwide</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
              <Card className="profileCard imageCard" id="profileCardTop" >
                <Link to="/" className="linkCard">
                  <Card.Img id="imageCardLM" className="imageCardImage" variant="top" src="https://assets.dropcolumn.com/LM_black.png" />
                  <Card.Body className="imageCardText">
                    <Card.Title as="h5">Half of lawyer malloy</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered className="stoicModal">
        <Modal.Header closeButton>
          <Modal.Title>MORE OF ME</Modal.Title>
        </Modal.Header>
        <Modal.Body>Poetry, photography, philosophy, playlists & more... coming soon.</Modal.Body>
      </Modal>
    </div>
  );
}

export default Stoic20;
import React from 'react';
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
  {"cardType": 2, "link": "https://soundcloud.com/jones_avenue"},
]

function Occlude(props) {

    return (
      <div className="profileMember" id="stoicdapoet">
        <Container>
          <Row>
            <Col>
              <Image src="https://assets.dropcolumn.com/DCWW.png" fluid id="dcwwLogo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="proPicCrop">
                <Image src="https://assets.dropcolumn.com/profiles/occlude.png" fluid className="proPic" />
              </div>
            </Col>
          </Row>
          <Row className="linkRow">
            <Col>
              <a href="https://soundcloud.com/itsocclude" id="soundcloudBtn" className="socialButton" 
                type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
              <a href="https://www.instagram.com/itsocclude/" id="instagramBtn" className="socialButton" 
                type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck className="profileCardDeck">
                <Card className="profileCard" id="profileCardTop">
                  <Card.Body>
                    <Card.Title as="h4" className="memberProfileCardTitle">Occlude</Card.Title>
                    <Card.Text>
                      crafting cinematic experiences through pop and storytelling
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>  
          </Row>
        </Container>
      </div>
    );
  }


export default Occlude;

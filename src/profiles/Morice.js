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

function Benjo(props) {

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
                <Image src="https://assets.dropcolumn.com/profiles/morice.png" fluid className="proPic" />
              </div>
            </Col>
          </Row>
          <Row className="linkRow">
            <Col>
              <a href="https://soundcloud.com/user-534316836" id="soundcloudBtn" className="socialButton" 
                type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck className="profileCardDeck">
                <Card className="profileCard" id="profileCardTop">
                  <Card.Body>
                    <Card.Title as="h4" className="memberProfileCardTitle">Mo.Rice</Card.Title>
                    <Card.Text>
                      montreal-based hip-hop scientist, pushing boundaries by force
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


export default Benjo;

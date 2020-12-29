import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { FaSoundcloud, FaSpotify, FaBandcamp, FaInstagram, FaYoutube} from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import stoic1 from '../assets/images/DSC_0064.JPG'
import stoic2 from '../assets/images/DSC_0867.JPG'
import stoic3 from '../assets/images/DSC_0639(1).jpg'
import stoic4 from '../assets/images/DSC_0523.JPG'
import stoicHeadshot from '../assets/images/stoic.png';
import dcww from '../assets/DCWW.png';
import dcwwBlk from '../assets/images/DCWW_blkbkg.png';
import lmBlk from '../assets/LM_black.png';
import 'react-medium-image-zoom/dist/styles.css'
import '../assets/stylesheets/Profile.css';
import ProfileCard from './components/ProfileCard';


const stoicDCWW = (
    <div className="imageCard">
      <CardTitle className="imageCardTitle">DCWW</CardTitle>
      <CardImg top width="100%" src={dcwwBlk} alt="Drop Column Worldwide"/>
    </div>
);

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
  {"cardType": 1, "bio": {"text": "yo! I'm stoic."}},
  {"cardType": 1, "bio": {"text": "MORE →"}},
  {"cardType": 3, "title": "Founder: Drop Column Worldwide", "image": dcwwBlk},
  {"cardType": 3, "title": "half of lawyer malloy", "image": lmBlk},
]

export default class Stoic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="profile" id="stoicdapoet">
        <Container>
          <Row>
            <Col>
              <Image src={dcww} fluid id="dcwwLogo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="proPicCrop">
                <Image src={stoicHeadshot} fluid className="proPic" />
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
          <Row xs="1" sm="2" md="2" className="profileRow" id="bottomProfileRow">
            <Col className="profileCol">
              <ProfileCard type={profileCards[0].cardType} content={profileCards[0].bio}/>
            </Col>
            <Col className="profileCol">
              <ProfileCard type={profileCards[1].cardType} content={profileCards[1].bio}/>
            </Col>
            <Col className="profileCol">
              <ProfileCard type={profileCards[2].cardType} content={profileCards[2]}/>
            </Col>
            <Col className="profileCol">
              <ProfileCard type={profileCards[3].cardType} content={profileCards[3]}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <br/>
              S p a c e r
              <br/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

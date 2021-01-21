import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import { FaSoundcloud, FaSpotify, FaBandcamp, FaInstagram, FaYoutube} from 'react-icons/fa';
import stoicHeadshot from '../assets/images/stoic.png';
import dcww from '../assets/DCWW.png';
import dcwwBlk from '../assets/images/DCWW_blkbkg.png';
import lmBlk from '../assets/LM_black.png';
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
  {"cardType": 1, "bio": {"text": "i'm stoic."}},
  {"cardType": 4, "bio": {"text": "MORE OF ME →"}},
  {"cardType": 3, "title": "Founder: Drop Column Worldwide", "image": dcwwBlk},
  {"cardType": 3, "title": "Half of lawyer malloy", "image": lmBlk},
]

export default class Stoic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showOverlay: false 
    }
  }

  toggleOverlay() {
    this.setState({showOverlay: !this.state.showOverlay});
  }

  onClickMoreStoic() {
    console.log("Click on MORE of stoic");
    this.setState({showOverlay: !this.state.showOverlay});
  }

  onClickDCWW() {
    console.log("Clicked on DCWW");
  }

  onClickLM() {
    console.log("Clicked on LM");
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
            <Col className="profileCol" id="bioCardStoic">
              <ProfileCard type={profileCards[0].cardType} content={profileCards[0].bio}/>
            </Col>
            <Col className="profileCol" id="moreCardStoic">
              <ProfileCard type={profileCards[1].cardType} content={profileCards[1].bio} onClick={() => this.onClickMoreStoic()}/>
            </Col>
            <Col className="profileCol" id="stoicDCWW">
              <a href="/worldwide"><ProfileCard type={profileCards[2].cardType} content={profileCards[2]} onClick={() => this.onClickDCWW()}/></a>
            </Col>
            <Col className="profileCol" id="stoicLM">
              <a href="/"><ProfileCard type={profileCards[3].cardType} content={profileCards[3]} onClick={() => this.onClickLM()}/></a>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.showOverlay} toggle={() => this.toggleOverlay()} className={"stoicOverlay"}>
          <ModalHeader id="stoicOverlayHeader" closebutton="false">MORE</ModalHeader>
          <ModalBody>
            <Link to="stoic/poetry" className="stoicOverlayButton">poetry</Link>
            <Link to="stoic/poetry" className="stoicOverlayButton">photography</Link>
            <Link to="stoic/poetry" className="stoicOverlayButton">blog</Link>
            <Link to="stoic/poetry" className="stoicOverlayButton">playlists</Link>
            <Link to="stoic/poetry" className="stoicOverlayButton">mixes</Link>
            <Link to="stoic/poetry" className="stoicOverlayButton">misc.</Link>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

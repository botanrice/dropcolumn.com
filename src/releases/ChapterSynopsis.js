import React from 'react';
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiAudiomack } from "react-icons/si";
import '../assets/stylesheets/releases/Release.css';


function ChapterSynopsis(props) {
    return (
      <Container className="dropcolumnEP">
        <Row>
          <Col className="releaseHeader">
            <Image src="https://assets.dropcolumn.com/releases/chaptersynopsiscover.png" className="coverArt" fluid />
          </Col>
        </Row>
        <Row>
          <Col className="releaseInfo releaseHeader" >
            <h3 id="releaseTitle">chapter||synopsis</h3>
            <span className="releaseBio">2||12||21</span>
            <div className="releaseLinks">
              <a href="https://soundcloud.com/dropcolumnworldwide/sets/chapter-synopsis" id="soundcloudBtn" className="streamButton" 
                type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactPlayer
              url={"https://soundcloud.com/dropcolumnworldwide/sets/chapter-synopsis"}
              width="auto"
              height="70vh"
              className="releaseEmbed"
            />
          </Col>
        </Row>
      </Container>
    );
}

export default ChapterSynopsis;
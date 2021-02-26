import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiAudiomack } from "react-icons/si";
import logo from './assets/LM_black.png';
import droplet from './assets/images/LM_droplet_circle.png';
import column from './assets/images/LM_droplet_column.png';
import dcww from './assets/DCWW.png';
import dcwwwh from './assets/DCWW_white.png';
import columnblk from './assets/images/column_black.png';
import dropletblk from './assets/images/drop_black.png';
import './assets/stylesheets/Worldwide.css';


function Worldwide(props) {

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
  });

  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30,
      headerElement = document.getElementsByClassName("worldwideHdr")[0],
      logoElement = document.getElementsByClassName("logo")[0];
  
    if (distanceY > shrinkOn) {
      if(headerElement != null) headerElement.classList.add("smaller");
      if(headerElement != null) logoElement.classList.add("smaller");
    } else {
      if(headerElement != null) headerElement.classList.remove("smaller");
      if(headerElement != null) logoElement.classList.remove("smaller");
    }
  }

  return (
    <div className="worldwide">
      <div className="worldwideHdr">
        <img src={dcwwwh} className="logo" alt="logo" /> 
      </div>
      <div className="worldwideInfo">
        <div className="worldwideMotto">
          <h1 id="dcwwTitle">DROP COLUMN WORLDWIDE</h1>
          <div>
            <a href="https://soundcloud.com/dropcolumnworldwide" className="worldwideIcons" 
              type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            <a href="https://www.instagram.com/dropcolumnworldwide/" id="instagramBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
          </div>
          <div id="worldwideBio">
            our foundation is of stone.<br/>
            our form is of water.<br/>
            global creative imprint.<br/>
          </div>
        </div>
        <div className="divider">
          <hr/>
        </div>
        <div className="worldwideListen">
          <h4>listen now</h4>
          <ReactPlayer
            url={"https://soundcloud.com/dropcolumnworldwide/sets/introduction-to-drop-column"}
            width="auto"
            height="20em"
            className="worldwidePlaylist"
          />
        </div>
        <div className="divider">
          <hr/>
        </div>
        <div className="worldwidePhilosophy">
          <div className="philosophyInfo">
            <h4>philosophy</h4>
            <p>Our mission is to remain fluid, like water, in the pursuit of our creations while remaining solid, like stone, in the principles that guide us.<br/><br/>
              Operating on a foundation of these three  <span id="pillars">pillars</span>, each of these individuals matches our core values.
              </p>
            <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="droplet-black" /></div>
            <p>They are genuine in their passion to create.</p>
            <p>They are unique in their pursuit of that passion. They strive to create something that is like nothing that has ever existed.</p>
            <p>They are open-minded in their perception of others, with respect to personal beliefs, skill levels, and disciplines.</p>
          </div>
          <div className="columnDelim">
              <img src={columnblk} className="columnBlackSmall" alt="column-black" /> 
          </div>
        </div>
        <div className="divider">
          <hr/>
        </div>
        <div className="worldwideRoster">
          <h4>roster</h4>
          <Container className="rosterTable">
            <Row>
              <Col>
                <h5>FOUNDER</h5>
                <Link to="/stoic">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/stoic.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>stoic da poet</span>
                </Link>
              </Col>
            </Row>
            <h5 id="worldwideRosterArtistsHdr">ARTISTS</h5>
            <Row>
              <Col>
                <Link to="/jones">
                  <div className="rosterPicCrop">
                    <Image src="https://assets.dropcolumn.com/profiles/jones.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>jones avenue</span>
                </Link>
              </Col>
              <Col>
                <Link to="/beagle">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/beagle.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>beagle</span>
                </Link>
              </Col>
              <Col>
                <Link to="/whet">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/whet.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>whet</span>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/occlude">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/occlude.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Occlude</span>
                </Link>
              </Col>
              <Col>
                <Link to="/whale">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/whale.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Whale</span>
                </Link>
              </Col>
              <Col>
                <Link to="/osiris">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/osiris.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>KingOsiris</span>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/maurice">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/maurice.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Strong Maurice</span>
                </Link>
              </Col>
              <Col>
                <Link to="/benjo">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/benjo.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Benjo</span>
                </Link>
              </Col>
              <Col>
                <Link to="/carbrey" className="rosterIcon">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/carbrey.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Carbrey</span>
                </Link>
              </Col>
            </Row>
            <Row id="lastProfileRow">
              <Col>
                <Link to="/morice" className="rosterIcon">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/morice.png" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Mo.Rice</span>
                </Link>
              </Col>
              <Col>
                <Link to="/otoroshi" className="rosterIcon">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/otoroshi.jpg" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>Otoroshi</span>
                </Link>
              </Col>
              <Col>
                <Link to="/madmax" className="rosterIcon">
                  <div className="rosterPicCrop">
                    <Image src="http://assets.dropcolumn.com/profiles/madmax.jpg" fluid roundedCircle className="rosterPic" />
                  </div>
                  <span>mädmäx</span>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Worldwide);
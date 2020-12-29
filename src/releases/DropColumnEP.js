import React from 'react';
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiAudiomack } from "react-icons/si";
import '../assets/stylesheets/releases/DropColumnEP.css';
import small_logo from '../assets/images/logo2_Black.png'
import coverart from '../assets/images/DROPCOLUMNEP.png'
import DragDrop from '../DragDrop';


const tracklist = [
  {id: "goats", content: "goats & money"},
  {id: "breezin", content: "breezin'"},
  {id: "capitol", content: "capitol"},
  {id: "longtime", content: "long time"},
  {id: "emerson", content: "emerson rd."},
  {id: "spirits", content: "spirits"},
]

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class DropColumnEP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tracklist,
      submitted: false
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.submitRanking = this.submitRanking.bind(this);
  }

  submitRanking() {
    console.log("submitting ranking selection...");
    console.log(this.state.items);
    let items = this.state.items;
    fetch(`https://hooks.zapier.com/hooks/catch/9195759/oclk0pg/`, {
      method: 'POST',
      body: JSON.stringify({ items }),
    }).then(() => this.setState({submitted: true}))
    .catch(() => alert("dang! something went wrong, give it another shot. (make sure you're online!)"))
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    
    console.log("new order:");
    console.log({items});
    this.setState({items});
  };

  render() {
    let nums = ["1.", "2.", "3.", "4.", "5.", "6."];

    return (
      <Container className="dropcolumnEP">
        <Row>
          <Col xs="6" className="releaseHeader">
            <Image src={coverart} fluid id="coverArtDCEP" />
          </Col>
          <Col xs="6" className="releaseInfo releaseHeader" >
            <h3 id="releaseTitle">DROP//COLUMN</h3>
            <span id="releaseBio">12//25//20</span>
            <div>
              <a href="https://open.spotify.com/album/40oMUoQur6QnXebzBx2Okb?si=pagNWNzYQ_qKO83YHA8IMA" className="streamButton" style={{"paddingLeft": 0}} type="button" 
                rel="noopener noreferrer" target="_blank"><FaSpotify /></a>
              <a href="https://soundcloud.com/lawyermalloy/sets/dropcolumn" id="soundcloudBtn" className="streamButton" 
                type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
              <a href="https://music.apple.com/us/album/drop-column-ep/1545428593" className="streamButton" type="button" 
                rel="noopener noreferrer" target="_blank"><FaApple /></a>
              <a href="https://audiomack.com/lawyer-malloy/album/dropcolumn" className="streamButton" type="button" 
                rel="noopener noreferrer" target="_blank"><SiAudiomack /></a>
            </div>
          </Col>
        </Row>
        <Row id="rankDesc" style={{"display": (this.state.submitted ? "none" : "")}}>
          <p id="rankHdr">INSTRUCTIONS</p>
          <p>listen to the entirety of DROP//COLUMN. <br/> rank your favorite DROP//COLUMN tracks. <br/> press submit at the bottom of the page.</p>
          <div className="dragInstrDiv">
            <p className="dragInstruction">drag & drop</p>
            <p className="dragInstruction">drag & drop</p>
            <p className="dragInstruction">drag & drop</p>
          </div>
        </Row>
        <Row className="epBody"> 
          <Col xs="2" className="releaseHeader">
            {nums.map((num) => 
              <div className="rankNumber">{num}</div>
            )}
          </Col>
          <Col xs="10" className="releaseHeader">
            { !this.state.submitted 
              ? 
              <DragDrop 
                    items={this.state.items} 
                    onDragEnd={(e) => this.onDragEnd(e)}
                    submitRanking={() => this.submitRanking()}/>
              :
              <div className="postRank">
                <span>thanks for voting. results will be released soon.</span>
                <ReactPlayer
                  url={"https://youtu.be/rohE79OvKwg"}
                  width="auto"
                  height="15em"
                  controls="true"
                  className="postRankVideo"
                />
              </div>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

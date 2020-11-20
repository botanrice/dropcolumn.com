import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import '../../assets/stylesheets/profiles/ProfileCard.css';


function BioCard(props) {
  return(
    <div className="bioCard">
      Yo! I'm stoic.
    </div>
  );
}

function EmbedCard(props) {
  return(
    <div className="embedCard">
      There will be an embed here.
    </div>
  );
}

function ImageCard(props) {
  return(
    <div className="imageCard">
      There will be an image here.
    </div>
  );
}

export default class ProfileCard extends React.Component {
  render() {
    const cardType = this.props.type;
    let card;
    switch (cardType) {
      case 1:
        card = <BioCard/>
        break;
      case 2:
        card = <EmbedCard/>
        break;
      case 3:
        card = <ImageCard/>
        break;
      default:
        card = <span>whoops! there was an error.</span>
    }

    return (
      <div className="profileCard">
        <span>{this.props.content}</span>
        {card}
      </div>
    );
  }
}

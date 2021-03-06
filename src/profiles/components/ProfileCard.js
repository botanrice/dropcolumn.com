import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import dcww from '../../assets/DCWW.png';
import '../../assets/stylesheets/profiles/ProfileCard.css';


function BioCard(props) {
  return(
    <div className="bioCard">
      <CardText>{props.content.text}</CardText>
    </div>
  );
}

function EmbedCard(props) {
  return(
    <Card className="embedCard">
      There will be an embed here.
    </Card>
  );
}

function ImageCard(props) {
  return(
    <div className="imageCard">
      <CardTitle className="imageCardTitle">{props.title}</CardTitle>
      <CardImg className="imageCardImage" bottom width="100%" src={props.image} alt="Drop Column Worldwide"/>
    </div>
  );
}

function MoreCard(props) {
  return(
    <div className="moreCard">
      <CardText>{props.content.text}</CardText>
    </div>
  )
}

export default class ProfileCard extends React.Component {
  render() {
    const cardType = this.props.type;
    let card;
    switch (cardType) {
      case 1:
        card = <BioCard content={this.props.content}/>
        break;
      case 2:
        card = <EmbedCard content={this.props.content}/>
        break;
      case 3:
        card = <ImageCard title={this.props.content.title} image={this.props.content.image}/>
        break;
      case 4:
        card = <MoreCard content={this.props.content}/>
        break;
      default:
        card = <span>whoops! there was an error.</span>
    }

    return (
      <Card onClick={this.props.onClick}>
        {card}
      </Card>
    );
  }
}

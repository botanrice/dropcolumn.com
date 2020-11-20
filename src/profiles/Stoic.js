import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { FaSoundcloud, FaSpotify, FaBandcamp, FaInstagram, FaYoutube} from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import stoic1 from '../assets/images/DSC_0064.JPG'
import stoic2 from '../assets/images/DSC_0867.JPG'
import stoic3 from '../assets/images/DSC_0639(1).jpg'
import stoic4 from '../assets/images/DSC_0523.JPG'
import stoicHeadshot from '../assets/images/stoic.png';
import dcww from '../assets/DCWW.png';
import 'react-medium-image-zoom/dist/styles.css'
import '../assets/stylesheets/Profile.css';
import ProfileCard from './components/ProfileCard';




const carouselItems = [
  {
    src: stoic1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: stoic2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: stoic4,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

// TODO: Create the actual React Components here: bio, Bandcamp embed, Soundcloud embed, Youtube embed, etc.
const carouselItemComponents = [
  {
    id: 'stoicid1',
    src: 'stoicid1',
    component: <div className="stoicBio"><span>yo! I'm stoic. underground emcee from the depths of d.c.</span></div>
  },
  {
    id: 'stoicid2',
    src: 'stoicid2',
    component: <div className="stoicBio"><iframe style={{border: 0, width: '380px', height: '380px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2627108043/size=large/bgcol=ffffff/linkcol=7137dc/minimal=true/transparent=true/" seamless><a href="http://stoicdapoet.bandcamp.com/album/-">𝙿𝙸𝙻𝙻𝙰𝚁𝚂//𝙸 by stoic da poet</a></iframe></div>
  },
  {
    id: 'stoicid3',
    src: 'stoicid3',
    component: <div className="stoicBio">Soundcloud embed!</div>
  }
]


export default class Stoic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      setActiveIndex: 0,
      animating: false,
      setAnimating: false
    }

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  next() {
    let { activeIndex, animating } = this.state;
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    let { activeIndex, animating } = this.state;
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    let { animating } = this.state;
    if (animating) {
      return;
    }
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const slides = carouselItems.map((item) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({animating: true})}
          onExited={() => this.setState({animating: false})}
          key={item.src}
        >
          <Image src={item.src} alt={item.altText} fluid className="galleryImage"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    const slides2 = carouselItemComponents.map((item) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({animating: true})}
          onExited={() => this.setState({animating: false})}
          key={item.src}
        >
          <div className="carouselComponent">
            {item.component}
          </div>
        </CarouselItem>
      );
    });

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
          <Row className="profileRow">
            <Col md={6}>
              <ProfileCard content={"Box 1"}/>
            </Col>
            <Col md={6}>
              <ProfileCard content={"Box 2"}/>
            </Col>
          </Row>
          <Row className="profileRow">
            <Col md={6}>
              <ProfileCard content={"Box 3"}/>
            </Col>
            <Col md={6}>
              <ProfileCard content={"Box 4"}/>
            </Col>
          </Row>
          <br/>
          <br/>
          <hr/>
          S P A C E R
          <hr/>
          <br/>
          <br/>
          <Row style={{visibility: 'hidden'}}>
            <Col>
              <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
                interval={false}
              >
                <CarouselIndicators items={carouselItems} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                {slides2}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

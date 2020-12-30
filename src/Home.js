import React from 'react';
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from './assets/LM_black.png';
import droplet from './assets/images/LM_droplet_circle.png';
import column from './assets/images/LM_droplet_column.png';
import './assets/stylesheets/Home.css';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="main-body">
          <img src={logo} className="logo" alt="logo" /> 
          <div className="icons">
            <a href="https://music.apple.com/us/artist/lawyer-malloy/1501654960" className="socialButton" type="button" 
              rel="noopener noreferrer" target="_blank"><FaApple /></a>
            <a href="https://soundcloud.com/lawyermalloy" id="soundcloudBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            <a href="https://open.spotify.com/artist/1iSnXRVWAUPaPgDYZXjNc7" className="socialButton" type="button" 
              rel="noopener noreferrer" target="_blank"><FaSpotify /></a>
            <a href="https://www.instagram.com/stoicandjones/" id="instagramBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            <a href="https://youtu.be/rohE79OvKwg" id="youtubeBtn"
              className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
          </div>
        </div>
        <div>
          <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:1iSnXRVWAUPaPgDYZXjNc7&size=detail&theme=light" 
            width="300" height="56" scrolling="no" frameBorder="0" id="spotifyFollowBtn" allowtransparency="true"></iframe>
        </div>
        <div className="profileIconButtons">
        </div>
      </div>
    );
  }
}


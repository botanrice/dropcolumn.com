import React from 'react';
import './assets/stylesheets/Home.css';
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from './assets/images/dropcolumnworldwide3.png';


export default class Home22 extends React.Component {
  render() {
    return (
      <div className="Home22">
        <div className="App-body">
          <div className="main-body">
            <img src={logo} className="logo" alt="logo" /> 
            <div className="icons">
              <div className="icons">
                <a href="https://soundcloud.com/lawyermalloy" id="soundcloudBtn" className="socialButton" 
                  type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
                <a href="https://www.instagram.com/stoicandjones/" id="instagramBtn" className="socialButton" 
                  type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
                {/* <a href="https://open.spotify.com/artist/1iSnXRVWAUPaPgDYZXjNc7" className="socialButton" type="button" 
                  rel="noopener noreferrer" target="_blank"><FaSpotify /></a> */}
                {/* <a href="https://music.apple.com/us/artist/lawyer-malloy/1501654960" className="socialButton" type="button" 
                  rel="noopener noreferrer" target="_blank"><FaApple /></a> */}
                {/* <a href="https://youtu.be/rohE79OvKwg" id="youtubeBtn"
                  className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a> */}
              </div>
              <span>More soon...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

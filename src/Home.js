import React from 'react';
import logo from './assets/LM_black.png';
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaFacebookSquare, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Home.css';

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" /> 
          <div className="icons">
            <a href="https://soundcloud.com/lawyermalloy" id="soundcloudBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            <a href="https://open.spotify.com/artist/1iSnXRVWAUPaPgDYZXjNc7" className="socialButton" type="button" 
              rel="noopener noreferrer" target="_blank"><FaSpotify /></a>
            <a href="https://music.apple.com/us/artist/lawyer-malloy/1501654960" className="socialButton" type="button" 
              rel="noopener noreferrer" target="_blank"><FaApple /></a>
            <a href="https://www.instagram.com/stoicandjones/" id="instagramBtn" className="socialButton" 
              type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCUIK-w8iuaRHMsuP6iTB2Wg?view_as=subscriber" id="youtubeBtn"
              className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
          </div>
        </header>
        <footer className="App-footer">
          <span>Drop Column Worldwide | Est. 2020</span>
        </footer>
      </div>
    );
  }
}

export default Home;

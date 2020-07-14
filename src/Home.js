import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaFacebookSquare, FaFacebookF, FaTwitter, FaYoutube, FaBars } from 'react-icons/fa';
import Sidebar from 'react-sidebar';
import SideNav from './SideNav';
import Gallery from './Gallery';
import About from './About';
import logo from './assets/LM_black.png';
import './Home.css';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavOn: false,
      sidebarOpen: false
    }

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  toggleSideNav() {
    this.setState({sideNavOn: !this.state.sideNavOn});
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
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
            <a href="https://youtu.be/Mj041pftyvQ" id="youtubeBtn"
              className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
          </div>
        </div>
    );
  }
}


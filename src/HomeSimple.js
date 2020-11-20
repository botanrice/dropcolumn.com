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
import './assets/stylesheets/Home.css';


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>heome</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/gallery",
    sidebar: () => <div>gallery</div>,
    main: () => <Gallery />
  },
  {
    path: "/about",
    sidebar: () => <div>about</div>,
    main: () => <About />
  }
];

const sidebarStyles = {
  sidebar: {
    background: "white",
    fontFamily: "monospace",
    padding: "10px 0",
  },
  overlay: {
    opacity: 0,
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(255,255,255,.3)"
  }
}

class Home extends React.Component {
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
        <div className="Home">
          <div className="App-body">
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
                <a href="https://www.youtube.com/channel/UCUIK-w8iuaRHMsuP6iTB2Wg?view_as=subscriber" id="youtubeBtn"
                  className="socialButton" type="button" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
              </div>
            </div>
          </div>
          <footer className="App-footer">
            <span>Drop Column Worldwide | Est. 2020</span>
          </footer>
        </div>
    );
  }
}

export default Home;

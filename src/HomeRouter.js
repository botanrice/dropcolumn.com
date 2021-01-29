import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaFacebookSquare, FaFacebookF, FaTwitter, FaYoutube, FaBars } from 'react-icons/fa';
import Sidebar from 'react-sidebar';
import SideNav from './SideNav';
import Worldwide from './Worldwide';
import Gallery from './Gallery';
import About from './About';
import Home from './Home';
import Stoic from './profiles/Stoic';
import StoicPoetry from './profiles/stoic/StoicPoetry';
import Jones from './profiles/Jones';
import Beagle from './profiles/Beagle';
import Whet from './profiles/Whet';
import Occlude from './profiles/Occlude';
import Whale from './profiles/Whale';
import Osiris from './profiles/Osiris';
import Maurice from './profiles/Maurice';
import Benjo from './profiles/Benjo';
import DropColumnEP from './releases/DropColumnEP';
import droplet from './assets/images/LM_droplet_circle.png';
import column from './assets/images/LM_droplet_column.png';
import './assets/stylesheets/Home.css';


// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/worldwide",
    main: () => <Worldwide />
  },
  {
    path: "/gallery",
    main: () => <Gallery />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/stoic/poetry",
    main: () => <StoicPoetry />
  },
  {
    path: "/stoic/photography",
    main: () => <StoicPoetry />
  },
  {
    path: "/stoic/blog",
    main: () => <StoicPoetry />
  },
  {
    path: "/stoic/sets",
    main: () => <StoicPoetry />
  },
  {
    path: "/stoic/misc",
    main: () => <StoicPoetry />
  },
  {
    path: "/stoic",
    main: () => <Stoic />
  },
  {
    path: "/jones",
    main: () => <Jones />
  },
  {
    path: "/beagle",
    main: () => <Beagle />
  },
  {
    path: "/whet",
    main: () => <Whet />
  },
  {
    path: "/occlude",
    main: () => <Occlude />
  },
  {
    path: "/whale",
    main: () => <Whale />
  },
  {
    path: "/osiris",
    main: () => <Osiris />
  },
  {
    path: "/maurice",
    main: () => <Maurice />
  },
  {
    path: "/benjo",
    main: () => <Benjo />
  },
  {
    path: "/drop-column",
    main: () => <DropColumnEP />
  }
];

const sidebarStyles = {
  sidebar: {
    background: "white",
    fontFamily: "monospace",
    padding: "10px 0",
    maxWidth: "200px",
    position: "fixed"
  },
  overlay: {
    opacity: 0,
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(255,255,255,.3)",
    width: "100%"
  },
  root: {
    maxWidth: "200px"
  }
}

const darkHeaderPages = ["/drop-column", "/worldwide"]

export default class HomeRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        sideNavOn: false,
        sidebarOpen: false
    }

    this.closeSidebar = this.closeSidebar.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  closeSidebar() {
      this.setState({sidebarOpen: false});
  }

  onSetSidebarOpen(open) {
    console.log("onSetSidebarOpen");
    console.log(open);
    this.setState({ sidebarOpen: open });
  }

  render() {
    let isDark = (window.location.href.includes('/drop-column') ? true : false);
    let isDarkHeader = false;
    darkHeaderPages.forEach((page) => {
      isDarkHeader = (window.location.href.includes(page)) ? true : false;
    });

    return(
      <Router>
        <div className={isDark ? "Home-dark" : "Home"}>
          <Container className="App-body">
            <Sidebar
              sidebar={<SideNav routes={routes} onLinkClick={this.closeSidebar}/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={sidebarStyles}
              shadow={false}
            > 
              <span id={this.state.sidebarOpen ? "nav-btn-open" : "nav-btn"} className={(isDark || isDarkHeader) && !this.state.sidebarOpen ? "navButton navBtnInverted" : "navButton"} 
                onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}><FaBars /></span>
            </Sidebar>

            <div className="Home-body" onClick={this.state.sidebarOpen ? () => this.onSetSidebarOpen(!this.state.sidebarOpen) : null}>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={process.env.PUBLIC_URL + route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </Container>
          <footer className="App-footer">
            <Navbar fixed='bottom' className="stickyFooter">
              <div style={{"display": isDarkHeader ? "none" : ""}}>
                <a href="https://soundcloud.com/jones_avenue"><img src={droplet} className="homeProfileButton" alt="dropletButton"/></a>
                <a href="https://soundcloud.com/stoicdamc"><img src={column} className="homeProfileButton" alt="columnButton"/></a>
              </div>
              <div>
                <span>Drop Column Worldwide | Est. 2020</span>
              </div>
            </Navbar>
          </footer>
        </div>
      </Router>
    );
  }
}

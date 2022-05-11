import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { useLocation } from 'react-router-dom'
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
import Home22 from './Home22';
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
import Carbrey from "./profiles/Carbrey";
import Morice from './profiles/Morice';
import DropColumnEP from './releases/DropColumnEP';
import ChapterSynopsis from './releases/ChapterSynopsis';
import droplet from './assets/images/LM_droplet_circle.png';
import column from './assets/images/LM_droplet_column.png';
import './assets/stylesheets/Home.css';
import Otoroshi from "./profiles/Otoroshi";
import Madmax from "./profiles/Madmax";
import GreenOnes from "./releases/GreenOnes";


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
    main: () => <Home22 />
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
    path: "/carbrey",
    main: () => <Carbrey />
  },
  {
    path: "/morice",
    main: () => <Morice />
  },
  {
    path: "/otoroshi",
    main: () => <Otoroshi />
  },
  {
    path: "/madmax",
    main: () => <Madmax />
  },
  {
    path: "/drop-column",
    main: () => <DropColumnEP />
  },
  {
    path: "/chapter-synopsis",
    main: () => <ChapterSynopsis />
  },
  {
    path: "/greenones",
    main: () => <GreenOnes />
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

const darkHeaderPages = ["/drop-column", "/worldwide", "/chapter-synopsis", "/greenones"]
const darkBodyPages = ["/drop-column", "/chapter-synopsis", "/greenones"]

function HomeRouter() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let loc = useLocation();
  let isDarkHeader = darkHeaderPages.includes("/" + window.location.href.split("/")[3]) ? true : false;
  let isDark = darkBodyPages.includes("/" + window.location.href.split("/")[3]) ? true : false;
  
  console.log(window.location.href.split("/")[3]);
  console.log(isDark);
  console.log(isDarkHeader);

  return(
    <Router>
      <div className={isDark ? "Home-dark" : "Home22"}>
        <Container className="App-body">
          <Sidebar
            sidebar={<SideNav routes={routes} onLinkClick={() => setSidebarOpen(false)}/>}
            open={sidebarOpen}
            onSetOpen={setSidebarOpen}
            styles={sidebarStyles}
            shadow={false}
          > 
            <span id={sidebarOpen ? "nav-btn-open" : "nav-btn"} className={(isDarkHeader) && !sidebarOpen ? "navButton navBtnInverted" : "navButton"} 
              onClick={() => setSidebarOpen(!sidebarOpen)}><FaBars /></span>
          </Sidebar>

          <div className="Home-body" onClick={sidebarOpen ? () => setSidebarOpen(!sidebarOpen) : null}>
            {/* <Switch>
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
            </Switch> */}
            <span>under construction</span>
          </div>
        </Container>
        <footer className="App-footer">
          <Navbar fixed='bottom' className="stickyFooter">
            <div style={{"display": isDark ? "none" : ""}}>
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

export default HomeRouter;

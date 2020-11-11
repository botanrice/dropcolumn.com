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
import Gallery from './Gallery';
import About from './About';
import Home from './Home';
import Stoic from './Stoic';
import './Home.css';


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
    path: "/gallery",
    main: () => <Gallery />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/stoic",
    main: () => <Stoic />
  }
];

const sidebarStyles = {
  sidebar: {
    background: "white",
    fontFamily: "monospace",
    padding: "10px 0",
    maxWidth: "200px"
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
      this.setState({ sidebarOpen: open });
  }

  render() {
    return(
    <Router>
      <Container className="Home">
        <div className="App-body">
          <Sidebar
            sidebar={<SideNav routes={routes} onLinkClick={this.closeSidebar}/>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={sidebarStyles}
            shadow={false}
          > 
            <span id={this.state.sidebarOpen ? "nav-btn-open" : "nav-btn"} className="navButton" onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}><FaBars /></span>
          </Sidebar>

          <div className="Home-body">
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
        <footer className="App-footer">
          <Navbar fixed='bottom' className="stickyFooter">
            <span>Drop Column Worldwide | Est. 2020</span>
          </Navbar>
        </footer>
      </Container>
    </Router>
    );
  }
}

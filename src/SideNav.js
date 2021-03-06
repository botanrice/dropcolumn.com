import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from './Gallery';
import About from './About';
import Home from './HomeSimple';
import './assets/stylesheets/Home.css';


export default class SideNav extends React.Component {

  render() {
    var routes = this.props.routes; 

    return (
      <div className="styledSideNav">
        <ul className="sidebarLinks">
          <li>
            <Link to="/" onClick={this.props.onLinkClick}>home</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={this.props.onLinkClick}>gallery</Link>
          </li>
          <li>
            <Link to="/about" onClick={this.props.onLinkClick}>about</Link>
          </li>
          <hr/>
          <li>
            <Link to="/worldwide" onClick={this.props.onLinkClick}>WORLDWIDE</Link>
          </li>
          <li>
            <Link to="/chapter-synopsis" id="chapterSynopsisNav" onClick={this.props.onLinkClick}>chapter||synopsis</Link>
          </li>
          <li>
            <Link to="/greenones" id="chapterSynopsisNav" onClick={this.props.onLinkClick}>green ones</Link>
          </li>
        </ul>

        <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              />
            ))}
          </Switch>
      </div>
    );
  }
}

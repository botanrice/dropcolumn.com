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
import './Home.css';


export default class SideNav extends React.Component {

  render() {
    var routes = this.props.routes; 

    return (
      <div className="styledSideNav">
        <ul className="sidebarLinks">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
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

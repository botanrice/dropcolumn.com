import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './assets/stylesheets/Home.css';
import { FaSoundcloud, FaInstagram } from 'react-icons/fa';
import logo from './assets/images/dropcolumnworldwide3.png';


export default class Home22v2 extends React.Component {
  render() {
    return (
      <div className="Home22">
        <div className="App-body">
          <div className="main-body">
            <img src={logo} className="logo" alt="logo" /> 
            <div className="icons">
              <div className="icons">
                <a href="https://soundcloud.com/dropcolumnworldwide" id="soundcloudBtn" className="socialButton" 
                  type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
                <a href="https://www.instagram.com/dropcolumnworldwide/" id="instagramBtn" className="socialButton" 
                  type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
              </div>
              <div style={{ padding: '50px', background: 'salmon' }}>
                <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                  <Link to="/stoic">Stoic</Link> |{' '}
                  <Link to="/jones">Jones</Link>
                </nav>
                <Outlet />
              </div>
              <span>More soon...</span>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <span>Background art by Roman Bratschi</span>
        </footer>
      </div>
    );
  }
}

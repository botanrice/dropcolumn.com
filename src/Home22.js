import React from 'react';
import './assets/stylesheets/Home.css';
import { FaSoundcloud, FaInstagram } from 'react-icons/fa';
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
                <a href="https://soundcloud.com/dropcolumnworldwide" id="soundcloudBtn" className="socialButton" 
                  type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
                <a href="https://www.instagram.com/dropcolumnworldwide/" id="instagramBtn" className="socialButton" 
                  type="button" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <span>Background art by <a href="https://www.behance.net/roman_bratschi">Roman Bratschi</a></span>
          <p style={{fontSize: '8px', visibility: 'hidden'}}>bo rice • pppatsfan96@gmail.com</p>
        </footer>
      </div>
    );
  }
}

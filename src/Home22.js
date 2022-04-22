import React from 'react';
import './assets/stylesheets/Home.css';
import logo from './assets/images/dropcolumnworldwide3.png';

class Home extends React.Component {
  render() {
    return (
        <div className="Home22">
          <div className="App-body">
            <div className="main-body">
              <img src={logo} className="logo" alt="logo" /> 
              <div className="icons">
                <span>Loading...</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;

import React from 'react';
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from './assets/LM_black.png';
import droplet from './assets/images/LM_droplet_circle.png';
import column from './assets/images/LM_droplet_column.png';
import dcww from './assets/DCWW.png';
import dcwwwh from './assets/DCWW_white.png';
import columnblk from './assets/images/column_black.png';
import dropletblk from './assets/images/drop_black.png';
import './assets/stylesheets/Worldwide.css';


function Worldwide(props) {
  return (
    <div className="worldwide">
      <div className="worldwideHdr">
        <img src={dcwwwh} className="logo" alt="logo" /> 
      </div>
      <div className="worldwideInfo">
        <div className="worldwidePhilosophy">
          <div className="philosophyInfo">
            <h4>philosophy</h4>
            <p>Drop Column Worldwide exists to unite mould-breaking artists.
              We are a label and network of individuals who match these core <span id="pillars">pillars</span>.
              Each member is certifiably:</p>
            <div className="columnDelim">
              <img src={columnblk} className="columnBlackSmall" alt="column-black" /> 
            </div>
          </div>
          <div className="philosophyPillars">
            <ul>
              <li>geniune in their interactions and beliefs</li>
              <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="column-black" /></div>
              <li>unique in the pursuit of their passion</li>
              <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="column-black" /></div>
              <li>open-minded in their perception of all disciplines and skill levels</li>
              <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="column-black" /></div>
              <li>self-critical and reflective of themselves</li>
            </ul>
          </div>
        </div>
        <div className="divider">
          <hr/>
        </div>
        <div className="worldwideRoster">
          <h4>roster</h4>
          <ul>
            <li><a href="/stoic">stoic da poet</a></li>
            <li><a href="/stoic">jones avenue</a></li>
            <li><a href="/stoic">beagle // LEND</a></li>
            <li><a href="/stoic">whxt</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Worldwide;
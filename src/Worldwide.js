import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import { FaSoundcloud, FaSpotify, FaApple, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiAudiomack } from "react-icons/si";
import logo from './assets/LM_black.png';
import droplet from './assets/images/LM_droplet_circle.png';
import column from './assets/images/LM_droplet_column.png';
import dcww from './assets/DCWW.png';
import dcwwwh from './assets/DCWW_white.png';
import columnblk from './assets/images/column_black.png';
import dropletblk from './assets/images/drop_black.png';
import './assets/stylesheets/Worldwide.css';


function Worldwide(props) {

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
  });

  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerElement = document.getElementsByClassName("worldwideHdr")[0],
      logoElement = document.getElementsByClassName("logo")[0];

    if (distanceY > shrinkOn) {
      headerElement.classList.add("smaller");
      logoElement.classList.add("smaller");
    } else {
      headerElement.classList.remove("smaller");
      logoElement.classList.remove("smaller");
    }
  }

  return (
    <div className="worldwide">
      <div className="worldwideHdr">
        <img src={dcwwwh} className="logo" alt="logo" /> 
      </div>
      <div className="worldwideInfo">
        <div className="worldwideMotto">
          <h1 id="dcwwTitle">DROP COLUMN WORLDWIDE</h1>
          <div>
            <a href="https://open.spotify.com/album/40oMUoQur6QnXebzBx2Okb?si=pagNWNzYQ_qKO83YHA8IMA" className="worldwideIcons" type="button" 
              rel="noopener noreferrer" target="_blank"><FaSpotify /></a>
            <a href="https://soundcloud.com/lawyermalloy/sets/dropcolumn" className="worldwideIcons" 
              type="button" rel="noopener noreferrer" target="_blank"><FaSoundcloud /></a>
            <a href="https://music.apple.com/us/album/drop-column-ep/1545428593" className="worldwideIcons" type="button" 
              rel="noopener noreferrer" target="_blank"><FaApple /></a>
            <a href="https://audiomack.com/lawyer-malloy/album/dropcolumn" className="worldwideIcons" type="button" 
              rel="noopener noreferrer" target="_blank"><SiAudiomack /></a>
          </div>
          <div id="worldwideBio">
            global hip-hop imprint.<br/>
            expression sees no boundaries.<br/>
            building pillars.<br/>
          </div>
        </div>
        <div className="divider">
          <hr/>
        </div>
        <div className="worldwideListen">
          <h4>listen now</h4>
          <ReactPlayer
            url={"https://soundcloud.com/dropcolumnworldwide/sets/introduction-to-drop-column"}
            width="auto"
            height="20em"
            className="worldwidePlaylist"
          />
        </div>
        <div className="divider">
          <hr/>
        </div>
        <div className="worldwidePhilosophy">
          <div className="philosophyInfo">
            <h4>philosophy</h4>
            <p>Drop Column Worldwide exists to bring together a group of artists who share a passion for breaking from the norm.<br/><br/>
              Operating on a foundation of these four  <span id="pillars">pillars</span>, each of these individuals matches our core values.
              They are:</p>
            <div className="divider">
              <hr/>
            </div>
          </div>
          <div className="philosophyPillars">
            <ul>
              <li>geniune in their passion to create</li>
              <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="column-black" /></div>
              <li>unique in their pursuit of improving as artists</li>
              <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="column-black" /></div>
              <li>open-minded in their perception of all disciplines and skill levels</li>
              <div className="dropletSpacer"><img src={dropletblk} className="dropletBlackSmall" alt="column-black" /></div>
              <li>self-critical and reflective of themselves</li>
            </ul>
          </div>
          <div className="columnDelim">
              <img src={columnblk} className="columnBlackSmall" alt="column-black" /> 
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
import styled from 'styled-components';
import '../assets/stylesheets/Home.css';
import { Link, Outlet } from "react-router-dom";
import stoic from '../assets/images/tectonic/stoic_funky.png';
import dcww from '../assets/images/dropcolumnworldwide3.png';

const StoicPicContainer = styled.div`
  width: 40vmin;
  height: 40vmin;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
`;

const StoicPic = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`;

const StoicBioContainer = styled.div`
  margin: 25px;
  width: 305px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  font-size: 12px;
`;

const StoicBio = styled.span`
  padding: 12px 2px;
  color: #fff;
`;

const EnterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 25px;
  color: black;
`;

const EnterButton = styled.a`
  padding: 3px;
  font-size: calc(1em - 4px);
  color: white;
  background-color: #9484ac;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  transition: background-color .05s;
  display: flex;
  width: 7vmin;
  height: 7vmin;
  text-align: center;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default function Stoic() {
  return (
    <div id="Stoic">
      {/* <StoicPicContainer>
        <StoicPic src={stoic} alt="stoic" />
      </StoicPicContainer> */}
      <StoicBioContainer>
        <StoicBio>
          The willow tree was orange in the setting sun.
          <br/><br/>
          Its shadow a black hole, the mass of weight of present and past.
          <br/><br/>
          Spun into a song of stung words and zero sums.
          <br/><br/>
          Relinquished as the willow stands strong against the shaking of the earth.
        </StoicBio>
      </StoicBioContainer>
      <EnterLinks>
        <EnterButton href="https://dropcolumn.com/">
          <img src={dcww} alt="DCWW" />
        </EnterButton>
        <EnterButton href="https://beacons.ai/stoicdapoet">
          <img src={stoic} alt="stoic" />
        </EnterButton>
      </EnterLinks>
      <Outlet />
    </div>
  );
}
import styled from 'styled-components';
import '../assets/stylesheets/Home.css';
import { Outlet } from "react-router-dom";
import ReactPlayer from 'react-player/lazy'
import tec from '../assets/images/tectonic/tecgrooves.png';
import soundcloud from '../assets/images/platforms/soundcloud.png';
import spotify from '../assets/images/platforms/spotify.svg';
import apple from '../assets/images/platforms/apple.svg';
import youtube from '../assets/images/platforms/youtube.png';
import tidal from '../assets/images/platforms/tidal-1.svg';
import pandora from '../assets/images/platforms/pandora.svg';
import amazon from '../assets/images/platforms/amazon.png';
import deezer from '../assets/images/platforms/deezer.svg';


const ReleaseContainer = styled.div`
  font-family: monospace;
  color: black;
  margin: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

const ReleaseInfoContainer = styled.div`
  flex: 3;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #333;
  margin: 5px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  width: 385px;
  display: block;
`;

const ArtistTitleContainer = styled.div`
  color: #fff;
  text-align: center;
  margin: 25px 0;
`;

const ReleaseTitle = styled.h1`
  margin: 15px 25px 0 25px;
  color: white;
  font-size: 1.5rem;
  background-color: black;
  width: fit-content;
`;

const ReleaseArtist = styled.h3`
  margin: 5px 25px 15px 25px;
  color: white;
  font-size: 1rem;
  background-color: black;
  width: fit-content;
  display: inline-block;
`;

const PlatformContainer = styled.div`
  background-color: #444;
  display: flex;
  flex-direction: column;
`;

const PlatformLink = styled.div`
  display: flex;
  align-items: center;
  // height: 40px;
  padding: 16px;
  border-top: 1px solid #111;
`;

const PlatformTitle = styled.div`
  flex: 1;
`;

const PlatformTitleImg = styled.img`
  filter: brightness(0) invert(1);
  height: 22px;
  display: block;
`;

const PlatformPlay = styled.div`
  flex: 1;
  text-align: right;
`;

const PlatformPlayLink = styled.a`
  color: #999;
  text-transform: uppercase;
  font-size: 11px;
  transition: background-color .05s;

  &:hover {
    color: #999;
    text-decoration: none;
  }
`;

const EnterSite = styled.a`
  color: white;
  background-color: #9484ac;
  cursor: pointer;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 18px;
  height: 35px;
  text-transform: uppercase;
  transition: background-color .05s;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const platforms = [
  {
    title: "Soundcloud",
    link: "https://soundcloud.com/stoicdapoet/tectonicgrooves-parkwayaspirations",
    img: soundcloud
  },
  {
    title: "Spotify",
    link: "https://open.spotify.com/track/05O536qUxYPvVby2TkGk3Z",
    img: spotify
  },
  {
    title: "Apple",
    link: "https://music.apple.com/us/album/late-ride-from-baltimore/1632284535?i=1632284870",
    img: apple
  },
  {
    title: "YouTube",
    link: "https://youtu.be/4kBE-uYA-0Y",
    img: youtube
  },
  {
    title: "TIDAL",
    link: "https://www.tidal.com/browse/track/235857357",
    img: tidal
  },
  {
    title: "Pandora",
    link: "https://www.pandora.com/artist/stoic-da-poet/tectonic-grooves-and-parkway-aspirations-explicit/late-ride-from-baltimore/TR5q739KzbVqr49?part=ug-desktop&corr=135757802340615001",
    img: pandora
  },
  {
    title: "Amazon",
    link: "https://music.amazon.ca/albums/B0B5F9MJJ7?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&ref=dm_sh_SDHhVLALOv7q10Pf3aF2jacZS&trackAsin=B0B5F7X2Q7",
    img: amazon
  },
  {
    title: "Deezer",
    link: "https://deezer.page.link/2UcPChmJ1EsnWTWp6",
    img: deezer
  },
  
]

export default function TecGrooves() {
  // const playButtonColor = "#9484ac";
  return (
    <div className="releaseContainer">
      <ReleaseContainer>
        <img src={tec} className="releaseCover" alt="tectonic" /> 
        <ReleaseInfoContainer>
          <ArtistTitleContainer>
            <ReleaseTitle>Tectonic Grooves <br/> & <br/> Parkway Aspirations</ReleaseTitle>
            <ReleaseArtist>stoic da poet</ReleaseArtist>
          </ArtistTitleContainer>
          <PlatformContainer>
            {platforms.map((platform) => (
              <PlatformLink key={platform.title}>
                <PlatformTitle>
                  <a href={platform.link} alt={platform.title} target="_blank" rel="noreferrer">
                    <PlatformTitleImg src={platform.img} alt={platform.title} />
                  </a>
                </PlatformTitle>
                <PlatformPlay>
                  <PlatformPlayLink href={platform.link} target="_blank">Play</PlatformPlayLink>
                </PlatformPlay>
              </PlatformLink>
            ))}
          </PlatformContainer>
        </ReleaseInfoContainer>
        <ReleaseInfoContainer>
          <ReactPlayer
            url={"https://soundcloud.com/stoicdapoet/tectonicgrooves-parkwayaspirations?color=%239484ac"}
            width="auto"
            height="50vh"
            className="releaseEmbed"
            config={{
              soundcloud: {
                color: "#9484ac",
                download: true,
              }
            }}
          />
        </ReleaseInfoContainer>
        <ReleaseInfoContainer>
          <EnterSite href="http://dropcolumn.com/stoic">Enter Site</EnterSite>
        </ReleaseInfoContainer>
      </ReleaseContainer>
      <Outlet />
    </div>
  );
}
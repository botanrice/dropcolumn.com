import styled from 'styled-components';
import '../assets/stylesheets/Home.css';
import { Link, Outlet } from "react-router-dom";
import { getDCWWData } from "../DCWWData";

const ArtistContainer = styled.div`
  font-family: monospace;
  color: black;
  margin: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const ArtistNames = styled(ArtistContainer)`
  margin-top: 100px;
  width: 50%;  
  flex-direction: row;
  justify-content: space-around;
`;

const UsHeader = styled.h3`
  font-size: 10px;
  background-color: white;
  padding: 5px;
`;

const ProfileWack = styled.div`
  margin: 10px;
  border: 1px solid white;
  border-radius: 50px;
  width: 75px;
  height: 75px;
  padding: 5px;
  font-size: 10px;
  font-weight: bold;
  background-color: #f0f8ff1a;
  cursor: pointer;

  &:hover {
    background-color: #00000054;
  }
`;

const WackName = styled.a`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export default function Artists() {
  let homies = getDCWWData();
  return (
    <div className="Artists">
      <ArtistContainer className="ArtistContainer">
        <UsHeader>us</UsHeader>
        <ArtistNames className="ArtistNamesContainer">
          {homies.map((homie) => {
            return (
              <ProfileWack key={homie.name}>
                <WackName href={homie.link} target="_blank" rel="noopener noreferrer">{homie.name}</WackName>
              </ProfileWack>
            );
          })}
        </ArtistNames>
      </ArtistContainer>
    </div>
  );
}
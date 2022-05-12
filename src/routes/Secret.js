import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import { getDCWWData } from "../DCWWData";
import beagle2 from "../assets/images/propics/beagle2.png";

const SecretDiv = styled.div`
  font-family: monospace;
  color: black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled.a`
  display: block;
  margin: 1rem 0;
  color: black;
  text-align: center;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin: 20px 0px 0px;
  padding: 0px 12px;
  border-radius: 4px;
  font-size: 22px;
  height: 55px;
  color: rgb(217, 85, 80);
  font-weight: bold;
  width: 200px;
  background-color: white;
  transform: translateY(6px);
  box-shadow: 0px 5px 0px 0px grey;
  transition: color 0.5s ease-in-out 0s;
  
  &:hover {
    color: red;
  }
`;

const ExtraStyledButton = styled.button.attrs((/* props */) => ({ tabIndex: 0 }))`
  cursor: pointer;
  margin: 20px 0px 0px;
  padding: 0px 12px;
  border-radius: 4px;
  font-size: 22px;
  height: 55px;
  color: black;
  font-weight: bold;
  width: 200px;
  background-color: white;
  box-shadow: 0px 5px 0px 0px grey;
  // transition: color 0.5s ease-in-out 0s;

  // &:hover {
  //   background: black;
  //   color: white;
  // }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(6px);
    box-shadow: 0px 0px 0px 0px;
  }
`;

const ExtraStyledInput = styled.input.attrs((/* props */) => ({ tabIndex: 0 }))`
  cursor: pointer;
  margin: 20px 0px 0px;
  padding: 0px 12px;
  border-radius: 4px;
  font-size: 22px;
  height: 55px;
  color: black;
  font-weight: bold;
  width: 200px;
  background-color: white;
  box-shadow: 0px 5px 0px 0px grey;
  // transition: color 0.5s ease-in-out 0s;

  // &:hover {
  //   background: black;
  //   color: white;
  // }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(6px);
    box-shadow: 0px 0px 0px 0px;
  }
`;

const LinkStyle = {
  "display": "block",
  "margin": "1rem 0",
  "color": "black",
  "text-align": "center",
}

const SecretFlexDiv = styled(SecretDiv)`
  font-family: monospace;
  color: black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileButton = styled.div.attrs((props) => ({ 
  topMargin: Math.round(Math.random() * 200),
  bottomMargin: Math.round(Math.random() * 200),
  leftMargin: Math.round(Math.random() * 500),
  rightMargin: Math.round(Math.random() * 500),
}))`
  border: 3px solid black;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin-top: ${props => props.topMargin}px;
  margin-bottom: ${props => props.bottomMargin}px;
  margin-left: ${props => props.leftMargin}px;
  margin-right: ${props => props.rightMargin}px;
  // margin: 5px;
  /* Button attributes */
  cursor: pointer;
  box-shadow: -5px 5px 0px 0px #9a9999;
  // transition: color 0.5s ease-in-out 0s;

  &:active {
    transform: translateX(-3px) translateY(3px);
    box-shadow: -2px 2px 0px 0px #9a9999;
  }
;`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;


export default function Secret() {
  let homies = getDCWWData();
  return (
    <SecretDiv className="SecretContainer">
      <SecretDiv className="SecretButtonContainer">
        {homies.map((homie) => {
          return (
            <ProfileButton key={homie.name}>
              <ProfileImg src={homie.img} alt={homie.name} title={homie.name} />  
            </ProfileButton>
          );
        })}
      </SecretDiv>
      <hr />
      <hr />
      <hr />
      {/* <SecretDiv className="SecretButtonContainer">
        {homies.map((homie) => {
          return (
            <ExtraStyledButton key={homie.name}>{homie.name}</ExtraStyledButton>
          );
        })}
      </SecretDiv> */}
    </SecretDiv>
  );
}

// {/* <StyledLink href={homie.link}>{homie.name}</StyledLink> */}
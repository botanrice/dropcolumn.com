import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import { getDCWWData } from "../DCWWData";

const SecretDiv = styled.div`
  font-family: monospace;
  color: black;
  margin: 10px;
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

export default function Secret() {
  let homies = getDCWWData();
  return (
    <SecretDiv>
      <SecretDiv>
        {homies.map((homie) => {
          return (
            <div>
              <StyledLink href={homie.link}>{homie.name}</StyledLink>
            </div>
          );
        })}
      </SecretDiv>
    </SecretDiv>
  );
}
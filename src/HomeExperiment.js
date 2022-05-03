import React from 'react';
import styled from 'styled-components';

const ExperimentHome = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100%;
  color: white;
  transition: background-color 0.5s ease-in-out 0s;
  padding-bottom: 12px;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top);  
`;

const ExperimentCore = styled.div`
  max-width: 620px;
  margin: auto;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  font-size: calc(10px);
  padding: 0;
`;

const ExperimentOption = styled.h1`
  font-family: monospace;
  color: limegreen;
  text-decoration: underline;
  text-decoration-thickness: 12px;
  margin: 10px;
`;

export default class HomeExperiment extends React.Component {
  render() {
    return (
      <ExperimentHome className="HomeExperiment">
        <ExperimentCore>
          <ExperimentOption>TELEPORT</ExperimentOption>
          <ExperimentOption>ENTER</ExperimentOption>
        </ExperimentCore>
      </ExperimentHome>
    );
  }
}
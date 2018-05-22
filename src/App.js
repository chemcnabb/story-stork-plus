import React, { Component } from 'react';
import BeatButton from "./styled/BeatButton";
import BeatList from './styled/BeatList';
import MainContainer from './styled/MainContainer';
import MainForm from './styled/MainForm';
import ProgressBar from './styled/ProgressBar';
import ProjectTitle from './styled/ProjectTitle';
import SideMenu from './styled/SideMenu';
class App extends Component {
  render() {
    return (
      <MainContainer>
        <SideMenu>
          <ProjectTitle>Title</ProjectTitle>
          <ProgressBar/>
          <BeatList>
            <BeatButton bg="#4B6CFC">TITLE</BeatButton>
            <BeatButton bg="#FFBA0C">OPENING IMAGE</BeatButton>
            <BeatButton bg="#8516FE">THEME</BeatButton>
          </BeatList>
        </SideMenu>
        <MainForm/>
      </MainContainer>
    );
  }
}

export default App;

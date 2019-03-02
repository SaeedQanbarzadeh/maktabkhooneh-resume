import React, { Component } from 'react';
import Navigation from './sections/navigation'
import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import './App.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import SnowStorm from 'react-snowstorm';


class App extends Component {
  render() {
    return (

    <div className="app">
        <SnowStorm />
        <Navigation/>
        <TitlesAndIcons/>
        <AboutSection/>
        <SkillSection/>
        <div onClick={
          function() {
            scroll.scrollToTop();
          }
        }
        className="scroll-up"
        >
          <img src="./scroll-up.png" width="30px" height="30px"/>
        </div>

    </div>
    
    );
  }
}


export default App;

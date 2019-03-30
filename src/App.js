import React, { Component } from 'react';
import Navigation from './sections/navigation'
import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import './App.css';
import { animateScroll as scroll } from 'react-scroll';
import SnowStorm from 'react-snowstorm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      titlesColor : '#004080' ,
      aboutColor : '#ffff59',
      skillColor : '#c0c0c0',
      colors : [
        "blue",
        "red",
        "green",
        "pink",
        "brown"
      ]
    }
  }
  pickRandomColor = () => {
    let {colors} = this.state;
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  }

  clickHandler = () => {
    this.setState({
      titlesColor :this.pickRandomColor(),
      aboutColor : this.pickRandomColor() , 
      skillColor : this.pickRandomColor()
    })
  }

  render() {
    let {titlesColor , aboutColor , skillColor} = this.state;
    return (
    <div className="app">
        <SnowStorm />
        <Navigation clickHandler={this.clickHandler}/>
        <TitlesAndIcons color={titlesColor}/>
        <AboutSection color={aboutColor}/>
        <SkillSection color={skillColor}/>
        <div onClick={
          function() {
            scroll.scrollToTop();
          }
        }
        className="scroll-up">
          <img src="./scroll-up.png" width="30px" height="30px"/>
        </div>
    </div>
    
    );
  }
}


export default App;

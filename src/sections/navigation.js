import React , {Component} from 'react';
import './navigation.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './AboutSection';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';



export default class Navigation extends Component{

    render(){
        return(
                <div className="navigation">
                
                    <div className="left-nav">
                        <div style={{cursor : 'pointer'}} onClick={() => this.props.clickHandler()}>Click Me!</div>
                    </div>
                    
                    <div className="right-nav">
                        <Link className="left" activeClass="active" to="About" smooth spy duration={500}>About</Link>
                        <Link className="right" activeClass="active" to="skill" smooth spy duration={500}>Skill</Link>
                    </div>
                </div>
            
        )
    }
}



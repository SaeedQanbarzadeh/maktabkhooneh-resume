import React , {Component} from 'react';
import './navigation.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './AboutSection';
import AboutSection from './AboutSection';

export default class Navigation extends Component{
        myFunction() {
        let elmnt = document.getElementsById("second");
        elmnt.scrollIntoView();
    }
    render(){
 
        
        return(
                <div className="navigation">
                
                    <div className="left-nav">
                        <div onClick="myFunction()" >clickME! 
                        </div>
                    </div>
                    

            
                    <div className="right-nav">
                        <div className="left">About </div>
                        <div className="right"
                        onClick={
                            <Link activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}>
                            </Link>
                        }>skill</div>
                    </div>
                </div>
            
        )
    }
}



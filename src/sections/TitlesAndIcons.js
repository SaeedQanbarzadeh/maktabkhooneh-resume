import React , {Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import './TitlesAndIcons.css';
import DownIcon from '../components/DownIcon';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class TitlesAndIcons extends Component{
  constructor(props){
    super(props);
    this.state = {
        color : "#004080"
    };

}

    render() {
        return(
          <div>
            <Fullpage className= "first" style={{background : this.props.color}}>
            <div >
                  <h1 className="title" >{data.title} </h1>
                  <h3 className="title"> {data.subtitle} </h3>
                  <div className="icon-wrapper">
                  {
                    Object.keys(data.links , scroll).map(key=>{
                      return(
                        <SocialIcon className="socialicon" url= {data.links[key]} /> 
                      );
                    })}
                    </div>
           </div>
           </Fullpage>

           <Link activeClass="active"
           to="About"
           spy={true}
           smooth={true}
           offset={50}
           duration={500}
          onSetActive={this.handleSetActive}>
         
           <DownIcon
           icon= {data.icons.down}
           onClick ={ ()=> {
             console.log("im working")
           }}
           />
           </Link>
           <Element name="About" className="element">
           </Element>
           <div >
           </div>
           </div>


        )
    }
}

export default TitlesAndIcons 
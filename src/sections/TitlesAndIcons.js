import React , {Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import './TitlesAndIcons.css';
import DownIcon from '../components/DownIcon';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { SSL_OP_SINGLE_DH_USE } from 'constants';


class TitlesAndIcons extends Component{
  state ={
    color:'white'
  }
  changeColor () {
      this.setState({
        color:this.state.color === 'white' ?'yellow' : 'white'
      })
  }
    render() {
        return(
          <div>
            <Fullpage className= "first">
            <div >
                  <h1 className="title"
                  style={{
                    color:this.state.color
                  }}
                    onMouseOver= {()=> {
                      this.changeColor()
                    }}
                    onMouseLeave={()=>{
                      this.changeColor()
                    }}
>
                   {data.title} </h1>
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
import React , {Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import './AboutSection.css';
import DownIcon from '../components/DownIcon';
import { Link, Element  } from 'react-scroll';

class AboutSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            color : "#004080"
        };

    }

    render() {
        return(
            <div>
            <Fullpage className= "second" style={{background : this.props.color}} id="second">
              <h3>{data.sections[0].title}</h3>
              <div className="paragraph"           >
                  {data.sections[0].items.map(p=>{
                   return <p>{p.content}</p>
                   })}
               </div>
            </Fullpage>
                       <Link activeClass="active"
                       to="skill"
                       spy={true}
                       smooth={true}
                       offset={50}
                       duration={500}
                       onSetActive={this.handleSetActive}>
                     
                       <DownIcon
                       icon= {data.icons.down}/>

                       </Link>
                       <Element name="skill" className="element">
                       </Element>
                       </div>
        )
    }
}

export default AboutSection ;
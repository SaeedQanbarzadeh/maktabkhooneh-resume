import React , {Component} from 'react';
import Fullpage from '../components/Fullpage';
import data from '../data.json';
import SkillCard from '../components/SkillCard';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class SkillSection extends Component{
    render() {
        return(
            <Fullpage className= "third" style={{background : this.props.color}}>
                <h3>{data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {
                    data.sections[1].items.map(eachSkill=> {
                        return(
                            <SkillCard skill ={eachSkill} />
                        )
                    })}
                </div>
            </Fullpage>

        )
    }
}

export default SkillSection ;
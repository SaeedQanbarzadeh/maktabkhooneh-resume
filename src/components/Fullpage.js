import React , {Component} from 'react';
import './Fullpage.css';

class Fullpage extends Component{
    render() {
        const{ children } = this.props
        return(
            <div style={this.props.style} className= { `fullpage ${this.props.className || ''}`}>
                {children}
            </div>
        )
    }
}

export default Fullpage 
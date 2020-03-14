import React from 'react';

import ColorButton from './colorButton/ColorButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class Control extends React.Component {
    constructor(props) {
        super(props);

        this.state = {color: 'black', strokeWeight: 50}
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleClick(e) {
        this.setState({color: e.target.value})
    }

    handleChange(e) {
        this.setState({strokeWeight: e.target.value})
    }


    render() {
        return (
            <div className="col">
                <div className="row btn-group" role="group" onClick={this.handleClick}>
                    <div className=" col btn-group" role="group" onClick={this.handleClick}>
                        <ColorButton 
                            color='black'
                            clicked={this.state.color}
                        />
                        <ColorButton 
                            color='white'
                            clicked={this.state.color}

                        />
                        <ColorButton 
                            color='red'
                            clicked={this.state.color}

                        />
                        <ColorButton 
                            color='blue'
                            clicked={this.state.color}

                        />
                        <ColorButton 
                            color='green'
                            clicked={this.state.color}

                        />
                        <ColorButton 
                            color='yellow'
                            clicked={this.state.color}

                        />
                    </div>
                </div>  
                <div className="row mt-2">
                    <input type="range" className="custom-range" min="1" max="50" step="1" id="strokeWeightRange" onChange={this.handleChange} />    
                </div>  
            </div>
        );
    }
}

export default Control;
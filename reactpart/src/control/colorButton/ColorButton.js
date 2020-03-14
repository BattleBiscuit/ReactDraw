import React from 'react';
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ColorButton.css'

class ColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false}
    }

    render() {
        if (this.props.clicked == this.props.color) {
            if(this.props.color == 'black' || this.props.color == 'blue') {
                return (
                    <button type="button" className="btn" value={this.props.color} style={{background: this.props.color, color: this.props.color}}> 
                        X
                    </button>
                )
            }else {
                return (
                    <button type="button" className="btn" value={this.props.color} style={{background: this.props.color, color: this.props.color}}> 
                        X
                    </button>
                )
            }
                    
        }
        else {
            return (
                <button type="button" className="btn" value={this.props.color} style={{background: this.props.color, color: this.props.color, opacity: 0.1}}> 
                    X
                </button>
            )     
        }
               
    }
}

export default ColorButton;
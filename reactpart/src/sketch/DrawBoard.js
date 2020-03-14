import React from 'react';

import Sketch from 'react-p5';
import './DrawBoard.css';


class DrawBoard extends React.Component {

    updateImage(image, p5) {
        console.log('draw update')
    }

    preload = (p5) => {

    }

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(735, 400).parent(canvasParentRef);
        p5.background(255);
    }

    draw = (p5) => {

    }
    mouseDragged = (p5) => {
        p5.stroke(this.props.color);
        p5.strokeWeight(this.props.strokeWeight);
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }

    keyPressed = (p5) => {
        if(p5.keyCode === 46) {
            p5.clear();
            p5.background(255);
        }
    }


    render() {
        return (
            <div>
                <Sketch 
                    preload = {this.preload}
                    setup = { this.setup }
                    draw = { this.draw }
                    mouseDragged = { this.mouseDragged }
                    keyPressed = { this.keyPressed }
                />
            </div>
        );
    }
}

export default DrawBoard;
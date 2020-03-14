import React from 'react';
import socketIOClient from'socket.io-client';

import Control from '../control/Control'
import './Game.css';
import DrawBoard from '../sketch/DrawBoard';
import Chat from '../chat/Chat'


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.controlPanel = React.createRef();
    this.canvas = React.createRef();

    this.state = {color: 'black', strokeWeight: 50}
    this.players = [];
  }

  componentDidMount() {
    const socket = socketIOClient("127.0.0.1:4001");

    socket.on('update image', (image) => {
      this.canvas.current.updateImage(image);
    })
  }


  render() {
    setInterval(() => {
      this.setState({color: this.controlPanel.state.color, strokeWeight: this.controlPanel.state.strokeWeight})
    }, 500);

    return (
      <div>
        <div className="container jumbotron" id="gameContainer">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <DrawBoard color={ this.state.color } strokeWeight={this.state.strokeWeight} ref={this.canvas} />
              </div>
              <div className="row" id="control">
                <Control ref={(controlPanel) => { this.controlPanel = controlPanel }}/>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-3 d-flex align-items-end">
              <Chat />
            </div>
          </div>
        </div>

        <div className="container jumbotron">
          {/* <PlayerList /> */}
        </div>

      </div>
      
    )
  }
}

export default Game;